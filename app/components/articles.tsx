"use client"

import React from 'react';
import {useQuery} from "@tanstack/react-query";
import baseAxios from "@/lib/base-axois";
import {AxiosResponse} from "axios";


export const getPosts = async () => {

    const res: AxiosResponse = await baseAxios.get("/posts")

    return res.data
}

function Articles() {

    const {data: articles, isLoading: isLoadingArticles, isError: isErrorArticles} = useQuery<any[]>({
        queryKey: ["posts"],
        queryFn: getPosts
    })

    if (isErrorArticles) {
        return <div>is loading...</div>
    }

    return (
        <div className="border border-red-600 rounded-lg">
            {isLoadingArticles && <div>is loading....</div>}
            {!isLoadingArticles && articles.map((item, index) => <div key={index}>{item.title.rendered}</div>)}
        </div>
    );
}

export default Articles;