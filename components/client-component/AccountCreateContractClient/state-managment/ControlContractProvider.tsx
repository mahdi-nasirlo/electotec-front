import React from "react";
import {useForm, UseFormReturn} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

interface ControlContractType {
    contentForm: UseFormReturn<{ content: string; }, any, undefined>,
    contentFormSchema: z.ZodObject<{ content: z.ZodString }>,
    insertForm: UseFormReturn<any>,
    insertFormSchema: z.ZodObject<any>
}

export const ControlContractProvider = (props: { children: React.ReactNode }) => {

    const contentForm = useForm<z.infer<typeof contentFormSchema>>({
        resolver: zodResolver(contentFormSchema),
        defaultValues: {
            content: "متن قرار داد ...."
        }
    })

    const insertForm = useForm<z.infer<typeof insertFormSchema>>({
        resolver: zodResolver(contentFormSchema),
    })

    return <ControlContractContext.Provider
        value={{
            contentForm,
            contentFormSchema,
            insertForm,
            insertFormSchema
        }}>{props.children}</ControlContractContext.Provider>
}

const contentFormSchema = z.object({
    content: z.string().min(24, {message: "حداقل طول متن قرارداد ۲۴ کاراکتر است"})
}).required()


const insertFormSchema = z.object({})


export const ControlContractContext = React.createContext<ControlContractType>({} as ControlContractType)


export default ControlContractProvider;