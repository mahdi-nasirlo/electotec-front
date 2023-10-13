import {ImageInterface} from "@/response-interface/wrapper-interface";

export interface Post {
    Title: string,
    Content: string,
    image?: ImageInterface
}