"use client"

import {ScrollArea} from "@/components/ui/scroll-area";
import React from "react";
import {WrapperInterface} from "@/response-interface/wrapper-interface";
import {Separator} from "@/components/ui/separator";
import {ChevronLeftIcon} from "@heroicons/react/20/solid";

const ServiceItemScrollArea = ({serviceItem}: { serviceItem: WrapperInterface<{ title: string }> | undefined }) => {
    return (
        <ScrollArea autoFocus={true} scrollHideDelay={60000} className="h-[343px] w-full rounded-lg border-[1.5px] p-3">
            <div className="font-medium sticky top-0 text-xl bg-white w-full left-[-10px]">مشخصات عملکردی</div>
            <div className="mt-5">
                {serviceItem?.data.map((item, index) => <>
                    <div className="flex justify-between flex-row-reverse">
                        <div className="text-sm font-normal text-gray-700">
                            {item.attributes.title}
                        </div>
                        <div className="font-medium text-sm text-red-500 flex items-center">
                            <ChevronLeftIcon/>
                            <span>
                                مشاهده اطلاعات
                           </span>
                        </div>
                    </div>
                    {serviceItem?.data.length !== index + 1 && <Separator className="my-2"/>}
                </>)}
            </div>
        </ScrollArea>
    );
};

export default ServiceItemScrollArea;