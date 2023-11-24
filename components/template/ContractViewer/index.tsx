"use client"

import React from 'react';
import useContract from "@/components/client-component/AccountCreateContractClient/hooks/useContract";
import Image from "next/image";
import Logo from "@/components/ui/logo";
import moment from "jalali-moment";
import {Separator} from "@/components/ui/separator";

const pageHeight = "1000px"

interface PropsType {
    content?: string,
    letter_number?: string,
    date?: string
}

const Index = (props: PropsType) => {

    const controlContract = useContract()

    const html = controlContract.content

    const getTime = () => {

        try {

            const date = props?.date ? moment.utc(props.date).locale('fa').format("YYYY/M/D") : ".../.../..."

            return ` ${date} `

        } catch (e) {
            return ""
        }

    }

    return (
        <div
            className="bg-gray-100 py-10"
        >
            <div style={{minHeight: pageHeight}}
                 className={`bg-white rounded-md shadow max-w-4xl mx-auto min-h-[${pageHeight}]`}>
                <div style={{minHeight: pageHeight}} className={`flex flex-col justify-between min-h-[${pageHeight}]`}>
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
                                <div className="text-gray-400 text-sm flex flex-col gap-2">
                                    <div>
                                        <span>
                                            تاریخ:
                                        </span>
                                        <span className="text-gray-600">
                                            {getTime()}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            شماره نامه:
                                        </span>
                                        <span className="text-gray-600">
                                             {` ${props?.letter_number || " ......... "} `}
                                        </span>
                                    </div>
                                    {/*<div>بیوست: ...............</div>*/}
                                </div>
                            </div>
                            <div className="h-fit html_content">
                                {/*@ts-ignore*/}
                                <div dangerouslySetInnerHTML={{__html: html?.content || props.content || ""}}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center w-full">

                            <Separator orientation="vertical"/>
                            <span>

                            </span>
                        </div>
                        <div className="flex justify-center w-full items-center text-xs text-gray-700 mb-2">
                            <div>
                                <p style={{textAlign: "justify", textJustify: "inter-word"}}>
                                    تهران، بزرگراه آیت الله سعیدی، خیابان <br/> سلیمانی، کوچه بهتاب شرقی، بلاک ۱۸
                                </p>
                            </div>
                            <Separator className="h-10 mx-2" orientation="vertical"/>
                            <div>
                                <span>تلفن: </span>
                                <span style={{direction: "ltr"}}> 021 66 13 08 95 </span>
                            </div>
                        </div>
                        <div className="bg-gray-300 w-full h-8 rounded-b-md"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;