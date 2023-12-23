'use client'
import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";
import { LinkType } from "@/app/lib/definitions";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function NavBarConditional({
    linksIndex = [],
    locale
}: {
    linksIndex?: LinkType[],
    locale: string
}) {
    //con la session validaremos el rol del usuario para decidir que links mostrar en el navbar
    const { data: session, status } = useSession();

    if (status === 'authenticated') {
        linksIndex = linksIndex.filter(link => link.url != '/login')
    }


    const pathname = usePathname();

    return (
        <>
            <>
                <div className='hidden md:block'>
                    <NavBar links={linksIndex} locale={locale} />
                </div>
                <div className='md:hidden'>
                    <NavBarMobile links={linksIndex} locale={locale} />
                </div>
            </>
        </>
    );
}