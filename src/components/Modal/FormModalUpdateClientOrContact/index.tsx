import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { ClientUpdateData, clientUpdateSchema } from "@/schemas/client.schema";
import { useAuth } from "@/hooks/useAuth";

interface iFormModalUpdateClientOrContactProps {
  endPoint: "clients" | "contacts";
  name: string;
  id: string;
  setOpenModalUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  setHiddenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormModalUpdateClientOrContact = ({
  endPoint,
  name,
  id,
  setOpenModalUpdate,
  setHiddenModal,
  setOpenModalEdit
}: iFormModalUpdateClientOrContactProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientUpdateData>({
    resolver: zodResolver(clientUpdateSchema),
  });

  const { handleUpdateClient, handleUpdateContact } = useAuth();

  const [newName, setNewName] = useState(name);

  const UpdateClient = (data: ClientUpdateData) => {
    handleUpdateClient(id, name, data, setOpenModalUpdate, setOpenModalEdit);
  };

  const updateContact = (data: ClientUpdateData) => {
    handleUpdateContact(id, name, data, setOpenModalUpdate, setOpenModalEdit)
  };

  return (
    <form
      className="flex flex-col gap-5 lg:w-[340px] mt-8"
      onSubmit={
        endPoint == "clients"
          ? handleSubmit(UpdateClient)
          : handleSubmit(updateContact)
      }
      noValidate={false}
    >
      <fieldset className="relative flex flex-col gap-2">
        <label htmlFor={name} className="input-label text-gray-950">
          Nome
        </label>
        <input
          type="text"
          id={name}
          placeholder="Digite um novo nome"
          {...register("name")}
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="
            input-base
            input-placeholder
            transition-all
            ease-in-out
            duration-300
            "
        />
        {errors.name && (
          <span className="absolute -bottom-4 text-xs text-rose-600">
            {errors.name.message}
          </span>
        )}
      </fieldset>
      {endPoint == "clients" && (
        <Input
          label="Senha"
          placeholder="Digite uma nova senha"
          register={register("password")}
          type="password"
          error={errors.password && errors.password.message}
        />
      )}
      <div className="flex gap-5">
        <div className="sm:w-[40%]">
          <Button
            type="negative"
            submit={false}
            handle={() => (setHiddenModal(false), setOpenModalUpdate(false))}
          >
            Cancelar
          </Button>
        </div>
        <Button type="brand" submit>
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default FormModalUpdateClientOrContact;
