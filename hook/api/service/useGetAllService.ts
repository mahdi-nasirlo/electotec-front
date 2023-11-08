import {useQuery} from "@tanstack/react-query";
import {getFetcher} from "@/lib/fetch-functions/getFetcher";
import {WrapperInterface, WrapperItemInterface} from "@/response-interface/wrapper-interface";


export type GetAllDataService = WrapperInterface<GetDataService>

export interface GetDataService {
    title: string,
    content: string
    service_category?: GetDataCategory,
    tags?: WrapperInterface<{ title: string }>,
    labels?: WrapperInterface<{ title: string }>
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
    } = useQuery<GetAllDataService | undefined>({
        queryKey: ["/services"],
        queryFn: () => getFetcher("/api/services?populate=*")
    })

    return {getAll: {isLoading: isLoading, data: data, isError: isError}}

};

export default UseGetAllService;