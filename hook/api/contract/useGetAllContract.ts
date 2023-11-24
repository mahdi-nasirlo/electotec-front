import {useQuery} from "@tanstack/react-query";
import {apiUrl} from "@/Constants/apiUrl";
import simpleFetcher from "@/lib/fetch-functions/simpleFetcher";
import {WrapperInterface} from "@/response-interface/wrapper-interface";


export interface ApiContractType {
    name: string,
    uid: string | null,
    content: string,
    is_important: boolean,
    values: null,
    letter_number: string,
    is_confirm: boolean,
    createdAt: string,
    updatedAt: string,
    publishedAt: string
}

const apiData = apiUrl.contract.create
const useGetAllContract = () => useQuery<WrapperInterface<ApiContractType>>({
    queryKey: [apiData.url],
    queryFn: simpleFetcher,
})

export default useGetAllContract;