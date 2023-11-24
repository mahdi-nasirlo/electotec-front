import {useMutation} from "@tanstack/react-query";
import axiosFetcher from "@/lib/fetch-functions/axiosFetcher";
import {apiUrl} from "@/Constants/apiUrl";

const apiData = apiUrl.contract.update
const useUpdateContract = (selectedID: string | undefined) => useMutation({
    mutationFn: async (variables: any) => {

        const res = await axiosFetcher({
            url: apiData.url + selectedID,
            method: apiData.method as any,
            data: variables,
            notify: apiData.notify,
            notifyConf: {msg: {onSuccess: "قرار داد با موفقیت بروزرسانی شد"}}
        })

        console.log(res)

        return res
    },
})

export default useUpdateContract;