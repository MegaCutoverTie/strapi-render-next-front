import { formatDate } from "@/helpers/date-helper";
import { Post } from "@/interfaces/post"
import Image from "next/image";
import Link from "next/link";

interface Props {
    post: Post,
}

const PageCard = ({post}: Props) => {

  const {title, description, slug, createdAt, image} = post.attributes;
  const {url, width, height} = image.data.attributes.formats.medium;

  return (
    <div className="max-w-2xl mx-auto border rounded-lg shadow bg-gray-600 border-gray-600">
        <Link href={`/blog/${slug}`}>
            <Image 
                className="rounded-t-lg" 
                src={url} 
                width={width} 
                height={height} 
                alt={`${title} image`} 
            />
        </Link>
        <div className="p-5">
            <span className="flex justify-between text-sm text-white">
                <Link href={`/blog/${slug}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        {title}
                    </h5>
                </Link>
                <p>
                    {formatDate(createdAt)}
                </p>
            </span>
            <p className="mb-3 font-normal text-gray-300">
                {description}
            </p>
            <Link href={`/blog/${slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                Read more
                <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </Link>
        </div>
    </div>
  )
}

export default PageCard