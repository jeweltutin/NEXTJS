
import Link from "next/link";

const Movie = async () => {
    const getAllMoviesApi = 'https://jsonplaceholder.typicode.com/posts?_limit=12';
    const res = await fetch(getAllMoviesApi);
    const blogList = await res.json();
    //console.log(data);
    return (
        <main className="container mt-4">
                <h2>Blog page</h2>
                <div className="row">
                    {blogList ? blogList.map((blog) => (
                        <div className="col-md-3 mb-5" key={blog.id}>
                            <h4>{blog.title}</h4>
                            <p>{blog.body}</p>
                            <Link className="btn btn-success" href="/blog/[id]" as={'/blog/'}>
                                Read More
                            </Link>
                        </div>
                    )): null}
                </div>
            </main>
    )
}

export default Movie
