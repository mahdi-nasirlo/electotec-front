"use client"

import React from 'react';
import useContract from "@/components/client-component/AccountCreateContractClient/hooks/useContract";

const Index = () => {

    const controlContract = useContract()

    const {form} = controlContract.content

    return (
        <div className="text-right" style={{direction: "rtl"}}>
            {form.getValues("content")}
        </div>
    );
};

export default Index;