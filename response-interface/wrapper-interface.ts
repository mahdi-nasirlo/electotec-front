export interface WrapperInterface<T> {
    data: {
        id: number,
        attributes: T & Image
    }[],
}

export interface ImageInterface {
    "data": {
        "id": number,
        "attributes": {
            "name": string,
            "alternativeText": null,
            "caption": null,
            "width": number,
            "height": number,
            "formats": {
                "thumbnail": ImageSize,
                "small": ImageSize,
                "large": ImageSize,
                "medium": ImageSize
            },
            "hash": string,
            "ext": string,
            "mime": string,
            "size": number,
            "url": string,
            "previewUrl": null,
            "provider": string,
            "provider_metadata": null,
            "createdAt": string,
            "updatedAt": string
        }
    }
}

interface ImageSize {
    "name": string,
    "hash": string,
    "ext": string,
    "mime": string,
    "path": null,
    "width": number,
    "height": number,
    "size": number,
    "url": string
}