import customFetcher from "@/lib/fetch-functions/customeFetcher";
import {apiUrl} from "@/Constants/apiUrl";

interface PropsType {
    jwt: string,
    user: {
        id: number,
        username: string,
        email: string,
        provider: string,
        confirmed: boolean,
        blocked: boolean,
    }
}

const LoginRequest = async (data: any = null): Promise<{ status: number, data: PropsType }> => {

    const result = await customFetcher({url: {path: apiUrl.auth.login.url}, method: "POST", data: data})

    const response = await result.json()

    return {
        status: result.status,
        data: response
    }

};


export default LoginRequest;