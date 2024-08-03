import { fetchApi } from "@/helpers/fetch-api";
import { Post } from "@/interfaces/post";

import PageCard from "@/components/PageCard";
import PageTitle from "@/components/PageTitle";
import PagePagination from "@/components/PagePagination";

const getData = async(page = 1, pageSize = 3) => {
    const path = "/posts";
    const urlParamsObject = {
        populate: "*",
        sort: {
            createdAt: "asc"
        },
        pagination: {
            page,
            pageSize,
        },
    };

    const {data, meta } = await fetchApi(path, urlParamsObject);
    return {
        data,
        pagination: meta.pagination,
    };
}

interface Props {
    searchParams: {
        page?: string,
    },
}

const Blog = async({searchParams}: Props) => {

    const {page} = searchParams;

    let pageNumber = page ? parseInt(page) : 1;

    if(isNaN(pageNumber) || pageNumber < 1){
        pageNumber = 1;
    }
    
    const {data, pagination} = await getData(pageNumber);
    
    return (
        <div className="space-y-8 mx-4">
            <PageTitle title="Latest Posts"/>
            <div className="grid gap-4">
                {
                    data.map((post: Post) => (
                        <PageCard key={post.id} post={post}/>
                    ))
                }
            </div>
            <PagePagination pagination={pagination}/>
        </div>
)
}

export default Blog