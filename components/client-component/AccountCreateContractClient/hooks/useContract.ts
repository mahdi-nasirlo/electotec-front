import {useContext} from "react";
import {
    ControlContractContext
} from "@/components/client-component/AccountCreateContractClient/provider/ControlContractProvider";

const useContract = () => {

    const context = useContext(ControlContractContext)

    return {...context}
};

export default useContract;