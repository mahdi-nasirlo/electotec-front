"use client"

import React from 'react';
import CustomCarousel from "@/components/CustomCarousel";
import ArticleCard from "@/app/components/article-carousel/article-card";
import useGetAllService from "@/hook/api/service/useGetAllService";

function Services() {

    const blogPost = useGetAllService()

    const {data, isError, isLoading} = blogPost.getAll

    if (isLoading) {
        return <div>is loading...</div>
    }

    return (
        <>
            <h3 className="mt-12 font-semibold text-3xl">
                فروش کالا
            </h3>
            <CustomCarousel>
                {!isError && !isLoading && data?.data.map((post, index) => <ArticleCard key={index} post={post}/>)}

                {isLoading && Array.from(new Array(15)).map((_, i) =>
                    <div
                        className="object-cover m-2"
                        key={i}
                        style={{
                            height: 350,
                            background: 'url(https://placehold.co/322x350/e1e1e1/ffffff)'
                        }}
                    />
                )}
            </CustomCarousel>
        </>
    );
}

export default Services;