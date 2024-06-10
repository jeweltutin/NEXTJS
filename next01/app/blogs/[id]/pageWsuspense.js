
import { notFound } from "next/navigation";
import getPost from '@/lib/getPost';
import getPostComments from '@/lib/getPostComments';
import Comments from '@/components/comments';
import { Suspense } from "react";


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
    const post = await getPost(id);
    const commentsPromise = getPostComments(id);

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
            <Suspense fallback= {<h5 className="text-primary">Loading ...</h5>}>
                <Comments cmtPromise={ commentsPromise } />
            </Suspense>
          
        </div>
    );
}


export default BlogPageDetails;