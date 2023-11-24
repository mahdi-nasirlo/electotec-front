import {useFieldArray, UseFieldArrayReturn, useForm, UseFormReturn} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useToast} from "@/components/ui/use-toast";

export interface ContractInsertType {
    form: UseFormReturn<any>,
    schema: z.ZodObject<any>,
    onSubmit: (data: any) => void
    fieldArray: UseFieldArrayReturn<{ values?: { name: string }[] | undefined }>,
    getLastData: () => void
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

    const storageKey = "contract_insert"

    const {toast} = useToast()


    const form = useForm<InsertFormValues>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const fieldArray = useFieldArray({
        name: "values",
        control: form.control,
    })

    const onSubmit = (data: InsertFormValues) => {

        localStorage.setItem(storageKey, JSON.stringify(data))

        toast({
            title: "پیش نویس با موفقیت ذخیره شد",
            description: "برای انتشار قرار داد لطفا ذخیره سازی نهایی کنید",
            duration: 5000
        })

    }

    const getLastData = () => {

        let data = localStorage.getItem(storageKey) || ""

        let result: { values: any } = JSON.parse(data)

        form.setValue("values", result?.values)

    }

    return {form, fieldArray, onSubmit, schema, getLastData}
};

export default useContractInsert;