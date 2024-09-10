
export default async function BlogDetails({ params }) {
    const { id } = params;
    const apiResponse = await fetch(`http://localhost:3001/api/get-blog/${id}`, { method: 'GET' });
    const result = await apiResponse.json();
    //console.log(result);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-600 to-green-500">
            {/* Details Page id {id}  */}
            <div className="text-white">
                <h1 className="first-letter:text-7xl first-letter:text-yellow-600 pb-3 font-bold text-4xl">Blog Details:</h1>
                {/* <img src={Details.avatar} alt="" /> */}
                <h2 className="text-2xl">{result.title}</h2>
                <p className="">{result.description}</p>
            </div>
        </div>
    )
}
