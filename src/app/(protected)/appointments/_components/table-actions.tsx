"use client";

import { useState } from "react";

import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { TrashIcon, MoreVerticalIcon } from "lucide-react";

import { deleteAppointment } from "@/actions/upsert-appointment/delete-appointment";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { appointmentsTable } from "@/db/schema";

type Appointment = typeof appointmentsTable.$inferSelect & {
  patient: {
    name: string;
  };
  doctor: {
    name: string;
  };
};

interface AppointmentsTableActionsProps {
  appointment: Appointment;
}

const AppointmentsTableActions = ({
  appointment,
}: AppointmentsTableActionsProps) => {
  const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false);

  const deleteAppointmentAction = useAction(deleteAppointment, {
    onSuccess: () => {
      toast.success("Agendamento deletado com sucesso");
      setDeleteDialogIsOpen(false);
    },
    onError: () => {
      toast.error("Erro ao deletar agendamento");
    },
  });

  const handleDeleteAppointmentClick = () => {
    deleteAppointmentAction.execute({ id: appointment.id });
  };

  return (
    <AlertDialog open={deleteDialogIsOpen} onOpenChange={setDeleteDialogIsOpen}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreVerticalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            {appointment.patient.name} - {appointment.doctor.name}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
              setDeleteDialogIsOpen(true);
            }}
          >
            <TrashIcon />
            Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Tem certeza que deseja deletar esse agendamento?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não será revertida. Isso irá deletar o agendamento
            permanentemente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteAppointmentClick}>
            Deletar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AppointmentsTableActions;
