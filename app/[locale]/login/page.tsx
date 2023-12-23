import FormLogin from '@/app/ui/components/formlogin/FormLogin';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

export default function LoginPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-gray-950">
            <FormLogin />
        </main>
    );
}