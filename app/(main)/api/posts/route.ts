export async function GET(request: Request) {

    return Response.json(data)
}

const data = {
    success: true,
    data: [
        {
            title: "نصب دوربین مداربسته",
            image: "https://space.liara.com/banner1",
            category: "دوربن مداربسته"
        }
    ]
}