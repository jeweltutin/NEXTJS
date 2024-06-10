
import { notFound } from "next/navigation";
import getPost from '@/lib/getPost';
import getPostComments from '@/lib/getPostComments';


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
    const postComments = await getPostComments(id);

    return (
        <div>
            <h2>Blog page details</h2>
            <h4>Blog id is: {id}</h4>
            <h3>
                {data.title}
            </h3>
            <p>
                {data.body}
            </p>
            {/* {console.log(postComments)} */}
            <h4>Comments of {data.title}</h4>

             {
                postComments.map((comments) => (
                    <div className="p-4" key={comments.id}>                       
                        <p>
                            Name: {comments.name}<br />
                            Email: {comments.email}<br />
                            {comments.body}<br />
                        </p>
                    </div>
                ))
            }  


        </div>
    );
}


export default BlogPageDetails;