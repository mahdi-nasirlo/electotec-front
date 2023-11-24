import getUrlWithParams from "@/lib/getUrlWithParams";

type Props = {
    url: { path: string, absolute?: boolean };
    params?: Record<string, string | number>;
    data?: any;
    headers?: HeadersInit;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    cache?: RequestCache;
    tokenFromServerSide?: string,
    token?: string
}

export const API_URL = `${process.env['NEXT_PUBLIC_BACK_END_URL']}/api`

const apiAddressCreator = (url: string): string => {
    return API_URL + url
}


async function customFetch(props: Props) {

    const {
        url: {path, absolute},
        params,
        data,
        headers,
        method,
        cache,
        token,
    } = props

    // const token = tokenFromServerSide ?  tokenFromServerSide  : getToken()

    const finalUrl = getUrlWithParams(path, params)

    const apiDestination = absolute ? path : apiAddressCreator(finalUrl)
    
    const res = await fetch(
        apiDestination
        ,
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
                ...headers
            },
            method: method || 'GET',
            cache: cache || "no-store",
            ...data && {body: JSON.stringify(data)}
        }
    );

    const convertedToJson = await res

    return convertedToJson
}

export default customFetch