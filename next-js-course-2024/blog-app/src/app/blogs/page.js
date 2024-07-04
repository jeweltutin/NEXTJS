import BlogOverview from "@/components/blog-overview/index.js";

async function fetchListOfBlogs() {
    try {
        const apiResponse = await fetch('http://localhost:3001/api/get-blogs', {
            method: 'GET',
            cache: 'no-store'
        })

        const result = await apiResponse.json();
        return result?.data;


    } catch (error) {
        throw new Error(error);
    }
}

async function Blogs() {
    const blogList = await fetchListOfBlogs();
    //console.log(blogList, 'blogList');
    return (
        <BlogOverview blogList={blogList}/>
    );
}

export default Blogs;