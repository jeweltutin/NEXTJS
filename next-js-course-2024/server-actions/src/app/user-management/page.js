//rfce

import { fetchUsersAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUserCard from "@/components/single-user-card";

async function UserManagement() {
    const getListOfUsers = await fetchUsersAction();
    //console.log(getListOfUsers);

    return (
        <div className="p-20 w-full">
            <div className="flex justify-between">
                <h2>User Management</h2>
                <AddNewUser />
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
                { getListOfUsers && getListOfUsers.users && getListOfUsers.users.length > 0 ?
                    getListOfUsers.users.map(userItem => 
                        <SingleUserCard user={userItem} />
                    ) : <h3>No user found</h3>
                }
            </div>
        </div>
    )
}

export default UserManagement;
