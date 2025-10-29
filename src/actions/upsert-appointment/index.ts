"use server";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

import { db } from "@/db";
import { appointmentsTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { actionClient } from "@/lib/next-safe-action";

import { upsertAppointmentSchema } from "./schema";

dayjs.extend(utc);

export const upsertAppointment = actionClient
  .schema(upsertAppointmentSchema)
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

    // Combina data e horário em uma única data/hora
    const appointmentDateTime = dayjs(parsedInput.date)
      .set("hour", Number(parsedInput.time.split(":")[0]))
      .set("minute", Number(parsedInput.time.split(":")[1]))
      .set("second", Number(parsedInput.time.split(":")[2] || 0))
      .toDate();

    await db
      .insert(appointmentsTable)
      .values({
        id: parsedInput.id,
        clinicId: session.user.clinic.id,
        patientId: parsedInput.patientId,
        doctorId: parsedInput.doctorId,
        date: appointmentDateTime,
        appointmentPriceInCents: parsedInput.appointmentPriceInCents,
      })
      .onConflictDoUpdate({
        target: [appointmentsTable.id],
        set: {
          patientId: parsedInput.patientId,
          doctorId: parsedInput.doctorId,
          date: appointmentDateTime,
          appointmentPriceInCents: parsedInput.appointmentPriceInCents,
        },
      });

    revalidatePath("/appointments");
  });
