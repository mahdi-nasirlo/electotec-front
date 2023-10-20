import React from 'react';
import {GetDataPost} from "@/hook/api/blog/useBlogPost";
import {WrapperItemInterface} from "@/response-interface/wrapper-interface";
import Image from "next/image";
import {Tag, Typography} from "antd";

function ArticleCard({post}: {
    post: WrapperItemInterface<GetDataPost>
}) {

    const attributes = post.attributes

    const imageData = attributes.image.data.attributes

    const category = attributes?.blog_category?.data?.attributes

    const tags = attributes.tags?.data.map((tag) => tag.attributes.title)

    return (
        <div className="m-2 drop-shadow  border-[0.5px] rounded-lg">
            <Image
                className="w-full h-60 object-cover rounded-t-md"
                width={imageData.width}
                height={imageData.height}
                src={`${process.env.NEXT_PUBLIC_BACK_END_URL}${imageData.url}`}
                alt={`${imageData.name}`}/>
            <div className="mx-3 my-4">
                <div className="flex justify-end">
                    {category && <Tag color="red" className="mx-0">{category.title}</Tag>}
                </div>
                <h6 className="text-right text-md font-medium mt-3 mb-5">
                    {attributes.title}
                </h6>
                <div className="text-right  flex justify-end">
                    {tags?.map((item) => <> <Typography
                        className="mr-2 text-gray-400 text-sm font-light border-l pl-2">{item}</Typography> </>)}
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;