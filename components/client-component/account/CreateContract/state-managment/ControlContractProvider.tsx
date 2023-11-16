import React from "react";
import {useForm, UseFormReturn} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

interface ControlContractType {
    form: UseFormReturn<{ content: string; }, any, undefined>,
    formSchema: z.ZodObject<{ content: z.ZodString }>
}

export const ControlContractContext = React.createContext<ControlContractType>({} as ControlContractType)


const formSchema = z.object({
    content: z.string().min(24, {message: "حداقل طول متن قرارداد ۲۴ کاراکتر است"})
}).required()


export const ControlContractProvider = (props: { children: React.ReactNode }) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            content: "متن قرار داد ...."
        }
    })

    return <ControlContractContext.Provider
        value={{form, formSchema}}>{props.children}</ControlContractContext.Provider>
}

export default ControlContractProvider;