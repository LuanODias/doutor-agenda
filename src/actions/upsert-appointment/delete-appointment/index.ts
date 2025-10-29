"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

import { db } from "@/db";
import { appointmentsTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { actionClient } from "@/lib/next-safe-action";
import { z } from "zod";

const deleteAppointmentSchema = z.object({
  id: z.string().uuid({
    message: "ID do agendamento é obrigatório",
  }),
});

export const deleteAppointment = actionClient
  .schema(deleteAppointmentSchema)
  .action(async ({ parsedInput }) => {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      throw new Error("Unauthorized");
    }

    if (!session?.user.clinic) {
      throw new Error("Clinic not found");
    }
    // Busca o agendamento para garantir que pertence à clínica do usuário
    const appointment = await db.query.appointmentsTable.findFirst({
      where: (appointment, { eq }) => eq(appointment.id, parsedInput.id),
      columns: {
        clinicId: true,
      },
    });

    if (!appointment || appointment.clinicId !== session.user.clinic.id) {
      throw new Error("Agendamento não encontrado");
    }

    await db
      .delete(appointmentsTable)
      .where(eq(appointmentsTable.id, parsedInput.id));

    revalidatePath("/appointments");
  });
