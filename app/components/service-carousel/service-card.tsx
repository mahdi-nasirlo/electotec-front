import React from 'react';
import {WrapperItemInterface} from "@/response-interface/wrapper-interface";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {GetDataService} from "@/hook/api/service/useGetAllService";

function ServiceCard({service}: {
    service: WrapperItemInterface<GetDataService>
}) {

    const attributes = service.attributes

    const imageData = attributes.image.data.attributes

    const category = attributes?.service_category?.data?.attributes

    const labels = attributes.labels?.data.map((label: any) => label.attributes.title)

    return (
        <>
            <Card className="mx-2">
                <CardHeader className="p-0">
                    <Image
                        className="w-full h-60 object-cover rounded-t-md"
                        width={imageData.width}
                        height={imageData.height}
                        src={`${process.env.NEXT_PUBLIC_BACK_END_URL}${imageData.url}`}
                        alt={`${imageData.name}`}/>
                </CardHeader>
                <CardContent className="pb-0">
                    {category && <Badge variant="secondary">{category.title}</Badge>}
                    <p className={`text-right text-lg font-medium ${category && "mt-3"} mb-5`}>{attributes.title}</p>
                </CardContent>
                <CardFooter className="pt-0 px-2 pb-3 justify-end">
                    <div className="flex flex-row-reverse justify-start">
                        {labels?.map((tag, index) => <p
                            className={`mr-2 text-gray-400 text-sm font-light ${labels?.length - 1 !== index && "border-l"} border-gray-300 pl-2`}
                            key={index}
                        >
                            {tag}
                        </p>)}
                    </div>
                </CardFooter>
            </Card>
        </>
    );
}

export default ServiceCard;