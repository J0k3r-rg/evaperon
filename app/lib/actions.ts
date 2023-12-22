'use server'
import { signIn } from "next-auth/react"
import { redirect } from "next/navigation"

export const login = async ( formData: FormData ) => {
    console.log(formData.get('username'),formData.get('password'))
    const nextResponseAuth = await signIn(
        "credentials",
        {
            username : formData.get('username'),
            password  : formData.get('password')
        }
    )

    if (nextResponseAuth?.error){
        return;
    }

    redirect('en/dashboard')
}