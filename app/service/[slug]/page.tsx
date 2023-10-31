import React from 'react';
import Breadcrumb from "@/components/ui/breadcrumb";
import {ChevronLeftIcon} from "@heroicons/react/20/solid";
import {GetDataService} from "@/hook/api/service/useGetServiceByID";
import {notFound} from "next/navigation";

interface PropsType {
    params: { slug: string }
}

async function Page({params: {slug}}: PropsType) {

    const data: GetDataService = await getData(slug)

    const gallery = data.data?.attributes.gallery

    console.log(data)
    return (
        <div>
            <div className="my-3">
                <div className="flex justify-end">
                    <Breadcrumb homeElement={<div>خانه</div>} separator={<ChevronLeftIcon height={24} width={24}/>}/>
                </div>
                <div>
                    <h1 className="font-black text-3xl text-gray-800">
                        {data?.data?.attributes.title}
                    </h1>
                    <div>
                        12
                    </div>
                </div>
            </div>

        </div>
    );
}


const getData = async (id: string) => {

    const res = await fetch(
        process.env.NEXT_PUBLIC_BACK_END_URL + "/api/services/" + id + "?populate=*",
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
            }
        }
    )

    if (res.status === 404)
        notFound()

    return res.json()
}

export default Page;