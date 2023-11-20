import React from 'react';
import useContract from "@/components/client-component/AccountCreateContractClient/hooks/useContract";
import {CounterClockwiseClockIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";

const RestoreButton = () => {

    const {restore} = useContract()

    return (
        <Button onClick={restore} variant="ghost">
            <span>بازگردانی</span>
            <CounterClockwiseClockIcon className="h-4 w-4 ml-0 mr-1.5"/>
        </Button>
    );
};

export default RestoreButton;