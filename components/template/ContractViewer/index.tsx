"use client"

import React from 'react';
import useControlContract
    from "@/components/client-component/account/CreateContract/state-managment/useControlContract";

const Index = () => {

    const {form} = useControlContract()

    return (
        <div className="text-right" style={{direction: "rtl"}}>
            {form.getValues("content")}
        </div>
    );
};

export default Index;