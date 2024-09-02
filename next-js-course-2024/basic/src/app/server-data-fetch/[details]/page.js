


async function fetchUserDetails(currentUserId) {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/users/${currentUserId}`);
        const result = await apiResponse.json();
        return result;
    } catch (e) {
        throw new Error(e);
    }
}


export default async function UserDetails({ params }) {
    const userDetails = await fetchUserDetails(params.details);

    return (
        <div className="text-center pt-5">
            <h1 className="text-4xl font-bold p-5 border-b-2 border-gray-300 mb-3">
                This is user details page
            </h1>
            <div>
                <p><strong>Name:</strong> {userDetails?.firstName} {userDetails?.lastName}</p>
                <p><strong>Email:</strong> {userDetails?.email}</p>
                <p><strong>Age:</strong> {userDetails?.age}</p>
                <p><strong>Phone:</strong> {userDetails?.phone}</p>
                <p><strong>Address:</strong> {userDetails?.address.address}, {userDetails?.address.city}, {userDetails?.address.country}</p>
            </div>
        </div>
    )
}
