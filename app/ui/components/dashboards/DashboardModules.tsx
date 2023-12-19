'use client'
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";

export default function DashboardModules(){
    const [isOpen, setIsOpen] = useState(true);

    return(
        <>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="relative">
                <h2 className="font-bold text-4xl">Inicio modulos</h2>
            </div>
        </>
    )
}