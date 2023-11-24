import useGetAllContract, {ApiContractType} from "@/hook/api/contract/useGetAllContract";
import {UseQueryResult} from "@tanstack/react-query";
import {WrapperInterface} from "@/response-interface/wrapper-interface";

const useContractAll = (): ContractAllType => {

    const request = useGetAllContract()

    return {
        request
    }
};

export interface ContractAllType {
    request: UseQueryResult<WrapperInterface<ApiContractType>, unknown>
}

export default useContractAll;