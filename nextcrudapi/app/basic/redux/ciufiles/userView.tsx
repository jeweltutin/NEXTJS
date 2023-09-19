'use client'
import { fetchUsers } from "@/app/redux/state/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux"


const userView = () => {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

     useEffect(() => {
        dispatch(fetchUsers())
    },[])
 
  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default userView
