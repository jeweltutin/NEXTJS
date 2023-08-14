import { MyTask } from "./types/tasks";

const baseUrl = 'http://localhost:5000';

export const getAllTasks = async () => {
    //const res = await fetch(`${baseUrl}/tasks`);
    const res = await fetch(`${baseUrl}/api/tasks`, { cache: 'no-store' });
    //const res = await fetch('http://localhost:3001/tasks');
    if (!res.ok) throw new Error('failed to fetch data')
    const todos = res.json();
    return todos;
}

export const getTask = async (id: string) => {
    const res = await fetch(`${baseUrl}/api/tasks/${id}`);
    return res.json();
}

/*const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
}*/

export const addMyTask = async (vtask: MyTask) => {
    try {
        const res = await fetch(`${baseUrl}/api/tasks/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vtask)
        })
        const newTodo = res.json();
        return newTodo;
    } catch (error) {
        return 'Failed'
    }
}

export const editTodo = async (todo: MyTask) => {
    console.log(todo)
    const res = await fetch(`${baseUrl}/api/tasks/${todo._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const updateTodo = res.json();
    console.log(updateTodo)

    return updateTodo;
}

export const deleteMyTask = async (id: string): Promise<void> => {
    await fetch(`${baseUrl}/api/tasks/${id}`, {
        method: 'DELETE',
    })
}