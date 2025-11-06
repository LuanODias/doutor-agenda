import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ClinicForm from "./_components/form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const ClinicFormPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/login");
  }
  if (!session.user.plan) {
    redirect("/new-subscription");
  }
  return (
    <div>
      <Dialog open={true}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Adicionar Clinica</DialogTitle>
            <DialogDescription>
              Adicione uma clinica para que você possa gerenciar seus pacientes
            </DialogDescription>
          </DialogHeader>
          <ClinicForm />
        </DialogContent>
      </Dialog>
      )
    </div>
  );
};

export default ClinicFormPage;
