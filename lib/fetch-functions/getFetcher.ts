export const getFetcher = async (url: string) => {

    const res = await fetch(url)

    return res.json()
}