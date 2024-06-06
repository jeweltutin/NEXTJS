
import { notFound } from "next/navigation";
import getPost from '@/lib/getPost';


export async function generateMetadata({ params }) {
    const { id } = params;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body
    }
}


async function BlogPageDetails({ params }) {
    const { id } = params;
    if (Number.isNaN(parseInt(id))) notFound(); // if parameter is not a number not found page will show
    const data = await getPost(id);

    return ( 
        <div>
            <h2>Blog page details</h2>
            <h4>Blog id is: { id }</h4>
            <h3>
                {data.title}
            </h3>
            <p>
                {data.body}
            </p>
        </div>
     );
}


export default BlogPageDetails;