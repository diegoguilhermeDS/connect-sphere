import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .nonempty("Nome é obrigatório")
    .min(3, "O nome deve conter pelo menos 3 letras"),
  email: z
    .string()
    .email("Deve ser um e-mail válido")
    .nonempty("E-mail é obrigatório"),
  phone: z
    .string()
    .regex(
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
      "Número de telefone inválido"
    )
    .nonempty("Telefone é obirgatório"),
});

export type ContactData = z.infer<typeof contactSchema>;
