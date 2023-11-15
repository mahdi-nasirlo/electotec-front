import {object, string} from "zod";

export const apiUrl = {
    auth: {
        login: {
            url: "/auth/local",
            type: object({
                identifier: string(),
                password: string()
            }).required()
        }
    }
}