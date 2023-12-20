import React from 'react';
import Breadcrumb from "@/components/ui/breadcrumb";
import {ChevronLeftIcon, XCircleIcon} from "@heroicons/react/20/solid";
import {GetDataService} from "@/hook/api/service/useGetServiceByID";
import {notFound} from "next/navigation";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import UserInfoAvatar from "@/components/template/UserInfoAvatar";
import {CheckCircledIcon} from "@radix-ui/react-icons";
import {Separator} from "@/components/ui/separator";
import ServiceItemScrollArea from "@/app/(main)/service/[slug]/components/ServiceItemScrollArea";

interface PropsType {
    params: { slug: string }
}

async function Page({params: {slug}}: PropsType) {

    const data: GetDataService = await getData(slug)

    const res = data.data?.attributes

    const gallery = res?.gallery

    const serviceItem = res?.service_itmes

    const strengths = res?.strengths

    const strengths_item = res?.strengths_item

    const weaknesses = res?.weaknesses

    const weaknesses_item = res?.weaknesses_item

    const content = res?.content

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
                    <div className="mt-6 flex justify-between">
                        <UserInfoAvatar/>
                        <div className="flex gap-5 items-center text-xs">
                            <div className="text-gray-700">
                                <span>
                                    بازدید
                                </span>
                                <span className="pr-1 text-gray-500">
                                    40,000
                                </span>
                            </div>
                            <div className="text-gray-700 flex items-center">
                               <span className="pl-2">
                                    امتیاز کارشناس
                                   3.4
                               </span>
                                <div className="rounded-full bg-red-500 h-3 w-3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-2 gap-3 mt-4">
                        {gallery?.data?.map((image, index) => <>
                            <div className={`${index === 0 && "row-span-2 col-span-2"}`}>
                                <Image
                                    className="h-full object-cover rounded-lg"
                                    src={`${process.env.NEXT_PUBLIC_BACK_END_URL}${image.attributes.url}`}
                                    alt={image.attributes.name} width={image.attributes.width}
                                    height={image.attributes.height * index}
                                />
                            </div>
                        </>)}
                    </div>
                    <div className="my-6 mb-8 grid gap-4 grid-cols-2">
                        <div>
                            <ServiceItemScrollArea serviceItem={serviceItem}/>
                        </div>
                        <div className="flex flex-col rounded-lg border-[1.5px] p-3 h-fit">
                            <div className="flex items-center h-auto justify-between w-full">
                                <div className="">
                                    <span className="pl-3">میانگین هزینه</span>
                                    <span
                                        className="px-1 text-gray-800 font-extrabold text-md underline decoration-red-500 decoration-2">500,000</span>
                                    <span className="text-gray-400 text-sm font-normal">تومان</span>
                                </div>
                                <div>
                                    <Button>
                                        ادامه فرایند سفارش
                                    </Button>
                                </div>
                            </div>
                            <div className="mt-3">
                                <UserInfoAvatar/>
                                <div className="p-3 mt-4 rounded-md bg-gray-100">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                                    برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                                    می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                                    متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                                    الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                                    داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                                    مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                                    طراحی اساسا مورد استفاده قرار گیرد.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="rounded-lg border-[1.5px] col-span-2 px-5 py-4 grid grid-cols-5 gap-x-5">
                            <div className="col-span-3">
                                <div className="text-2xl font-medium">
                                    نقاط قوت
                                </div>
                                <div>
                                    <p>
                                        {strengths}
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="text-2xl font-medium">
                                    خلاصه
                                </div>
                                <div>
                                    {strengths_item?.map(item => <>
                                        <p className="my-4 flex items-center"><CheckCircledIcon
                                            className="ml-2"/>{item.item}</p>
                                    </>)}
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border-[1.5px] col-span-2 px-5 py-4 grid grid-cols-5 gap-x-5">
                            <div className="col-span-3">
                                <div className="text-2xl font-medium text-red-500">
                                    نقاط ضعف
                                </div>
                                <div>
                                    <p>
                                        {weaknesses}
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="text-2xl font-medium">
                                    خلاصه
                                </div>
                                <div>
                                    {weaknesses_item?.map(item => <>
                                        <p className="my-4 flex items-center">
                                            <XCircleIcon
                                                className="ml-2 text-red-500"/>{item.item}</p>
                                    </>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-[1.5px] rounded-lg mt-5 p-5 leading-10 text-gray-800">
                        <p className="font-bold text-xl text-red-500">
                            اطلاعات کاربردی
                        </p>
                        <Separator className="mb-4 mt-3"/>
                        <p>
                            {content}
                        </p>
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