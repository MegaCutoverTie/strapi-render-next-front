"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { cartContext } from "@/context/carContext";

const PageHeader = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { totalQuantityProduct } = useContext(cartContext);

  const activeClass = (path: string): string =>
    `block py-2 pr-4 pl-3 rounded md:bg-transparent hover:text-indigo-400 md:p-0 ${pathname === path ? 'text-indigo-500 font-semibold bg-black' : 'text-black'}`;

  return (
    <nav className="px-2 sm:px-4 py-2">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="https://portfolio-antonio-malpica.netlify.app/" className="flex items-center">
                <img src="/antonio.jpg" alt="Logo" className="mr-3 h-6 sm:h9 rounded-full"/>
                <span className="self-center text-xl font-semibold text-black whitespace-nowrap">Antonio Malpica</span>
            </a>
            <button
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>
            <div className={`w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`}>
                <div className="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0">
                    <Link href="/" className={activeClass('/')}>
                        Home
                    </Link>
                    <Link href="/blog" className={activeClass('/blog')}>
                        Blog
                    </Link>
                    <Link href="/store" className={activeClass('/store')}>
                        Store
                    </Link>
                    <Link href="/cart" className="relative">
                        <span className={activeClass('/cart')}>
                            Cart
                        </span>
                        {totalQuantityProduct > 0 && (
                            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                            {totalQuantityProduct}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default PageHeader