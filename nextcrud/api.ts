import { MyTask } from "./types/tasks";

const baseUrl = 'http://localhost:3001';

export const getAllTodos = async () => {
    //const res = await fetch(`${baseUrl}/tasks`);
    const res = await fetch(`${baseUrl}/tasks`, { cache: 'no-store' });
    //const res = await fetch('http://localhost:3001/tasks');
    if (!res.ok) throw new Error('failed to fetch data')
    const todos = res.json();
    return todos;
}

/*const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
}*/

export const addTodo = async (todo: MyTask) => {
    try {
        const res = await fetch(`${baseUrl}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        const newTodo = res.json();
        return newTodo;
    } catch (error) {
        return 'Failed'
    }
}

export const editTodo = async (todo: MyTask) => {
    const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const updateTodo = res.json();

    return updateTodo;
}

export const deleteTodo = async (id: string): Promise<void> => {
    await fetch(`${baseUrl}/tasks/${id}`, {
        method: 'DELETE',
    })
}