

export default async function BlogPage(
    { params }: { params: { id: string } }
) {
    console.log(params.id);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const blog = await fetch(`${apiUrl}/api/blogs/${params.id}`);
    const data = await blog.json();
    return (
        <div>
            <h1>Blog Page {params.id}</h1>
            <p>{data.content}</p>
        </div>
    )
}