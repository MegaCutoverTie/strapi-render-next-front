"use client"

import { cartContext } from "@/context/carContext"
import { cn } from "@/helpers/classnames"
import { Book } from "@/interfaces/book"
import { useContext } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation";

interface Props {
    book: Book,
}

const PageCardStore = ({book}: Props) => {
    const {addCartProducts} = useContext(cartContext);
    const router = useRouter();

    const { id } = book;
    const { title, description, image, price, stock } = book.attributes;
    const { url, width, height } = image.data.attributes.formats.medium;

    const handleClickAddCart = () => {
        addCartProducts({id, title, price});
        router.push("/cart");
    }

    return (
        <div className="max-w-md mx-auto border rounded-lg shadow bg-gray-600 border-gray-600">
            <Image 
                className="rounded-t-lg" 
                src={url} 
                width={width} 
                height={height} 
                alt={`${title} image`} 
            />
            <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
                   {title} 
                </h5>
                <p className="mb-3 font-normal text-gray-300">
                    Price: ${price}
                </p>
                <p className="mb-3 font-normal text-gray-300">
                    Stock: {stock} units
                </p>
                <div className="mb-3 prose text-gray-300">
                    {description}
                </div>
                <button className={cn(
                        "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                        stock === 0 && "pointer-events-none opacity-50"
                    )}
                    onClick={handleClickAddCart}
                >
                    {stock === 0 ? "Out of stock" : "Buy"}
                    <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default PageCardStore