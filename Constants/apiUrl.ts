import {object, string, z} from "zod";

export const apiUrl = {
    auth: {
        login: {
            url: "/auth/local",
            type: object({
                identifier: string(),
                password: string()
            }).required()
        }
    },
    contract: {
        create: {
            url: "/contracts",
            method: "POST",
            notify: true,
            type: z.object({
                letter_number: z.number(),
                content: z.string().min(20),
                name: z.string().min(3),
                is_important: z.boolean()
            })
        }
    }
}