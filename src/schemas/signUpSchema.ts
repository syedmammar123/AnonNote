import { z } from "zod"; 

const usernameValidation = z
    .string()
    .max(15, "username must be less than 16 characters")
    .min(3, "username must be atleast 3 characters long")
    .regex(/^[a-zA-Z0-9_]+$/, 'Username must not contain special characters');


const emailValidation = z.string().email({message:"invalid email address"})

export const signUpSchema = z.object({
    username : usernameValidation,
    email : emailValidation,
    password : z.string().min(4,"password must be of length 4 atleast.")
})