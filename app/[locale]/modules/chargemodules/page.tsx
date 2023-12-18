import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Module | Charge modules',
    description: 'Page for create user to app',
  }

export default function Page(){
    return(
        <div className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-gray-950">
            <h3 className="text-3xl text-slate-800 dark:text-gray-400">Charge Modules</h3>
        </div>
    )
}