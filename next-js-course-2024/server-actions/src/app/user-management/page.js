//rfce

import AddNewUser from "@/components/add-new-user";

function UserManagement() {
    return (
        <div className="p-20 max-w-6xl">
            <div className="flex justify-between">
                <h2>User Management</h2>
                <AddNewUser />
            </div>
        </div>
    )
}

export default UserManagement;
