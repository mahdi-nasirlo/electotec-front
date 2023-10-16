"use client"

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";
import useBlogPost from "@/hook/api/blog/useBlogPost";
import ArticleCard from "@/app/components/article-carousel/article-card";

function Articles() {

    const blogPost = useBlogPost()

    const {data, isError, isLoading} = blogPost.getAll

    if (isError) {
        return <div>is loading...</div>
    }

    return (
        <div className="border border-2 border-red-600 rounded-lg p-3 mb-6 mt-4">
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={5000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={"Carousel"}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                customLeftArrow={<button
                    className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"><ChevronLeftIcon
                    height={48} width={48} className="text-neutral-600 w-full h-full"/></button>}
                customRightArrow={<button
                    className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"><ChevronRightIcon
                    height={48} width={48} className="text-neutral-600 w-full h-full"/></button>}
            >

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
            </Carousel>
        </div>
    );
}

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export default Articles;