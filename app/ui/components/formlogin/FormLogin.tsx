'use client';
import { signIn } from 'next-auth/react';
import { ChangeEvent, useState } from 'react';

interface Props {
  state: boolean,
  setState: Function
}

export default function FormLogin() {

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", { username: form.username, password: form.password, redirect: true, callbackUrl: '/dashboard' })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form >
      <div
        className="relative bg-inherit mt-6"
      >
        <input
          className='peer bg-transparent h-12 text-xl w-96 rounded-lg text-gray-800 font-bold placeholder-transparent ring-2 px-2 ring-gray-800
          dark:text-gray-200 dark:ring-sky-400 dark:focus:ring-blue-800 dark:focus:text-blue-800
          focus:ring-sky-400 focus:outline-none focus:border-red-500 focus:text-blue-800'
          value={form.username} id='username' onChange={handleChange}
          type="text" name='username' placeholder='username' />
        <label
          htmlFor='username'
          className="absolute font-bold cursor-text left-0 -top-3 text-gray-600 dark:text-gray-300 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">
          Usuario
        </label>
      </div>
      <div
        className="relative bg-inherit mt-6"
      >
        <input
          className='peer bg-transparent h-12 text-xl w-96 rounded-lg text-gray-800 font-bold placeholder-transparent ring-2 px-2 ring-gray-800
        dark:text-gray-200 dark:ring-sky-400 dark:focus:ring-blue-800 dark:focus:text-blue-800
        focus:ring-sky-400 focus:outline-none focus:border-red-500 focus:text-blue-800'
          value={form.password} id='password' onChange={handleChange} type="text" name='password' placeholder='password' />
        <label
          htmlFor='password'
          className="absolute font-bold cursor-text left-0 -top-3 text-gray-600 dark:text-gray-300 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">
          Password
        </label>
      </div>
      <div className='flex place-content-center py-10'>
      <button
        className='w-80 h-12 rounded-md bg-slate-500'
        onClick={login}> enviar </button>
      </div>
    </form>
  )
}