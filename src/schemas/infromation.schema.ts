import { z } from "zod";

export const informationSchema = z.object({
    email: z.string().optional() ,
    phone: z.string().optional()
})

export type InformationData = z.infer<typeof informationSchema>