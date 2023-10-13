export const getFetcher = async (url: string) => {

    const res = await fetch(process.env.NEXT_PUBLIC_BACK_END_URL + url, {headers: {Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`}})

    return res.json()
}