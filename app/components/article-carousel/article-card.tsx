import React from 'react';
import {Post} from "@/response-interface/post";
import Image from "next/image";
import {Tag} from "antd";

function ArticleCard({post}: { post: Post }) {

    const imageData = post.image?.data.attributes

    if (!imageData) {
        return null
    }


    return (
        <div className="m-2 drop-shadow  border-[0.5px] rounded-lg">
            <Image
                className="w-full h-60 object-cover rounded-t-md"
                width={imageData.width}
                height={imageData.height}
                // src={`${process.env.NEXT_PUBLIC_BACK_END_URL}${imageData.url}`}
                src={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/banner2.jpg`}
                alt={`${imageData.name}`}/>
            <div className="mx-3 my-4">
                <div className="flex justify-end">
                    <Tag color="red" className="mx-0">دوربین مداربسته</Tag>
                </div>
                <h6 className="text-right text-md font-medium mt-3 mb-5">
                    {post.Title}
                </h6>
                <div className="text-right text-gray-400 text-sm font-light">
                    برسی و تحلیل | معرفی محصول
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;