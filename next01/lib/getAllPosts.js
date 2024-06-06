
const getAllPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default getAllPosts
