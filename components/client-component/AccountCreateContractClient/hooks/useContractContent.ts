import {useForm, UseFormReturn} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useToast} from "@/components/ui/use-toast";

const useContractContent = (): ContractContentType => {

    const storageKey = "contract_content"

    const {toast} = useToast()

    const schema = z.object({
        content: z.string().min(24, {message: "حداقل طول متن قرارداد ۲۴ کاراکتر است"})
    }).required()

    const form = useForm<formValue>({
        resolver: zodResolver(schema),
        defaultValues: {
            content: "متن قرار داد ...."
        }
    })

    type formValue = z.infer<typeof schema>

    const onSubmit = (data: formValue) => {

        localStorage.setItem(storageKey, JSON.stringify(data))

        toast({
            title: "پیش نویس با موفقیت ذخیره شد",
            description: "برای انتشار قرار داد لطفا ذخیره سازی نهایی کنید",
            duration: 5000
        })
    }

    const getLastData = () => {

        let data = localStorage.getItem(storageKey) || ""

        let result: { content: string } = JSON.parse(data)

        form.setValue("content", result?.content)

    }

    // const getContent = () => DOMPurify.sanitize(form.getValues("content"))

    const getContent = () => form.getValues("content")

    return {
        form,
        schema,
        onSubmit,
        content: getContent(),
        getLastData
    }
};

export interface ContractContentType {
    form: UseFormReturn<{ content: string; }, any, undefined>,
    schema: z.ZodObject<{ content: z.ZodString }>
    onSubmit: (data: any) => void,
    content: string | null | undefined,
    getLastData: () => void
}

export default useContractContent;