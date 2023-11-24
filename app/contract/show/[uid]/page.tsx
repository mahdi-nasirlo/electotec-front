import React from 'react';
import customeFetcher from "@/lib/fetch-functions/customeFetcher";
import ContractViewer from "@/components/template/ContractViewer";
import {notFound} from "next/navigation";
import {WrapperItemInterface} from "@/response-interface/wrapper-interface";
import {ApiContractType} from "@/hook/api/contract/useGetAllContract";

interface PropsType {
    params: { uid: string },
    searchParams: {}
}


async function getData(uid: string) {
    const res = await customeFetcher({url: {path: "/contracts/" + uid}})

    if (res.status !== 200) notFound()

    return res.json()
}

const Page = async (props: PropsType) => {

    const data: { data: WrapperItemInterface<ApiContractType> } | undefined = await getData(props.params.uid)

    const attribute = data?.data.attributes

    return (
        <>
            <ContractViewer
                content={attribute?.content}
                letter_number={attribute?.letter_number}
                date={attribute?.createdAt}
            />
        </>
    );
};

export default Page;