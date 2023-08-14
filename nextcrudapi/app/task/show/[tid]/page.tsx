import { getTask } from "@/api";

const showTask = async ({params}: any) => {
  const id = params.tid;
  const showData = await getTask(id);

  return (
    <div className="relative flex flex-col justify-center min-h-screen text-center">
      <h1>Show details:<br /> Task id: </h1> {id}
      <h2>Task : {showData.task}</h2>
      <p>Time : {showData.time}</p>
    </div>
  )
}

export default showTask
