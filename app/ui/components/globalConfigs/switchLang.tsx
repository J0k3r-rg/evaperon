'use client';

import { ChangeEvent, useState } from 'react';
import { useRouter, usePathname } from '@/navigation';
import { useTransition } from 'react';
import './switchLang.css'

export function Switch() {

  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const changeLang = (e :  ChangeEvent<HTMLSelectElement>) =>{
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  }

  return (
    <div id='changeLang'>
      <button className="text-gray-950 dark:text-slate-300" type="button" value={'en'} onClick={e => changeLang(e)}>
        EN
      </button>
      <button className="text-gray-950 dark:text-slate-300" type="button" value={'es'} onClick={e => changeLang(e)}>
        ES
      </button>
    </div>
  );
}
