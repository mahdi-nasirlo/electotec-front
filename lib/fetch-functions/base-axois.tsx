import axios from "axios";

const baseAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACK_END_URL + "/api",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY
    }
});

export default baseAxios