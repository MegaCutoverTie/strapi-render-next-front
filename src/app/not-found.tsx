import Link from "next/link"

const NotFound = () => {
    return(
        <div className="container mx-auto text-center mt-8">
            <p className="font-bold text-red-700 text-9xl my-4">404</p>
            <p className="font-semibold text-2xl my-4">Not Found</p>
            <p className="my-4">The page you are looking for may have been removed, deleted, or possibly never existed</p>
            <img src="/sad-square.svg" alt="sad_square" className="w-40 mx-auto mt-10"/>
            <Link href="/blog" className="inline-flex px-3 mt-5 font-medium text-indigo-600">Back to blog</Link>
        </div>
    )
}

export default NotFound