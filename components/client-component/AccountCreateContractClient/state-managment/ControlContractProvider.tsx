import React from "react";
import {useFieldArray, UseFieldArrayReturn, useForm, UseFormReturn} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

interface ControlContractType {
    contentForm: UseFormReturn<{ content: string; }, any, undefined>,
    contentFormSchema: z.ZodObject<{ content: z.ZodString }>,
    insert: {
        form: UseFormReturn<any>,
        schema: z.ZodObject<any>,
        fieldArray: UseFieldArrayReturn<{ values?: { name: string }[] | undefined }>
    }
}

const contentFormSchema = z.object({
    content: z.string().min(24, {message: "حداقل طول متن قرارداد ۲۴ کاراکتر است"})
}).required()


const insertFormSchema = z.object({
    values: z.array(
        z.object({
            name: z.string().min(3, {message: "لطفا مقدار را وارد کنید"}),
        }).required()
    ).optional(),
})


export const ControlContractProvider = (props: { children: React.ReactNode }) => {

    const contentForm = useForm<z.infer<typeof contentFormSchema>>({
        resolver: zodResolver(contentFormSchema),
        defaultValues: {
            content: "متن قرار داد ...."
        }
    })

    const insertForm = useForm<z.infer<typeof insertFormSchema>>({
        resolver: zodResolver(insertFormSchema),
        mode: "onChange"
    })

    const fieldArray = useFieldArray({
        name: "values",
        control: insertForm.control,
    })

    return <ControlContractContext.Provider
        value={{
            contentForm,
            contentFormSchema,
            insert: {
                form: insertForm,
                schema: insertFormSchema,
                fieldArray
            }
        }}>{props.children}</ControlContractContext.Provider>
}


export const ControlContractContext = React.createContext<ControlContractType>({} as ControlContractType)


export default ControlContractProvider;