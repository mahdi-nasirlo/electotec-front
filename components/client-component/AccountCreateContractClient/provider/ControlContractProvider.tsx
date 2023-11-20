import React from "react";
import useContractContent, {
    ContractContentType
} from "@/components/client-component/AccountCreateContractClient/hooks/useContractContent";
import useContractInsert, {
    ContractInsertType
} from "@/components/client-component/AccountCreateContractClient/hooks/useContractInsert";


export const ControlContractProvider = (props: { children: React.ReactNode }) => {

    const contentContent = useContractContent()

    const contractInsert = useContractInsert()

    const restore = () => {
        contractInsert.getLastData()
        contentContent.getLastData()
    }

    return <ControlContractContext.Provider
        value={{
            content: contentContent,
            insert: contractInsert,
            restore: restore
        }}
    >
        {props.children}
    </ControlContractContext.Provider>
}

interface ControlContractType {
    content: ContractContentType,
    insert: ContractInsertType,
    restore: () => void
}

export const ControlContractContext = React.createContext<ControlContractType>({} as ControlContractType)


export default ControlContractProvider;