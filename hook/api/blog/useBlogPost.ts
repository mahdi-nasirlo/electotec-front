import {useQuery} from "@tanstack/react-query";
import {WrapperInterface, WrapperItemInterface} from "@/response-interface/wrapper-interface";
import {getFetcher} from "@/lib/fetch-functions/getFetcher";

interface BlogPostApiServiceType {
    getAll: {
        isLoading: boolean,
        isError: boolean
        data: GetAllDataPost | undefined
    }
}

export type GetAllDataPost = WrapperInterface<GetDataPost>

export interface GetDataPost {
    title: string,
    content: string
    blog_category?: GetDataCategory,
    tags?: WrapperInterface<{ title: string }>
}

export interface GetDataCategory {
    data?: WrapperItemInterface<{
        title: string,
        slug: string,
        desc: string,
    }>
}

const useBlogPost = (): BlogPostApiServiceType => {

    const {
        data,
        isLoading,
        isError
    } = useQuery<GetAllDataPost | undefined>({
        queryKey: ["posts"],
        queryFn: () => getFetcher("/api/blog-posts?populate=*")
    })

    return {getAll: {isLoading: isLoading, data: data, isError: isError}}
};

export default useBlogPost;