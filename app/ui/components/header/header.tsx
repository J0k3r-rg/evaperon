import AnimatedLink from "../animatedLink";
import { useLocale } from "next-intl"
import Image from "next/image";
import { useTranslations } from "next-intl";
import NavBarConditional from "./NavBarConditional";
import vars from '@/app/lib/configcolors'

export default function Header(){

    const locale = useLocale()
    const t = useTranslations('header');

    const linksModule  = Array.of('logout').map(element => ({
        url: t(`linksmodule.${element}.url`),
        text: t(`linksmodule.${element}.text`),
    }));

    const linksIndex  = Array.of('home', 'login','modules').map(element => ({
        url: t(`linksindex.${element}.url`),
        text: t(`linksindex.${element}.text`),
    }));

    return (
        <header className={
                "pageHeader flex items-center justify-between "+ 
                vars.headerligth + ' ' + vars.headerdark
                }>
            <div>
                <AnimatedLink href="/">
                    <Image src="/imgs/logo.png" alt="logo" className="mx-3 my-3" width={300} height={100}/>
                </AnimatedLink>
            </div>
            <NavBarConditional linksModule={linksModule} linksIndex={linksIndex} locale={locale} />
        </header>
    )
}