import {useQuery} from "@tanstack/react-query";
import {getFetcher} from "@/lib/fetch-functions/getFetcher";
import {WrapperInterface, WrapperItemInterface} from "@/response-interface/wrapper-interface";


export type GetDataService = { data?: WrapperItemInterface<GetDataServiceAttribute> }

export interface GetDataServiceAttribute {
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

const UseGetServiceById = (id: string) => {

    const {
        data,
        isLoading,
        isError,
        isRefetching
    } = useQuery<GetDataService | undefined>({
        queryKey: ["/services/" + id],
        queryFn: () => getFetcher("/api/services/1?populate=*")
    })

    return {data, isLoading: isLoading || isRefetching, isError}
};

export default UseGetServiceById;