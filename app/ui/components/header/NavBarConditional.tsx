'use client'
import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";
import { LinkType } from "@/app/lib/definitions";
import { usePathname } from "next/navigation";


export default function NavBarConditional({
    linksIndex = [],
    locale
}:{
    linksIndex?: LinkType[],
    locale: string
}) {
    const pathname = usePathname();

    return (
        <>
            {
                pathname.startsWith('/' + locale ) && !pathname.startsWith('/' + locale + '/modules') &&
                
                <>
                    <div className='hidden md:block'>
                        <NavBar links={linksIndex} locale={locale} />   
                    </div>
                    <div className='md:hidden'>
                        <NavBarMobile links={linksIndex} locale={locale} />
                    </div>
                </>                 
            }
        </>
    );
}