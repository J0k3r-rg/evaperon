'use client'
import { LinkType } from "@/app/lib/definitions";
import AnimatedLink from "@/app/ui/components/animatedLink";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

export default function NavBarMobile(
    { links, locale }:
        { links: LinkType[], locale: string }
) {

    const [isOpen, setIsOpen] = useState(false);

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const pathname = usePathname();

    return (
            <div className="relative inline-block bg-inherit ">
                <button
                    type="button"
                    className="px-3 py-2 mr-4 text-white bg-transparent text-center 
                    hover:bg-blue-400  font-medium rounded-lg text-sm inline-flex items-center"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-10 h-10 ml-2.5 m-auto" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <linearGradient className="w-11/12" id="C9TYDZarys49lHDy~k4THa_eofQ1g5BaAx6_gr1" x1="12.373" x2="34.611" y1="-154.373" y2="-176.611" gradientTransform="matrix(1 0 0 -1 0 -154)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0077d2"></stop><stop offset="1" stopColor="#0b59a2"></stop></linearGradient><path fill="url(#C9TYDZarys49lHDy~k4THa_eofQ1g5BaAx6_gr1)" d="M42,15H6c-1.65,0-3-1.35-3-3v0c0-1.65,1.35-3,3-3h36c1.65,0,3,1.35,3,3v0	C45,13.65,43.65,15,42,15z"></path><linearGradient id="C9TYDZarys49lHDy~k4THb_eofQ1g5BaAx6_gr2" x1="12.373" x2="34.611" y1="-166.373" y2="-188.611" gradientTransform="matrix(1 0 0 -1 0 -154)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0077d2"></stop><stop offset="1" stopColor="#0b59a2"></stop></linearGradient><path fill="url(#C9TYDZarys49lHDy~k4THb_eofQ1g5BaAx6_gr2)" d="M42,27H6c-1.65,0-3-1.35-3-3v0c0-1.65,1.35-3,3-3h36c1.65,0,3,1.35,3,3v0	C45,25.65,43.65,27,42,27z"></path><linearGradient id="C9TYDZarys49lHDy~k4THc_eofQ1g5BaAx6_gr3" x1="12.373" x2="34.611" y1="-178.373" y2="-200.611" gradientTransform="matrix(1 0 0 -1 0 -154)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0077d2"></stop><stop offset="1" stopColor="#0b59a2"></stop></linearGradient><path fill="url(#C9TYDZarys49lHDy~k4THc_eofQ1g5BaAx6_gr3)" d="M42,39H6c-1.65,0-3-1.35-3-3v0c0-1.65,1.35-3,3-3h36c1.65,0,3,1.35,3,3v0	C45,37.65,43.65,39,42,39z"></path>
                    </svg>
                </button>

                {isOpen && (
                    <div className=" bg-slate-500 origin-top-right absolute right-6 mt-2 w-56 rounded-xl shadow-lg ring-1 ring-slate-950 ring-opacity-70 ring-offset-2 bg-inherit">
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {
                                links.map(element =>
                                    <li key={element.text}>
                                        <AnimatedLink
                                            href={'/' + locale + element.url}
                                            className={clsx(
                                                "block px-6 py-4 text-md text-gray-700 hover:bg-gray-300",
                                                {
                                                    "hover:rounded-b-xl" : element.url ===  '/dashboard'
                                                },
                                                {
                                                    'bg-slate-800 dark:bg-gray-200 text-slate-100 dark:text-slate-800 rounded-t-xl': pathname === '/'+ locale + element.url,
                                                })}
                                            onClick={closeDropdown}
                                        >
                                            {element.text}
                                        </AnimatedLink>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                )}
            </div>
    )
}