import {z} from "zod";
import {useForm, UseFormReturn} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import useCreateContract from "@/hook/api/contract/useCreateContract";
import {UseMutationResult} from "@tanstack/react-query";
import {AxiosResponse} from "axios";
import {useState} from "react";

const schema = z.object({
    name: z.string({required_error: "لطفا مقدار را وارد کنید"}),
    letter_number: z.coerce.number({required_error: "لطفا مقدار را وارد کنید"}),
    is_important: z.boolean()
}).required()

type SaveFormValues = z.infer<typeof schema>

const useContractSave = (): ContractSaveType => {

    const [open, setOpen] = useState(false)

    const request = useCreateContract()

    const form = useForm<SaveFormValues>({
        resolver: zodResolver(schema),
        mode: "onSubmit",
        defaultValues: {
            is_important: false
        }
    })

    return {
        form,
        schema,
        open,
        setOpen,
        request
    }
};

export interface ContractSaveType {
    form: UseFormReturn<any>,
    open: boolean,
    setOpen: (arg: boolean) => void,
    schema: z.ZodObject<{ name: z.ZodString, letter_number: z.ZodNumber, is_important: z.ZodBoolean }, "strip", z.ZodTypeAny, { name: string, letter_number: number, is_important: boolean }, {}>,
    request: UseMutationResult<AxiosResponse<any, any>, unknown, any, unknown>
}

export default useContractSave;