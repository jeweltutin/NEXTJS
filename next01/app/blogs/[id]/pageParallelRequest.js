
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
    const postPromise = getPost(id);
    const commentsPromise = getPostComments(id);
    //parallel request
    const [post, comments] = await Promise.all([postPromise, commentsPromise]);

    return (
        <div>
            <h2>Blog page details</h2>
            <h4>Blog id is: {id}</h4>
            <h3>
                {post.title}
            </h3>
            <p>
                {post.body}
            </p>
            {/* {console.log(postComments)} */}
            <h4>Comments of {post.title}</h4>

             {
                comments.map((comment) => (
                    <div className="p-4" key={comment.id}>                       
                        <p>
                            Name: {comment.name}<br />
                            Email: {comment.email}<br />
                            {comment.body}<br />
                        </p>
                    </div>
                ))
            }  


        </div>
    );
}


export default BlogPageDetails;