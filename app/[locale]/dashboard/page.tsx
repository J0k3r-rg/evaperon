import { useLocale, useTranslations } from "next-intl";
import DashboardUser from "@/app/ui/components/dashboards/DashboardUser";


export default function Page(){
    const locale = useLocale();

    const t = useTranslations('dashboarduser');

    const links = [
        {name : t('index.name'), link: `/${locale}${t('index.url')}`},
        {name : t('food.name'), link: `/${locale}/` },
        {name : t('procedures.name'), link: `/${locale}/`  },
        {name : t('cardsocial.name'), link: `/${locale}/`},
        {name : t('workshops.name'), link: `/${locale}/` },
        {name : t('registrations.name'), link: `/${locale}/` }
    ]
    return(
        <main id="page" className="flex min-h-screen gap-6 dark:bg-slate-700">
            <DashboardUser links={links} />
        </main>
    )
}