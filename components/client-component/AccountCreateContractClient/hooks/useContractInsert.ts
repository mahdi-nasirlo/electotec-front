import {useFieldArray, UseFieldArrayReturn, useForm, UseFormReturn} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

export interface ContractInsertType {
    form: UseFormReturn<any>,
    schema: z.ZodObject<any>,
    onSubmit: (data: any) => void
    fieldArray: UseFieldArrayReturn<{ values?: { name: string }[] | undefined }>,
}


const schema = z.object({
    values: z.array(
        z.object({
            name: z.string().min(3, {message: "لطفا مقدار را وارد کنید"}),
        }).required()
    ).optional(),
})

type InsertFormValues = z.infer<typeof schema>

const useContractInsert = (): ContractInsertType => {

    const form = useForm<InsertFormValues>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const fieldArray = useFieldArray({
        name: "values",
        control: form.control,
    })

    const onSubmit = (data: InsertFormValues) => {

        console.log(data)

    }


    return {form, fieldArray, onSubmit, schema}
};

export default useContractInsert;