import { z } from "zod";

export const clientRegisterSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório").min(3, "O nome deve conter pelo menos 3 letras"),
    email: z.string().email("Deve ser um e-mail válido").nonempty("E-mail é obrigatório"),
    password: z.string().nonempty("Senha é obrigatória").min(8, "A senha deve ter no minímo 8 digitos").regex(new RegExp(/(?=.*?[0-9])/), "A senha deve ter no minímo um número"),
    confirmPassword: z.string().nonempty("Senha é obrigatória").min(8, "A senha deve ter no minímo 8 digitos").regex(new RegExp(/(?=.*?[0-9])/), "A senha deve ter no minímo um número"),
    phone: z.string().regex(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/, "Número de telefone inválido").nonempty("Telefone é obirgatório")
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"]
})

export const clientUpdateSchema = z.object({
    name: z.string().optional(),
    password: z.string().optional(),
})

export const loginSchema = z.object({
    email: z.string().nonempty("E-mail é obrigatório").email("Deve ser um e-mail válido"),
    password: z.string().nonempty("Senha é obrigatória")
})

export type ClientUpdateData = z.infer<typeof clientUpdateSchema>
export type ClientRegisterData = z.infer<typeof clientRegisterSchema>
export type LoginData = z.infer<typeof loginSchema>