import Link from 'next/link';
import React, { useEffect } from 'react';
import { LinksDashboard } from '@/app/lib/definitions';
import { SiJusteat, SiGoogleclassroom } from "react-icons/si";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { FaCcMastercard, FaHome, FaArrowAltCircleRight } from "react-icons/fa";
import { IoCreateSharp, IoLogOut } from "react-icons/io5";
import { signOut,useSession } from 'next-auth/react';


export default function Sidebar({ isOpen, setIsOpen, links }: { isOpen: string | boolean, setIsOpen: Function, links: LinksDashboard[] }) {

    const {data : session} = useSession();

    const icons = [
        FaHome,
        SiJusteat,
        AiOutlineDeliveredProcedure,
        FaCcMastercard,
        SiGoogleclassroom,
        IoCreateSharp,
        IoLogOut
    ];

    const updatedLinks = links.map((link, index) => {
        if (typeof icons[index] === 'string' || typeof icons[index] === 'function') {
            return { ...link, icon: icons[index] };
        } else {
            console.warn(`Icono en la posición ${index} no es válido.`);
            return link;
        }
    });

    const closeSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`${isOpen ? 'w-72' : 'w-16'} absolute bg-blue-300 dark:bg-gray-800 duration-500 min-h-screen px-4`}>
            <div className="flex justify-end mt-4">
                <FaArrowAltCircleRight size={23} className={`${isOpen && 'rotate-180'} cursor-pointer duration-500 delay-500`} onClick={closeSidebar} />
            </div>
            <div className='mt-6 flex flex-col gap-2 relative'>
                {
                    updatedLinks.map((link, index) => {
                        return (
                            <Link href={link.link} key={index}
                                className='flex group dark:text-white items-center text-lg gap-3.5 font-bold px-2 py-4 hover:bg-gray-400 rounded-md duration-300'>
                                <div>{React.createElement(link.icon, { size: '20' })}</div>
                                <h2
                                    style={{
                                        transitionDelay: `${index + 3}00ms`
                                    }}
                                    className={`whitespace-pre duration-500 
                                    ${!isOpen && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                                    {link.name}
                                </h2>
                                <h2
                                    className={`${isOpen && 'hidden'} absolute left-48 bg-blue-300 font-semibold whitespace-pre text-gray-950 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                                    {link.name}
                                </h2>
                            </Link>
                        )
                    })
                }
                <button onClick={() => signOut()}
                        className='flex group dark:text-white items-center text-lg gap-3.5 font-bold px-2 py-4 hover:bg-gray-400 rounded-md duration-300'>
                    <div>{React.createElement(IoLogOut, { size: '20' })}</div>
                    <h2
                        style={{
                            transitionDelay: `${updatedLinks.length + 3}00ms`
                        }}
                        className={`whitespace-pre duration-500 
                                    ${!isOpen && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                        Logout
                    </h2>
                    <h2
                        className={`${isOpen && 'hidden'} absolute left-48 bg-blue-300 font-semibold whitespace-pre text-gray-950 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                        Logout
                    </h2>
                </button>
            </div>
        </div>
    )
}