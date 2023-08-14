import Link from 'next/link'

import { getAllTasks } from '@/api';
import TaskList from '@/app/components/TaskList';

const AllTaskList = async () => {
    const tasks = await getAllTasks();
  return (
    <main className="max-w-4xl mx-auto mt-4">
    <div className="text-center my-5 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Todo List App</h1>  
      <Link href="/task/add-task">Add Task</Link>
    </div> 
    <TaskList allTasksList={tasks}/>
  </main>
  )
}

export default AllTaskList
