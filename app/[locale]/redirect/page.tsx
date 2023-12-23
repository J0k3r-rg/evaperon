'use client'
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

export default function RedirectFunction(){

    const { data : session} = useSession();

    if (session?.user.username === 'j0k3r') {
        redirect('/modules')
    }
    if (session?.user.username === 'qu33n') {
        redirect('/dashboard')
    }
}