"use client"; // Ensure this is at the top of the file

import Loader from "@/app/components/Loader";
import { useGetAllTaskQuery } from "@/app/redux/slices/api/taskApiSlice";
import { useParams } from "next/navigation";


const TASK_TYPE = {
  todo: "bg-blue-600", // Blue for "To Do"
  "in progress": "bg-yellow-600", // Yellow for "In Progress"
  completed: "bg-green-600", // Green for "Completed"
};

const TasksFilteredList = () => {
  //const router =  useParams(); 
   const { status } =  useParams(); // Extract status (stage) from URL query parameters

  console.log("status:", status);

  // Make sure the status is passed as a query parameter to the backend
  const { data, isLoading } = useGetAllTaskQuery({
    strQuery: status || "", // Pass status as the query for filtering
    isTrashed: "",
    search: "",
  });

  if (isLoading) return <Loader />;

  return (
    <div className="w-full">
      <h1>{status ? `${status.charAt(0).toUpperCase() + status.slice(1)} Tasks` : "Tasks"}</h1>

      {/* Render tasks */}
      {data?.tasks?.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {data.tasks.map((task, index) => (
            <div
              key={index}
              className={`border p-4 rounded-lg shadow-md ${TASK_TYPE[task.stage]}`}
            >
              <h2 className="text-xl font-semibold">{task.title}</h2>
              <p className="text-sm text-gray-600">{task.description}</p>
              <div className="mt-2 flex justify-between">
                <span className="text-sm text-gray-500">
                  Due: {new Date(task.date).toLocaleDateString()}
                </span>
                <span className="text-sm font-semibold">{task.stage}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TasksFilteredList;
