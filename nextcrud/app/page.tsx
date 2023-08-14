import Image from 'next/image'
import AddTask from './components/AddTask'
import TodoList from './components/TodoList'
import { getAllTodos } from '@/api'
import Link from 'next/link';

export default async function Home() {
  const tasks = await getAllTodos();
  //console.log(tasks);
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>  
        <AddTask />
        <Link href="/task/add-task">Add Task</Link>
      </div> 
      <TodoList allTasksList = {tasks} />
    </main>
  )
}
