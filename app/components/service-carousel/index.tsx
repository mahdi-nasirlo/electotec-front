"use client"

import React from 'react';
import CustomCarousel from "@/components/CustomCarousel";
import ArticleCard from "@/app/components/article-carousel/article-card";
import useGetAllService from "@/hook/api/service/useGetAllService";

function Services() {

    const services = useGetAllService()

    if (services.getAll.isLoading) {
        return <div>is loading...</div>
    }

    return (
        <>
            <h3 className="mt-12 font-semibold text-3xl">
                لیست لیست خدمات
            </h3>
            <CustomCarousel>
                {!services.getAll.isError && !services.getAll.isLoading && services.getAll.data?.data?.map((post, index) =>
                    <ArticleCard key={index} post={post}/>)}

                {services.getAll.isError && Array.from(new Array(15)).map((_, i) =>
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