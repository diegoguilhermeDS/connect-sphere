import Input from "@/components/Input";
import InputError from "@/components/Input/InputError";
import Toast from "@/components/Toast";
import { useClient } from "@/hooks/useClient";
import { ClientUpdateData, clientUpdateSchema } from "@/schemas/client.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const UpdateClient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientUpdateData>({
    resolver: zodResolver(clientUpdateSchema),
  });

  const { clientCurrent, handleUpdateClient } = useClient();
  const [nameValue, setNameValue] = useState(clientCurrent.name)

  const handleUpdate = (data: ClientUpdateData) => {
    delete data.confirmPassword

    if(data.password!.length <= 0){
      delete data.password
    } else {
      if(data.password!.length <= 7 ){
        return Toast({message: "A senha deve ter no minímo 8 digitos", type: "error"})
      }
    }

    if(data.name!.length <= 2){
      return Toast({message: "O nome deve conter pelo menos 3 letras", type: "error"})
    }

    handleUpdateClient(clientCurrent.id, data)
  };

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(handleUpdate)}
      noValidate={false}
    >
      <input
        type="text"
        {...register("name")}
        name="name"
        id="name"
        placeholder="Nome"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      {errors?.name && <InputError message={errors.name.message!} />}
      <Input
        type="password"
        inputName="password"
        placeholder="Digite aqui sua nova senha"
        register={register("password")}
      />
      {errors?.password && <InputError message={errors.password.message!} />}
      <Input
        type="password"
        inputName="confirm"
        placeholder="Digite novamente sua nova senha"
        register={register("confirmPassword")}
      />
      {errors?.confirmPassword && (
        <InputError message={errors.confirmPassword.message!} />
      )}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default UpdateClient;
