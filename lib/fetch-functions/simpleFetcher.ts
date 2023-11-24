import axiosFetcher from "@/lib/fetch-functions/axiosFetcher";
import {QueryFunctionContext} from "@tanstack/query-core";

const simpleFetcher = async (props: QueryFunctionContext) => {
    let url
    let data

    if (Array.isArray(props.queryKey)) {
        url = props.queryKey[0]
        data = props.queryKey[1]
    } else
        url = props.queryKey

    return await axiosFetcher({url, data, notify: true})
};

export default simpleFetcher;