import {useMutation} from "@tanstack/react-query";
import axiosFetcher from "@/lib/fetch-functions/axiosFetcher";
import {apiUrl} from "@/Constants/apiUrl";

const apiData = apiUrl.contract.create
const useCreateContract = () => useMutation({
    mutationFn: async (variables: any) => {

        const res = await axiosFetcher({
            url: apiData.url,
            method: "POST",
            data: variables,
            notify: apiData.notify,
            notifyConf: {msg: {onSuccess: "قرار داد با موفقیت ثبت شد"}}
        })

        console.log(res)

        return res
    },
})

export default useCreateContract;