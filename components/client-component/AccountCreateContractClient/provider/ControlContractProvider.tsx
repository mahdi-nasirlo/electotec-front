import React, {useState} from "react";
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
import useContractAll, {
    ContractAllType
} from "@/components/client-component/AccountCreateContractClient/hooks/useContractAll";
import {WrapperItemInterface} from "@/response-interface/wrapper-interface";
import {ApiContractType} from "@/hook/api/contract/useGetAllContract";

export const ControlContractProvider = (props: { children: React.ReactNode }) => {

    const [selectedID, setSelectedID] = useState<string>()

    const contentContent = useContractContent()

    const contractInsert = useContractInsert()

    const contractSave = useContractSave({selectedID})

    const contractGetAll = useContractAll()

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

        if (selectedID) {

            const res = contractSave.update.mutate({data: lastData} as any, {
                onSuccess: async () => {
                    contractInsert.form.reset({}, {keepIsSubmitted: false})
                    contractInsert.form.reset()
                    contractSave.form.reset({}, {keepIsSubmitted: false})
                    contractSave.setOpen(false)

                    await contractGetAll.request.refetch()
                }
            });

        } else {

            const res = contractSave.request.mutate({data: lastData} as any, {
                onSuccess: async () => {
                    contractInsert.form.reset({}, {keepIsSubmitted: false})
                    contractInsert.form.reset()
                    contractSave.form.reset()
                    contractSave.setOpen(false)

                    await contractGetAll.request.refetch()
                }
            });

            setSelectedID(undefined)

        }


    }

    const onSetContract = (contract: WrapperItemInterface<ApiContractType>) => {

        setSelectedID(`${contract.id}`)

        contractSave.form.setValue("content", contract.attributes.content)
        contractInsert.form.setValue("values", contract.attributes.values)
        contractSave.form.setValue("name", contract.attributes.name)
        contractSave.form.setValue("is_important", contract.attributes.is_important)
        contractSave.form.setValue("letter_number", contract.attributes.letter_number)

    }


    return <ControlContractContext.Provider
        value={{
            selectedID,
            content: contentContent,
            insert: contractInsert,
            save: contractSave,
            contracts: contractGetAll,
            onSave,
            onSetContract,
            restore
        }}
    >
        {props.children}
    </ControlContractContext.Provider>
}

interface ControlContractType {
    selectedID: string | undefined,
    content: ContractContentType,
    insert: ContractInsertType,
    save: ContractSaveType,
    contracts: ContractAllType,
    restore: () => void,
    onSave: (data: any) => void,
    onSetContract: (contract: WrapperItemInterface<ApiContractType>) => void
}

export const ControlContractContext = React.createContext<ControlContractType>({} as ControlContractType)


export default ControlContractProvider;