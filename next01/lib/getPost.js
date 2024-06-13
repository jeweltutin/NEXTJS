
const getPost = async (id) => {
    //const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	//const url = `https://imdb-top-100-movies.p.rapidapi.com/?id=${id}`;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' +id)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default getPost
