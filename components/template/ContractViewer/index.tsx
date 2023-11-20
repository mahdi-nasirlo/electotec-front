"use client"

import React from 'react';
import useContract from "@/components/client-component/AccountCreateContractClient/hooks/useContract";
import Logo from "@/components/ui/logo";
import Image from "next/image";

const Index = () => {

    const controlContract = useContract()

    const {content} = controlContract.content

    return (
        <div
            className="bg-gray-50 py-10"
        >
            <div className="bg-white rounded-md shadow max-w-4xl mx-auto min-h-[900px]">
                <div className="flex flex-col justify-between min-h-[900px]">
                    <div>
                        <div>
                            <Image alt="" src="/icons/header_shape.svg" width={25} height={25} className="w-full"/>
                        </div>
                        <div style={{direction: "rtl"}} className="px-8 pt-0 py-5">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center">
                                    <Logo/>
                                    {/*<div className="text-gray-700 font-semibold text-lg">Your Company Name</div>*/}
                                </div>
                                <div className="text-gray-400 text-sm flex flex-col">
                                    <div>تاریخ: ..../...../....</div>
                                    <div>شماره: ...............</div>
                                    <div>بیوست: ...............</div>
                                </div>
                            </div>
                            <div className="h-fit">
                                <div dangerouslySetInnerHTML={{__html: content}}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-300 w-full h-8 rounded-b-md"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;