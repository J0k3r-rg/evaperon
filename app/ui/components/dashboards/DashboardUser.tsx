'use client'
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";
import { LinksDashboard } from "@/app/lib/definitions";
import { useSession } from 'next-auth/react';


export default function DashboardUser({links } : {links : LinksDashboard[]}){

    const [isOpen, setIsOpen] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage){
            return localStorage.getItem('isOpenSidebar') || true
        }
        return false
    });

    return(
        <>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
            <div className="relative pt-14 pl-2">
                <h2 className="font-bold text-4xl">Dashboard User</h2>
            </div>
        </>
    )
}