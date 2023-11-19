import {useContext} from "react";
import {
    ControlContractContext
} from "@/components/client-component/AcountCreateContract/state-managment/ControlContractProvider";

const useControlContract = () => {

    const context = useContext(ControlContractContext)

    return {...context}
};

export default useControlContract;