import Link from "next/link";

interface Props {
    pagination: {
        page: number,
        pageSize: number,
        pageCount: number,
        total: number,
    };
}

const PagePagination = ({pagination}: Props) => {

  const {page, pageSize, pageCount, total} = pagination;
  const pageNumber = "flex items-center justify-center px-3 h-8 leading-tight border bg-gray-700 border-gray-800 text-gray-400 hover:bg-gray-600 hover:text-white"
  const pageNumberActive = "z-10 flex items-center justify-center px-3 h-8 leading-tight border hover:bg-gray-500 border-gray-800 bg-gray-600 text-white"
  const prev = "flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0 rounded-s-lg bg-gray-800 border-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
  const next = "flex items-center justify-center px-3 h-8 ms-0 leading-tight border rounded-e-lg bg-gray-800 border-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"

  return (
    <>
    <nav aria-label="Page navigation example" className="text-center pb-8">
        <ul className="inline-flex -space-x-px">
        <li>
            <Link
            href={
                page === 1 ? `/blog?page=${page}` : `/blog?page=${page - 1}`
            }
            className={prev}
            >
            <span className="sr-only">Previous</span>
            <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
            >
                <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
                />
            </svg>
            </Link>
        </li>
        {
            Array.from({length: pageCount}).map((_, index) => (
                <li>
                    <Link
                    href={`/blog?page=${index + 1}`}
                    className={`${(index + 1) === page ? pageNumberActive : pageNumber}`}
                    >
                    {index + 1}
                    </Link>
                </li>
            ))
        }
        <li>
            <Link
            href={
                page === pageCount ? `/blog?page=${page}` : `/blog?page=${page + 1}`
            }
            className={next}
            >
            <span className="sr-only">Next</span>
            <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
            >
                <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
                />
            </svg>
            </Link>
        </li>
        </ul>
    </nav>
    </>
  )
}

export default PagePagination