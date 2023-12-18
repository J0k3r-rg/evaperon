'use server'
import { z } from "zod";
import { DataModel } from "./definitions";

export type State = {
    errors?: {
        name?: string[];
        lastmane?: string[];
        email?: string[];
        dni?: string[];
        address? : string[];
        phone?: string[];
    };
    message?: string | null;
};

const FormSchema = z.object({
    name: z.string(),
    lastname: z.string(),
    email: z.string(),
    dni: z.string(),
    address: z.string(),
    phone: z.string()
})

const CreateUser = FormSchema.omit({})

export async function saveUser(prevState: State, formData: FormData) {
    const validatedFields = CreateUser.safeParse({
        name: formData.get('name'),
        lastname: formData.get('lastname'),
        email: formData.get('email'),
        dni: formData.get('dni'),
        address: formData.get('address'),
        phone: formData.get('phone')
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }

    const user : DataModel = validatedFields.data;

    console.log(user)

}