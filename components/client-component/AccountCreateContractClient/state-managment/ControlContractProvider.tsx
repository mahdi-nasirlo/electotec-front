import React from "react";
import {useFieldArray, UseFieldArrayReturn, useForm, UseFormReturn} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

interface ControlContractType {
    content: {
        form: UseFormReturn<{ content: string; }, any, undefined>,
        formSchema: z.ZodObject<{ content: z.ZodString }>
        onSubmit: (data: any) => void
    },
    insert: {
        form: UseFormReturn<any>,
        schema: z.ZodObject<any>,
        onSubmit: (data: any) => void
        fieldArray: UseFieldArrayReturn<{ values?: { name: string }[] | undefined }>,
    }
}

// * ****** content form ******
const contentFormSchema = z.object({
    content: z.string().min(24, {message: "حداقل طول متن قرارداد ۲۴ کاراکتر است"})
}).required()
// * ****** content form ******


// ! ****** insert form ******
const insertFormSchema = z.object({
    values: z.array(
        z.object({
            name: z.string().min(3, {message: "لطفا مقدار را وارد کنید"}),
        }).required()
    ).optional(),
})

type InsertFormValues = z.infer<typeof insertFormSchema>
// ! ****** insert form ******

export const ControlContractProvider = (props: { children: React.ReactNode }) => {

    // * ****** content form ******
    const contentForm = useForm<ContentFormValues>({
        resolver: zodResolver(contentFormSchema),
        defaultValues: {
            content: "متن قرار داد ...."
        }
    })

    type ContentFormValues = z.infer<typeof contentFormSchema>

    const handleSubmitContent = (data: ContentFormValues) => {

        console.log(data)
    }
    // * ****** content form ******

    // ! ****** insert form ******
    const insertForm = useForm<InsertFormValues>({
        resolver: zodResolver(insertFormSchema),
        mode: "onChange"
    })

    const fieldArray = useFieldArray({
        name: "values",
        control: insertForm.control,
    })

    const handleSubmitInsert = (data: InsertFormValues) => {

        console.log(data)

    }
    // ! ****** insert form ******


    return <ControlContractContext.Provider
        value={{
            content: {
                form: contentForm,
                formSchema: contentFormSchema,
                onSubmit: handleSubmitContent
            },
            insert: {
                form: insertForm,
                schema: insertFormSchema,
                fieldArray,
                onSubmit: handleSubmitInsert
            }
        }}
    >
        {props.children}
    </ControlContractContext.Provider>
}


export const ControlContractContext = React.createContext<ControlContractType>({} as ControlContractType)


export default ControlContractProvider;