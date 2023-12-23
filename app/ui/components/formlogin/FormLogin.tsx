'use client';
import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { ClipLoader } from 'react-spinners';

export default function FormLogin() {

  const { status } = useSession();

  if (status === 'loading') {
    return (
      <ClipLoader
        color="rgba(248, 248, 248, 1)"
        size={120}
        speedMultiplier={0.5}
      />
    )
  }

  if (status === 'authenticated') {
    redirect('/dashboard')
  }

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", { username: "j0k3r", password: "270890", redirect: false })
    if (res?.ok){

      redirect('/dashboard')
    }
  }

  return (
    <form >
      <input type="text" name='username' placeholder='username' />
      <input type="text" name='password' placeholder='password' />
      <button onClick={login}> enviar </button>
    </form>
  )
}