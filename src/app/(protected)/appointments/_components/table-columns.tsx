"use client";

import { appointmentsTable } from "@/db/schema";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import { formatCurrencyInCents } from "@/helpers/currency";
import AppointmentsTableActions from "./table-actions";

dayjs.locale("pt-br");

type Appointment = typeof appointmentsTable.$inferSelect & {
  patient: {
    name: string;
  };
  doctor: {
    name: string;
    speciality: string;
  };
};

export const appointmentsTableColumns: ColumnDef<Appointment>[] = [
  {
    id: "patient",
    accessorKey: "patient.name",
    header: "Paciente",
  },
  {
    id: "doctor",
    accessorKey: "doctor.name",
    header: "Médico",
    cell: ({ row }) => {
      const appointment = row.original;
      return `${appointment.doctor.name}`;
    },
  },
  {
    id: "date",
    accessorKey: "date",
    header: "Data",
    cell: ({ getValue }) => {
      const value = getValue<Date>();
      if (!value) return "-";
      return dayjs(value).locale("pt-br").format("DD/MM/YYYY [às] HH:mm");
    },
  },
  {
    id: "speciality",
    accessorKey: "doctor.speciality",
    header: "Especialidade",
  },
  {
    id: "appointmentPriceInCents",
    accessorKey: "appointmentPriceInCents",
    header: "Valor",
    cell: ({ getValue }) => {
      const value = getValue<number>();
      return formatCurrencyInCents(value);
    },
  },
  {
    id: "actions",
    cell: (params) => {
      const appointment = params.row.original;
      return <AppointmentsTableActions appointment={appointment} />;
    },
  },
];
