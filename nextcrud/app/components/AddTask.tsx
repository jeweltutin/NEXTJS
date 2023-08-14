"use client"
import { AiOutlinePlus, AiOutlinePlusCircle } from 'react-icons/ai';
import Modal from './Modal';
import { FormEventHandler, useState } from 'react';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';

declare global {
  interface Window { // ⚠️ notice that "Window" is capitalized here
    my_modal_3: any;
  }
}

const AddTask = () => {
  const router = useRouter();
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  //const handleSubmitNewTodo = (e: any) => {
  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(newTaskValue);
    addTodo({
      id: "8",
      text: newTaskValue,
      time: ".5 hour"
    });
    setNewTaskValue("");

    router.refresh();
  }

  return (
    <div>
      <button className="btn btn-primary w-full btn-sm" onClick={() => window.my_modal_3.showModal()}>
        Add New Task
        <AiOutlinePlusCircle className="ml-2" size={20} />
      </button>
      {/* <Modal /> */}

      <dialog id="my_modal_3" className="modal">
        <form method="dialog" onSubmit={handleSubmitNewTodo} className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          {/* <h3 className="font-bold text-lg">Add Todo</h3>
                <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
          <h3 className="font-bold text-lg">Add New Todo</h3>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">What is the task?</span>
            </label>
            <input type="text" value={newTaskValue} onChange={(e) => setNewTaskValue(e.target.value) } placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4" />
            {/* <label className="label">
              <span className="label-text">Time period:</span>
            </label>
            <input type="text" value={newTaskValue} onChange={(e) => setNewTaskValue(e.target.value) } placeholder="Time:" className="input input-bordered w-full max-w-xs mb-4" /> */}
            <button type="submit" className="btn btn-success">Save</button>
          </div>
        </form>
      </dialog>
    </div>
  )
}

export default AddTask
