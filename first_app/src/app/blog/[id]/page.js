const BlogPostDetails = ({params}) => {
    const { id } = params;
    return (
        <div>
            <h2>Blog single page</h2>
            <p>
                <code>Page id is: {id}</code><br/>
                Recently I was working on a project (Node, Express, MongoDB, Mongoose) where I needed to create many-to-many relationships with products and categories where categories can have multiple products and products can be in multiple categories.
                So I started working on it, I made it so that adding, removing, or updating products will automatically update categories too and vice-versa.
            </p>
        </div>
    );
}

export default BlogPostDetails;