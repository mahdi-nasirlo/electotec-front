import {useForm, UseFormReturn} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";

export interface ContractContentType {
    form: UseFormReturn<{ content: string; }, any, undefined>,
    schema: z.ZodObject<{ content: z.ZodString }>
    onSubmit: (data: any) => void
}

const schema = z.object({
    content: z.string().min(24, {message: "حداقل طول متن قرارداد ۲۴ کاراکتر است"})
}).required()

const useContractContent = (): ContractContentType => {

    const form = useForm<formValue>({
        resolver: zodResolver(schema),
        defaultValues: {
            content: "متن قرار داد ...."
        }
    })

    type formValue = z.infer<typeof schema>

    const onSubmit = (data: formValue) => {

        console.log(data)
    }

    return {
        form,
        schema,
        onSubmit
    }
};

export default useContractContent;