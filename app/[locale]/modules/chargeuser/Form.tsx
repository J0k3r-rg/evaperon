'use client';
import InputForm from "./InputForm";
import { useFormState } from "react-dom";
import { saveUser } from "@/app/lib/actions";
import { DataInput } from "@/app/lib/definitions";

export default function Form({ t }: {
    t: any
}) {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(saveUser, initialState);

    const items : DataInput[] = [
        {
            label: t?.name,
            name: 'name',
            type: 'text',
            placeholder: t?.name
        },
        {
            label: t?.lastname,
            name: 'lastname',
            type: 'text',
            placeholder: t?.lastname
        },
        {
            label: t?.email,
            name: 'email',
            type: 'email',
            placeholder: t?.email
        },
        {
            label: t?.dni,
            name: 'dni',
            type: 'text',
            placeholder: t?.dni
        },
        {
            label: t?.address,
            name: 'address',
            type: 'text',
            placeholder: t?.address
        },
        {
            label: t?.phone,
            name: 'phone',
            type: 'text',
            placeholder: t?.phone
        },
        {
            label: t?.birthdate,
            name:'birthdate',
            type:'date',
            placeholder: t?.birthdate
        }
    ]

    return (
        <form action={dispatch} className="flex flex-col items-center mt-6 bg-inherit">
            {
                items.map((item, index) => {
                    return (
                        <InputForm key={index} item={item} />
                    )
                })
            }
            <button
                className="mt-6 px-16 py-3  bg-slate-950 text-slate-400 rounded-full 
                    hover:cursor-pointer hover:bg-slate-700
                    dark:bg-slate-400 dark:text-slate-950
                    dark:hover:bg-slate-800
                    "
            >
                {t?.submit}
            </button>
        </form>
    );
}