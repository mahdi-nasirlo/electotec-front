import {useQuery} from "@tanstack/react-query";
import {getFetcher} from "@/lib/fetch-functions/getFetcher";
import {ImageSize, WrapperInterface, WrapperItemInterface} from "@/response-interface/wrapper-interface";


export type GetDataService = { data?: WrapperItemInterface<GetDataServiceAttribute> }

export interface GetDataServiceAttribute {
    title: string,
    content: string,
    strengths: string,
    weaknesses: string
    service_category?: GetDataCategory,
    tags?: WrapperInterface<{ title: string }>,
    labels?: WrapperInterface<{ title: string }>,
    weaknesses_item: { item: string }[],
    strengths_item: { item: string }[],
    service_itmes: WrapperInterface<{ title: string }>,
    gallery: WrapperInterface<GalleryInterface>
}

interface GalleryInterface {
    "name": string,
    "alternativeText": null,
    "caption": null,
    "width": number,
    "height": number,
    "formats": {
        "thumbnail": ImageSize,
        "small": ImageSize,
        "large": ImageSize,
        "medium": ImageSize
    },
    "hash": string,
    "ext": string,
    "mime": string,
    "size": number,
    "url": string,
    "previewUrl": null,
    "provider": string,
    "provider_metadata": null,
    "createdAt": string,
    "updatedAt": string
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