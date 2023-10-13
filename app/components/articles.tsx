"use client"

import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getFetcher} from "@/lib/fetch-functions/getFetcher";
import {WrapperInterface} from "@/response-interface/wrapper-interface";
import {Post} from "@/response-interface/post";


function Articles() {

    const {
        data: articles,
        isLoading: isLoadingArticles,
        isError: isErrorArticles
    } = useQuery<WrapperInterface<Post[]>>({
        queryKey: ["posts"],
        queryFn: () => getFetcher("/api/posts")
    })

    if (isErrorArticles) {
        return <div>is loading...</div>
    }

    return (
        <div className="border border-red-600 rounded-lg">
            {isLoadingArticles && <div>is loading....</div>}
            {!isLoadingArticles && articles.data.map((item, index) => <div key={index}>{item.title}</div>)}
        </div>
    );
}

export default Articles;