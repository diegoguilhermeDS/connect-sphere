import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { ContactData, contactSchema } from "@/schemas/contact.schema";
import { RiLoader4Line } from "react-icons/ri";
import { useAuth } from "@/hooks/useAuth";

interface iFormModalAddContact {
  setOpenModalAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormModalAddContact = ({ setOpenModalAdd }: iFormModalAddContact) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  const { loadBtn, handleCreateContact } = useAuth()

  const addContact = (data: ContactData) => {
    handleCreateContact(data, setOpenModalAdd)
  };

  return (
    <form
      className="flex flex-col gap-5 lg:w-[340px] mt-8 overflow-hidden"
      noValidate
      onSubmit={handleSubmit(addContact)}
    >
      <Input
        label="Nome"
        placeholder="Digite o nome"
        register={register("name")}
        type="text"
        error={errors.name && errors.name.message}
      />
      <Input
        label="E-mail"
        placeholder="Digite o e-mail"
        register={register("email")}
        type="email"
        error={errors.email && errors.email.message}
      />
      <Input
        label="Telefone"
        placeholder="(xx) 9xxxx-xxxx"
        register={register("phone")}
        type="phone"
        error={errors.phone && errors.phone.message}
      />
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="sm:w-[40%]">
          <Button type="negative" handle={() => setOpenModalAdd(false)}>
            Cancelar
          </Button>
        </div>
        <Button
          type={!isDirty || !isValid ? "disableBrand" : "brand"}
          submit
          disable={!isDirty || !isValid}
        >
          {!loadBtn ? (
            "Criar contato"
          ) : (
            <RiLoader4Line size={30} color="#fff" className="animate-spin" />
          )}
        </Button>
      </div>
    </form>
  );
};

export default FormModalAddContact;
