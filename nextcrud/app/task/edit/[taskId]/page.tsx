"use client"
import { addTodo, editTodo, getAllTodos } from "@/api";
import { FormEventHandler, useState } from "react";
import { useRouter } from 'next/navigation';
import {useEffect} from 'react'

const handleSubmitEditTodo = ( {params}:any ) => {
    const router = useRouter();
  
    const [message, setMessage] = useState("");
  const [data,setData] = useState<any>([])
  const [task,setTask] = useState<any>({})
    const id = params.taskId;

useEffect(()=>{
 const getData =async()=>{
    const data = await getAllTodos()
    setData(data)
 }
 getData()
},[])
useEffect(()=>{
    if(data.length){
        const task = data?.find((t:any)=>t.id === id)
    setTask(task)
    }
},[data])


    //const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    const handleSubmitEditTodo = async (e: any) => {  
        e.preventDefault();
     
        // await editTodo({
        //     id: task.id,
        //     text: task.text,
        //     time: task.time
        // });
   await editTodo({
            id: id,
            text: e.target.text.value,
            time: e.target.time.value,
        });
        //router.push('/')
        //router.refresh();
    }
    console.log(task)
    console.log({...task})

    return (
        <main className="max-w-4xl mx-auto ">
            <div className="text-center my-100 flex flex-col gap-4">
                <h1 className="text-2xl font-bold mt-20">Todo List App</h1>
                <form method="dialog" onSubmit={handleSubmitEditTodo} className="modal-box m-auto">
                    <h3 className="font-bold text-lg" >Edit Todo</h3>
                    <div className="form-control w-full max-w-xs m-auto">
                        <label className="label">
                            <span className="label-text">What is the task?</span>
                        </label>
                        <input type="text" name="text" value={task.text} onChange={(e) => setTask({...task,text:e.target.value})} placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4" />
                        <label className="label">
                            <span className="label-text">Time period:</span>
                        </label>
                        <input type="text" name="time" value={task.time} onChange={(e) => setTask({...task,time:e.target.value})} placeholder="Time:" className="input input-bordered w-full max-w-xs mb-4" />
                        <button type="submit" className="btn btn-success text-white">Save</button>
                    </div>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>

            </div>

        </main>

    )
}

export default handleSubmitEditTodo
