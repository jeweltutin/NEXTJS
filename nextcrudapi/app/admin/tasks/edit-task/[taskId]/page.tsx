'use client'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { FormEventHandler, useEffect, useState } from "react";
import { addMyTask, editTodo, getTask } from '@/api';
import { useRouter } from 'next/navigation';

const TaskEdit = ({ params }: any) => {
  const router = useRouter();
  const tId = params.taskId;
  //console.log(tId);
  const [selectedTask, setSelectedTask] = useState<any>({});

  useEffect(() => {
    const getData = async () => {
      const theTaskFromApi = await getTask(tId);
      setSelectedTask(theTaskFromApi);
    }
    getData();
  }, [])
  console.log(selectedTask)
  const taskValidationSchema = Yup.object({
    aboutTask: Yup.string().required("Please explain the task").min(3, 'Please give 3 characters long').max(25, 'Desc too long')
  })

  return (
    <div className="max-w-4xl mx-auto ">
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
            Edit Todo
          </h1>
          {
            selectedTask?.task ? 
            <Formik
              initialValues={{
                aboutTask: selectedTask.task,
                time: selectedTask.time
              }}
              validationSchema={taskValidationSchema}
              onSubmit={
                async (values, action) => {
                  console.log(values);
                  await editTodo({
                    _id: tId,
                    task: values.aboutTask,
                    time: values.time
                  });
                  router.push('/admin/tasks')
                  router.refresh();
                }
              }
            >
              {({ errors, touched, setFieldValue }: any) => (
                <Form className="mt-6">
                  <div className="mb-2">
                    <label htmlFor="task" className="block text-sm font-semibold text-gray-800" >
                      What is the task?
                    </label>
                    <Field name="aboutTask" className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Task explain:"></Field>
                    <div>
                      {errors.aboutTask && touched.aboutTask ? (
                        <small className='text-red-400 mt-1'>
                          {errors.aboutTask}
                        </small>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="time" className="block text-sm font-semibold text-gray-800">
                      Time period:
                    </label>
                    <Field name="time" className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Time: "></Field>
                  </div>

                  <div className="mt-6">
                    <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                      Update
                    </button>
                  </div>
                </Form>
              )}
            </Formik> : null
          }

        </div>
      </div>
    </div>
  )
}

export default TaskEdit
