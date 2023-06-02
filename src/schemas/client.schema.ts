import { z } from "zod";

export const clientRegisterSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório").min(3, "O nome deve conter pelo menos 3 letras"),
    email: z.string().email("Deve ser um e-mail válido").nonempty("E-mail é obrigatório"),
    password: z.string().nonempty("Senha é obrigatória").min(8, "A senha deve ter no minímo 8 digitos").regex(new RegExp(/(?=.*?[0-9])/), "A senha deve ter no minímo um número")
})

export const loginSchema = z.object({
    email: z.string().nonempty("E-mail é obrigatório").email("Deve ser um e-mail válido"),
    password: z.string().nonempty("Senha é obrigatória")
})

export type ClientRegisterData = z.infer<typeof clientRegisterSchema>
export type LoginData = z.infer<typeof loginSchema>