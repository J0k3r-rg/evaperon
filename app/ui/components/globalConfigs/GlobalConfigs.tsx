'use client'
import { Switch } from "./switchLang";
import { IoMdSettings } from "react-icons/io";
import ChangeTheme from "./ChangeTheme";
import './globalConfigs.css';
import { useState } from "react";

export default function GlobalConfigs(){

    const [openConfigs, setOpenConfigs] = useState(true)

    return (
        <div id="configGlobal">
            <div 
                className={`cursor-pointer bg-slate-500 flex place-content-center p-2 rounded-full w-fit`}
                onClick={() => setOpenConfigs(!openConfigs)}
            >
                <IoMdSettings size={32} />
            </div>
            <div className={`${openConfigs && 'hidden'} fixed bottom-16 p-6 flex gap-6 flex-col rounded-md right-10 bg-slate-600`}>
                <Switch  />
                <ChangeTheme />
            </div>
        </div>
    )
}