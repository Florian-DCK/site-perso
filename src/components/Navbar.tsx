"use client";
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { BounceScaleUpOnHover } from './Transitions';

export default function Navbar() {
    const pathname = usePathname();

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
      }, []);
    return (
        <ul className=' fixed top-0 flex  h-fit max-h-[calc(100vh-40px)] py-2 min-w-fit w-fit justify-center gap-16 bg-background items-center m-5 rounded-full   drop-shadow-2xl px-5 backdrop-blur-md bg-opacity-80'>
            <BounceScaleUpOnHover>
            <li className={`p-2 ${pathname === '/' ? 'bg-accent rounded-full [&_*]:text-background' : ''}`}>
                <Link href="/">
                    <h2>Accueil</h2>
                </Link>
            </li>
            </BounceScaleUpOnHover>

            <BounceScaleUpOnHover>
            <li className={`p-2 ${pathname === '/contact' ? 'bg-accent rounded-full [&_*]:text-background' : ''}`}>
                <Link href="/contact">
                    <h2>Contacts</h2>
                </Link>
            </li>
            </BounceScaleUpOnHover>

            <BounceScaleUpOnHover>
            <li className={`p-2 ${pathname === '/cv' ? 'bg-accent rounded-full [&_*]:text-background' : ''}`}>
                <Link href="/cv">
                    <h2>À propos</h2>
                </Link>
            </li>
            </BounceScaleUpOnHover>
        </ul>
    );
}