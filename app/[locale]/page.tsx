import { useTranslations } from "next-intl";



export default function Home(
  props: any
) {

  const t  = useTranslations();

  return (
    <>
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-gray-950">
      <h2 className="font-bold text-4xl">Inicio</h2>
    </main>
    </>
  )
}
