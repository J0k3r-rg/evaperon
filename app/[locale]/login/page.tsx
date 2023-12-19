import {TiThMenu} from 'react-icons/ti'

export default function LoginPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-gray-950">
            <h2 className="font-bold text-4xl">Login</h2>
            <TiThMenu size={48} className={'text-red-600'}/>
        </main>
    );
}