import Link from 'next/link'
import React from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import { SiJusteat, SiGoogleclassroom } from "react-icons/si";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { FaCcMastercard,FaHome } from "react-icons/fa";
import { IoCreateSharp } from "react-icons/io5";



export default function Sidebar({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen : Function}){

    const links = [
        {name : 'Inicio', link: '' , icon : FaHome },
        {name : 'Viveres', link: '' , icon : SiJusteat },
        {name : 'Tramites', link: '' , icon : AiOutlineDeliveredProcedure },
        {name : 'Tarjeta Social', link: '' , icon : FaCcMastercard },
        {name : 'Talleres', link: '' , icon : SiGoogleclassroom },
        {name : 'Inscripciones', link: '' , icon : IoCreateSharp },
    ]

    return(
        <div className={`${isOpen ? 'w-72' : 'w-16'} relative bg-blue-600 duration-500 min-h-screen px-4`}>
            <div className="flex justify-end mt-4">
                <HiMenuAlt3 size={23} className={'cursor-pointer'} onClick={() => setIsOpen(!isOpen)} />
            </div>
            <div className='mt-6 flex flex-col gap-4 relative'>
                {
                    links.map((link, index) => {
                        return(
                            <Link href={link.link} key={index} 
                                    className='flex group items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-400 rounded-md duration-300'>
                                <div>{React.createElement(link.icon, {size: '20'})}</div>
                                <h2 
                                    style={{
                                        transitionDelay : `${index +3}00ms`
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
            </div>
        </div>
    )
}