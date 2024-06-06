import Link from "next/link";

const blogPage = async () => {
    const data = await getData()
    return (
        <>
            <main className="container mt-4">
                <h2>Blog page</h2>
                <div className="row">
                    {data ? data.map((blog) => (
                        <div className="col-md-3 mb-5" key={blog.id}>
                            <h4>{blog.title.substring(0, 15)}..</h4>
                            <p>{blog.body.substring(0, 80)}...</p>
                            {/* <Link className="btn btn-success" href="/blogs/[id]" as={`/blogs/${blog.id}`}>
                                Read More
                            </Link> */}
                            <Link className="btn btn-success" href={`/blogs/${blog.id}`}>
                                Read More
                            </Link>
                        </div>
                    )) : null}
                </div>
            </main>
        </>
    );
}


async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default blogPage;



