'use client'
import AnimatedLink from "@/app/ui/components/animatedLink";
import clsx from "clsx";
import { LinkType } from "@/app/lib/definitions";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function NavBar(
    {links, locale}:
    {links : LinkType[], locale : string}
) {

    const pathname = usePathname();

    return (
        <ul className="flex flex-row">
            {
                links.map(element => {
                    return (
                        <li key={element.text + '2'} className="hover:scale-110 mr-4">
                            <AnimatedLink href={ '/'+ locale + element.url}
                                className={clsx(
                                    'text-xl border-1 rounded-full border-gray-800 pt-2 pb-2 pr-5 pl-5 '+
                                    'dark:text-white '+
                                    'hover:text-gray-100 hover:bg-slate-800 dark:hover:text-gray-900 dark:hover:bg-slate-300 sm:bg-none',
                                    {
                                        'bg-slate-800 dark:bg-gray-200 text-slate-100 dark:text-slate-800': pathname === `/${locale}${element.url === '/' ? '' : element.url}`,
                                    }
                                    )}>
                                {element.text}
                            </AnimatedLink>
                        </li>
                    )
                })
            }
        </ul>
    );
}