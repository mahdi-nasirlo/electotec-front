import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";
import Carousel from "react-multi-carousel";

interface propType {
    children: React.ReactNode
}

function Index(props: propType) {
    return (
        <div className="border-2 border-red-600 rounded-2xl p-3 px-1 mb-6 mt-4">
            <Carousel
                swipeable={true}
                draggable={true}
                // showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                // autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5"
                // transitionDuration={5000}
                // containerClass="CustomCarousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={"Carousel"}
                // dotListClass="custom-dot-list-style"
                // itemClass="CustomCarousel-item-padding-40-px"
                customLeftArrow={<button
                    className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"><ChevronLeftIcon
                    height={48} width={48} className="text-neutral-600 w-full h-full"/></button>}
                customRightArrow={<button
                    className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"><ChevronRightIcon
                    height={48} width={48} className="text-neutral-600 w-full h-full"/></button>}
            >
                {props.children}
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


export default Index;