"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { format } from "date-fns";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";

dayjs.locale("pt-br");
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { toast } from "sonner";
import { z } from "zod";

import { upsertAppointment } from "@/actions/upsert-appointment";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { appointmentsTable, doctorsTable, patientsTable } from "@/db/schema";
import { ptBR } from "date-fns/locale";

const formSchema = z.object({
  patientId: z.string().uuid({
    message: "Paciente é obrigatório",
  }),
  doctorId: z.string().uuid({
    message: "Médico é obrigatório",
  }),
  appointmentPrice: z.number().min(1, {
    message: "Valor da consulta é obrigatório",
  }),
  date: z.date({
    message: "Data da consulta é obrigatória",
  }),
  time: z.string({
    message: "Horário da consulta é obrigatório",
  }),
});

interface UpsertAppointmentFormProps {
  isOpen: boolean;
  appointment?: typeof appointmentsTable.$inferSelect;
  patients: (typeof patientsTable.$inferSelect)[];
  doctors: (typeof doctorsTable.$inferSelect)[];
  onSuccess?: () => void;
}

const UpsertAppointmentForm = ({
  appointment,
  patients,
  doctors,
  onSuccess,
  isOpen,
}: UpsertAppointmentFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientId: appointment?.patientId ?? "",
      doctorId: appointment?.doctorId ?? "",
      appointmentPrice: appointment?.appointmentPriceInCents
        ? appointment.appointmentPriceInCents / 100
        : 0,
      date: appointment?.date ? new Date(appointment.date) : undefined,
      time: "",
    },
  });

  const selectedDoctorId = form.watch("doctorId");
  const selectedPatientId = form.watch("patientId");
  const selectedDoctor = doctors.find((d) => d.id === selectedDoctorId);

  useEffect(() => {
    if (selectedDoctor?.appointmentPriceInCents && !appointment) {
      form.setValue(
        "appointmentPrice",
        selectedDoctor.appointmentPriceInCents / 100,
      );
    }
  }, [selectedDoctor, form, appointment]);

  useEffect(() => {
    if (isOpen) {
      if (appointment) {
        form.reset({
          patientId: appointment.patientId,
          doctorId: appointment.doctorId,
          appointmentPrice: appointment.appointmentPriceInCents / 100,
          date: new Date(appointment.date),
          time: "",
        });
      } else {
        form.reset({
          patientId: "",
          doctorId: "",
          appointmentPrice: 0,
          date: undefined,
          time: "",
        });
      }
    }
  }, [isOpen, form, appointment]);

  const upsertAppointmentAction = useAction(upsertAppointment, {
    onSuccess: () => {
      toast.success(
        appointment
          ? "Agendamento atualizado com sucesso"
          : "Agendamento criado com sucesso",
      );
      onSuccess?.();
    },
    onError: () => {
      toast.error(
        appointment
          ? "Erro ao atualizar agendamento"
          : "Erro ao criar agendamento",
      );
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    upsertAppointmentAction.execute({
      id: appointment?.id,
      patientId: values.patientId,
      doctorId: values.doctorId,
      appointmentPriceInCents: Math.round(values.appointmentPrice * 100),
      date: values.date,
      time: values.time,
    });
  };

  const isDateEnabled = !!(selectedPatientId && selectedDoctorId);
  const isTimeEnabled = !!(selectedPatientId && selectedDoctorId);
  const isPriceEnabled = !!selectedDoctorId;

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          {appointment ? "Editar Agendamento" : "Novo Agendamento"}
        </DialogTitle>
        <DialogDescription>
          {appointment
            ? "Edite as informações do agendamento"
            : "Crie um novo agendamento para um paciente"}
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="patientId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Paciente</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um paciente" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {patients.map((patient) => (
                      <SelectItem key={patient.id} value={patient.id}>
                        {patient.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="doctorId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Médico</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um médico" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {doctors.map((doctor) => (
                      <SelectItem key={doctor.id} value={doctor.id}>
                        {doctor.name} - {doctor.speciality}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="appointmentPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Valor da Consulta</FormLabel>
                <FormControl>
                  <NumericFormat
                    value={field.value}
                    decimalScale={2}
                    fixedDecimalScale
                    prefix="R$ "
                    customInput={Input}
                    disabled={!isPriceEnabled}
                    onValueChange={(value) => {
                      field.onChange(value.floatValue || 0);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Data</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        data-empty={!field.value}
                        disabled={!isDateEnabled}
                        className="data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          dayjs(field.value)
                            .locale("pt-br")
                            .format("D [de] MMMM [de] YYYY")
                        ) : (
                          <span>Selecione uma data</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={!isDateEnabled}
                      locale={ptBR}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Horário</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={!isTimeEnabled}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um horário" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {/* Placeholder - sem opções por enquanto */}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter>
            <Button type="submit" disabled={upsertAppointmentAction.isPending}>
              {upsertAppointmentAction.isPending
                ? appointment
                  ? "Salvando..."
                  : "Criando..."
                : appointment
                  ? "Salvar"
                  : "Criar Agendamento"}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default UpsertAppointmentForm;
