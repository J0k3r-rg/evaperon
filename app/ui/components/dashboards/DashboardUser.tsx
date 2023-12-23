'use client'
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";
import { LinksDashboard } from "@/app/lib/definitions";
import { useSession } from 'next-auth/react';


export default function DashboardUser({links } : {links : LinksDashboard[]}){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
            <div className="ml-16 pt-14 pl-4">
                <h3 className="font-bold text-4xl">Dashboard User</h3>
            </div>
        </>
    )
}