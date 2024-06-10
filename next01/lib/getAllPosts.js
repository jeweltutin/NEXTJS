
const getAllPosts = async () => {
    //const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12');
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12',
            { 
                //cache: "force-cache"  // By default
                //cache: "no-store",

                next: {
                    revalidate: 10  // 10 seconds for revalidating
                }
            }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default getAllPosts
