import { z } from "zod"; 

const contentValidation = z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(300, "Message should not be longer than 300 characters.")

export const messageSchema = z.object({
    content : contentValidation,
})