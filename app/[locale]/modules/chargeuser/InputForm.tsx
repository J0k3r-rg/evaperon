import { DataInput } from "@/app/lib/definitions";

export default function InputForm(
    { item }:
        { item: DataInput }
) {

    return (
        <div
            className="relative bg-inherit mt-6"
        >
            <input 
                    type={item.type} 
                    id={item.name}
                    name={item.name}
                    className="peer bg-transparent h-12 text-xl w-96 rounded-lg text-gray-800 font-bold placeholder-transparent ring-2 px-2 ring-gray-800
                    dark:text-gray-200 dark:ring-sky-400 dark:focus:ring-blue-800 dark:focus:text-blue-800
                    focus:ring-sky-400 focus:outline-none focus:border-red-500 focus:text-blue-800" 
                    placeholder={item.placeholder}
                    autoComplete="off"
                    />
                <label 
                    htmlFor={item.name}
                    className="absolute font-bold cursor-text left-0 -top-3 text-gray-600 dark:text-gray-300 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">
                        {item.label}
                </label>
        </div>
    );
}