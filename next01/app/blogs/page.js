import Link from "next/link";
import getAllPosts from '@/lib/getAllPosts';

const blogPage = async () => {
    const data = await getAllPosts();
    return (
        <>
            <main className="container mt-4">
                <h2 className="text-center pb-4">Blog page</h2>
                <div className="row">
                    {data ? data.map((blog) => (
                        <div className="col-md-3 mb-5" key={blog.id}>
                            <h4>{blog.title.substring(0, 15)}..</h4>
                            <p>{blog.body.substring(0, 80)}...</p>
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


export default blogPage;



