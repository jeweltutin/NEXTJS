import { MyTask } from "@/types/tasks"
import Task from "./Task";

interface TodoListProps {
    allTasksList: MyTask[];
}

type Props = {
    allTasksList: MyTask[];
}

//Also can use React.FC<>
//const TodoList: React.FunctionComponent<TodoListProps> = ({ allTasksList }) => {
const TodoList = ({ allTasksList }: Props ) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Job</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {
                        allTasksList.map(task => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.text}</td>
                                <td>{task.time}</td>
                                <td>Del Edit</td>
                            </tr>
                        ))
                    }
                </tbody> */}

                <tbody>
                    {
                        allTasksList.map((task) => (
                            <Task task ={task} />

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoList
