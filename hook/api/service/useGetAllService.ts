import {useQuery} from "@tanstack/react-query";
import {getFetcher} from "@/lib/fetch-functions/getFetcher";
import {WrapperInterface, WrapperItemInterface} from "@/response-interface/wrapper-interface";

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


const UseGetAllService = () => {

    const {
        data,
        isLoading,
        isError
    } = useQuery<GetAllDataPost | undefined>({
        queryKey: ["services"],
        queryFn: () => getFetcher("/api/services?populate=*")
    })

    return {getAll: {isLoading: isLoading, data: data, isError: isError}}

};

export default UseGetAllService;