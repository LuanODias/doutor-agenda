import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import Stripe from "stripe";

import { db } from "@/db";
import { usersTable } from "@/db/schema";

export const POST = async (request: Request) => {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    throw new Error("Stripe secret key not found");
  }
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    throw new Error("Stripe signature not found");
  }
  const text = await request.text();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-05-28.basil",
  });
  const event = stripe.webhooks.constructEvent(
    text,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET,
  );

  switch (event.type) {
    case "invoice.paid": {
      // --- INÍCIO DA CORREÇÃO ---

      // Tipamos o objeto 'invoice' para acessar os dados aninhados
      const invoice = event.data.object as {
        customer: string;
        parent: {
          subscription_details: {
            metadata: {
              userId: string;
            };
            subscription: string;
          };
        } | null;
      };

      const customer = invoice.customer;

      // Buscamos os dados do local correto (aninhado em 'parent')
      const subscription = invoice.parent?.subscription_details?.subscription;
      const userId = invoice.parent?.subscription_details?.metadata?.userId;

      // Se não for uma fatura de assinatura (ou não tiver userId),
      // apenas confirmamos o recebimento e saímos.
      if (!subscription || !userId) {
        return NextResponse.json({ received: true });
      }

      // Agora podemos atualizar o banco com os dados corretos
      await db
        .update(usersTable)
        .set({
          stripeSubscriptionId: subscription,
          stripeCustomerId: customer,
          plan: "essential",
        })
        .where(eq(usersTable.id, userId));

      // --- FIM DA CORREÇÃO ---
      break;
    }
    case "customer.subscription.deleted": {
      if (!event.data.object.id) {
        throw new Error("Subscription ID not found");
      }
      const subscription = await stripe.subscriptions.retrieve(
        event.data.object.id,
      );
      if (!subscription) {
        throw new Error("Subscription not found");
      }
      const userId = subscription.metadata.userId;
      if (!userId) {
        throw new Error("User ID not found");
      }
      await db
        .update(usersTable)
        .set({
          stripeSubscriptionId: null,
          stripeCustomerId: null,
          plan: null,
        })
        .where(eq(usersTable.id, userId));
    }
  }
  return NextResponse.json({
    received: true,
  });
};
