"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

import { db } from "@/db";
import { patientsTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { actionClient } from "@/lib/next-safe-action";

import { upsertPatientSchema } from "./schema";

export const upsertPatient = actionClient
  .schema(upsertPatientSchema)
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

    await db
      .insert(patientsTable)
      .values({
        id: parsedInput.id,
        clinic_id: session.user.clinic.id,
        name: parsedInput.name,
        email: parsedInput.email,
        phoneNumber: parsedInput.phoneNumber,
        sex: parsedInput.sex,
      })
      .onConflictDoUpdate({
        target: [patientsTable.id],
        set: {
          name: parsedInput.name,
          email: parsedInput.email,
          phoneNumber: parsedInput.phoneNumber,
          sex: parsedInput.sex,
        },
      });
    revalidatePath("/patients");
  });
