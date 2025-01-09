"use client";
import BoardView from '@/app/components/BoardView';
import Button from '@/app/components/Button';
import Loader from '@/app/components/Loader';
import Tabs from '@/app/components/Tabs';
import TaskTitle from '@/app/components/TaskTitle';
import Title from '@/app/components/Title';
import { tasks } from '@/app/data';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import { FaList } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { MdGridView } from 'react-icons/md';
import AddTask from '@/app/components/task/AddTask';
import { useGetAllTaskQuery } from '@/app/redux/slices/api/taskApiSlice';
import Table from '@/app/components/task/Table';
import { useSelector } from 'react-redux';

function Tasks() {
  const params = useParams();

  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  //const [loading, setLoading] = useState(false);

  const TABS = [
    { title: "Board View", icon: <MdGridView /> },
    { title: "List View", icon: <FaList /> },
  ];

  const TASK_TYPE = {
    todo: "bg-blue-600",
    "in progress": "bg-yellow-600",
    completed: "bg-green-600",
  };

  const status = params?.status || "";

  const { user } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetAllTaskQuery({
    strQuery: status,
    isTrashed: "",
    search: "",
    userId: user?.data?._id,
    role: user?.data?.role 
  });

  return isLoading ? (
    <div className='py-10'>
      <Loader />
    </div>
  ) : (
    <div className='w-full'>
      <div className='flex items-center justify-between mb-4'>
        <Title title={status ? `${status} Tasks` : "Tasks"} />
        {!status && (
          <Button
            onClick={() => setOpen(true)}
            label='Create Task'
            icon={<IoMdAdd className='text-lg' />}
            addClasses='flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5'
          />
        )}

      </div>
      <Tabs tabs={TABS} setSelected={setSelected}>
        {!status && (
          <div className='w-full flex justify-between gap-4 md:gap-x-12 py-4'>
            <TaskTitle label='To Do' className={TASK_TYPE.todo} />
            <TaskTitle label='In Progress' className={TASK_TYPE["in progress"]} />
            <TaskTitle label='completed' className={TASK_TYPE.completed} />
          </div>
        )}

        {selected !== 1 ? (
          // <BoardView tasks={tasks} />
          <BoardView tasks={data?.tasks} />
        ) : (
          <div className='w-full'>
            <Table tasks={data?.tasks} />
          </div>
        )}
      </Tabs>

      <AddTask open={open} setOpen={setOpen} />
    </div>
  )
}

export default Tasks
