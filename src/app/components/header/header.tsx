"use client";

import Image from "next/image";
import Link from "next/link";

export function Header() {

    return (
        <>
            <header className="w-full bg-blue-300 py-6 sm:text-xl">
                <div className="w-4xl max-w-11/12 mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" aria-label="Ir para a página inicial">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={80}
                            height={80}
                            className="w-14 h-14 md:w-16 md:h-16 lg:h-20 lg:w-20"
                        />
                    </Link>

                    {/* Menu de navegação */}
                    <nav>
                        <ul className="flex list-none p-0">
                            <li>
                                <Link className="px-2 hover:underline" href="/">
                                    Início
                                </Link>
                            </li>

                            <li>
                                <Link className="px-2 hover:underline" href="/integrantes">
                                    Integrantes
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
