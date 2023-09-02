'use client'
import Link from "next/link";
import { getAllTasks } from "@/api";
import AdminTaskList from "@/app/components/admin/AdminTaskList";
import { UserContext } from "@/app/layout";
import { useContext, useEffect, useState } from 'react'

const Tasks = () => {
    const authData = useContext<any>(UserContext)
    const [data, setData] = useState([])

    useEffect(() => {
        getAllTasks(authData.token).then(res => setData(res))
    }, [authData.token])

    // console.log(data)
    return (
        <>
            <div className="text-center my-5 flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Todo List App</h1>
                <Link className="btn bg-teal-700 max-w-4xl text-white mx-auto" href="/admin/tasks/add-new">Add Task</Link>
            </div>
            {data?.length ? <AdminTaskList allTasksList={data} /> : null}
        </>
    )
}

export default Tasks
