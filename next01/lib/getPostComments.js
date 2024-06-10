//export default async function getPostComments(id) {
    const getPostComments = async (id) => {


    //const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    //const result = await fetch(`https://jsonplaceholder.typicode.com/posts/6/comments`);
   const result = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id +'/comments');
   //console.log(result);
   //result =1;

   if (!result.ok) {
    throw new Error('Failed to fetch data')
}

    return result.json();
}

export default getPostComments;