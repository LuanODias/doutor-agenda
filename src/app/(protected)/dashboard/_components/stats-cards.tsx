"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrencyInCents } from "@/helpers/currency";
import { CalendarDays, DollarSign, Stethoscope, Users } from "lucide-react";

interface StatsCardsProps {
  totalRevenueInCents: number | null | undefined;
  totalAppointments: number | null | undefined;
  totalPatients: number | null | undefined;
  totalDoctors: number | null | undefined;
}

export function StatsCards({
  totalRevenueInCents,
  totalAppointments,
  totalPatients,
  totalDoctors,
}: StatsCardsProps) {
  const revenue = totalRevenueInCents ?? 0;
  const appointments = totalAppointments ?? 0;
  const patients = totalPatients ?? 0;
  const doctors = totalDoctors ?? 0;

  const items: {
    title: string;
    icon: React.ReactNode;
    value: React.ReactNode;
  }[] = [
    {
      title: "Faturamento",
      icon: <DollarSign className="h-4 w-4 text-blue-500" />,
      value: formatCurrencyInCents(revenue),
    },
    {
      title: "Agendamentos",
      icon: <CalendarDays className="h-4 w-4 text-blue-500" />,
      value: appointments,
    },
    {
      title: "Pacientes",
      icon: <Users className="h-4 w-4 text-blue-500" />,
      value: patients,
    },
    {
      title: "Médicos",
      icon: <Stethoscope className="h-4 w-4 text-blue-500" />,
      value: doctors,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Card key={item.title} className="gap-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-muted-foreground flex items-center gap-2 text-sm font-medium">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                {item.icon}
              </span>
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default StatsCards;
