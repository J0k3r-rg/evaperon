'use client'
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";
import { LinksDashboard } from "@/app/lib/definitions";

export default function DashboardUser({links } : {links : LinksDashboard[]}){
    const [isOpen, setIsOpen] = useState(() => {
        if (localStorage.getItem('isOpenSidebar')){
            return localStorage.getItem('isOpenSidebar') === 'true'? true : false
        }
        return false
    });

    return(
        <>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
            <div className="relative">
                <h2 className="font-bold text-4xl">Dashboard User</h2>
            </div>
        </>
    )
}