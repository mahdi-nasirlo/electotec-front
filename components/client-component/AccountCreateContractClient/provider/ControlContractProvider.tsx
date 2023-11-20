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

    return <ControlContractContext.Provider
        value={{
            content: contentContent,
            insert: contractInsert
        }}
    >
        {props.children}
    </ControlContractContext.Provider>
}

interface ControlContractType {
    content: ContractContentType,
    insert: ContractInsertType
}

export const ControlContractContext = React.createContext<ControlContractType>({} as ControlContractType)


export default ControlContractProvider;