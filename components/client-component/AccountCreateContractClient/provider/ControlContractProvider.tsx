import React from "react";
import useContractContent, {
    ContractContentType
} from "@/components/client-component/AccountCreateContractClient/hooks/useContractContent";
import useContractInsert, {
    ContractInsertType
} from "@/components/client-component/AccountCreateContractClient/hooks/useContractInsert";
import useContractSave, {
    ContractSaveType
} from "@/components/client-component/AccountCreateContractClient/hooks/useContractSave";
import {apiUrl} from "@/Constants/apiUrl";
import {z} from "zod";
import toast from "react-hot-toast";

export const ControlContractProvider = (props: { children: React.ReactNode }) => {

    const contentContent = useContractContent()

    const contractInsert = useContractInsert()

    const contractSave = useContractSave()

    const restore = () => {
        contractInsert.getLastData()
        contentContent.getLastData()
    }

    const onSave = async (data: z.infer<typeof contractSave.schema>) => {

        const lastData: z.infer<typeof apiUrl.contract.create.type> = {
            name: data.name,
            content: contentContent.content as string,
            letter_number: data.letter_number,
            is_important: data.is_important
        };

        if (!apiUrl.contract.create.type.safeParse(lastData)) {

            toast.error("لطفا موارد لازم برای قرار داد را وارد کنید", {duration: 6000})

            return
        }

        const res = contractSave.request.mutate({data: lastData} as any, {
            onSuccess: async () => {
                contractInsert.form.reset({}, {keepIsSubmitted: false})
                contractInsert.form.reset()
                contractSave.form.reset()
                contractSave.setOpen(false)
            }
        });

    }


    return <ControlContractContext.Provider
        value={{
            content: contentContent,
            insert: contractInsert,
            save: contractSave,
            onSave,
            restore: restore
        }}
    >
        {props.children}
    </ControlContractContext.Provider>
}

interface ControlContractType {
    content: ContractContentType,
    insert: ContractInsertType,
    save: ContractSaveType,
    restore: () => void,
    onSave: (data: any) => void
}

export const ControlContractContext = React.createContext<ControlContractType>({} as ControlContractType)


export default ControlContractProvider;