import { z } from "zod";

export const upsertAppointmentSchema = z.object({
  id: z.string().uuid().optional(),
  patientId: z.string().uuid({
    message: "Paciente é obrigatório",
  }),
  doctorId: z.string().uuid({
    message: "Médico é obrigatório",
  }),
  appointmentPriceInCents: z.number().min(1, {
    message: "Valor da consulta é obrigatório",
  }),
  date: z.date({
    message: "Data da consulta é obrigatória",
  }),
  time: z.string({
    message: "Horário da consulta é obrigatório",
  }),
});

export type UpsertAppointmentSchema = z.infer<typeof upsertAppointmentSchema>;
