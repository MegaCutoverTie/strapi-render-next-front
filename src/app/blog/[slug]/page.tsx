import PageTitle from "@/components/PageTitle";
import { formatDate } from "@/helpers/date-helper";
import { fetchApi } from "@/helpers/fetch-api";
import { Post } from "@/interfaces/post";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

const getData = async(slug = "") => {
  const path = "/posts";
  const urlParamsObject = {
    populate: "image",
    filters: {
        slug,
    },
  };
  const {data} = await fetchApi(path, urlParamsObject);
  return data[0]
}

interface Props {
  params: {
    slug: string,
  }
}

const Slug = async({params}: Props) => {
  const { slug } = params

  const post: Post = await getData(slug)

  if(!post){
    return notFound()
  }

  const {title, body, createdAt, image, } = post.attributes;
  const {url, width, height} = image.data.attributes.formats.medium;

  return (
    <div className="space-y-8 mx-4 mb-8">
      <PageTitle title={title} />
      <p className="text-gray-500 text-sm">
        {formatDate(createdAt)}
      </p>
      <Image 
        className="h-auto rounded-lg" 
        src={url} 
        width={width} 
        height={height} 
        alt={`${title} image`} 
      />
      <div className="prose text-justify mx-auto">
        <MDXRemote source={body}/>
      </div>
    </div>
  )
}
export default Slug