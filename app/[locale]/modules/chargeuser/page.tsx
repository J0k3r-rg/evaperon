import { Metadata } from "next";
import Form from "./Form";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
    title: 'Module | Charge user',
    description: 'Page for create user to app',
  }

export default function Page() {

    const t = useTranslations('chargeuser')
    const datos = {
        title : t('tittle'),
        name: t('name'),
        lastname : t('lastname'),
        email: t('email'),
        dni: t('dni'),
        address: t('address'),
        phone : t('phone'),
        birthdate : t('birthdate'),
        submit : t('submit')
    }

    return (
        <>
                <div className="text-center p-3 bg-white dark:bg-zinc-900"
                >
                    <h3 className="text-3xl mt-5 text-slate-800 font-bold dark:text-gray-400">{datos.title}</h3>
                    <Form t={datos}/>
                </div>
        </>
    )
}