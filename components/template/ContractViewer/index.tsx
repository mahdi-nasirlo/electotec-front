"use client"

import React from 'react';
import useControlContract from "@/components/client-component/AcountCreateContract/state-managment/useControlContract";

const Index = () => {

    const {contentForm: form} = useControlContract()

    return (
        <div className="text-right" style={{direction: "rtl"}}>
            {form.getValues("content")}
        </div>
    );
};

export default Index;