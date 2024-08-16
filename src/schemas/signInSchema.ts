import { z } from "zod";

const emailValidation = z.string()

export const signInSchema = z.object({
    identifier : emailValidation,
    password : z.string()
})