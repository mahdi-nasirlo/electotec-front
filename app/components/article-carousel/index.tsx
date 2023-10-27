"use client"

import useBlogPost from "@/hook/api/blog/useBlogPost";
import CustomCarousel from "../../../components/template/CustomCarousel";
import ArticleCard from "@/app/components/article-carousel/article-card";

function Articles() {

    const blogPost = useBlogPost()

    const {data, isError, isLoading} = blogPost.getAll

    if (isError) {
        return <div>is loading...</div>
    }

    return (
        <>
            <h3 className="mt-12 font-semibold text-3xl">
                محتوای تخصصی و مشاوره محور
            </h3>
            <CustomCarousel>

                {!isError && !isLoading && data?.data?.map((post, index) => <ArticleCard key={index} post={post}/>)}

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

export default Articles;