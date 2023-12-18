'use client'
import { useState, useEffect } from "react";


export default function ChangeTheme() {

    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const changeTheme = () => {
        setTheme(theme === 'light'? 'dark' : 'light');
    }

    return (
        <div>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    );
}