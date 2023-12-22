import FormLogin from '@/app/ui/components/formlogin/FormLogin';

export default function LoginPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-gray-950">
            <h2 className="font-bold text-4xl">Login</h2>
            <FormLogin />
        </main>
    );
}