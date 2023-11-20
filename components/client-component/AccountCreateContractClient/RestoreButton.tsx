import React from 'react';
import useContract from "@/components/client-component/AccountCreateContractClient/hooks/useContract";

const RestoreButton = () => {

    const {restore} = useContract()

    return (
        <button onClick={restore}>
            بازگردانی
        </button>
    );
};

export default RestoreButton;