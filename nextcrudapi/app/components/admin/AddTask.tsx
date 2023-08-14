'use client'
import { addMyTask } from "@/api";
import { Field, Form, Formik } from "formik"
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const AddTask = () => {
    const router = useRouter();
    const taskSchema = Yup.object({
        task: Yup.string().required("Please explain the task").min(3, 'Please give 3 characters long').max(25, 'Desc too long')
    })

    return (
        <div className="max-w-4xl mx-auto pt-24">
            <div className="relative flex flex-col justify-center pt-3 overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                    <h1 className="text-2xl font-semibold text-center text-indigo-700 underline decoration-slice">
                        Add New Todo
                    </h1>
                    <Formik
                        initialValues={{
                            task: '',
                            time: ''
                        }}
                        validationSchema={taskSchema}
                        onSubmit={async (values, action) => {
                            console.log(values);
                            const insertData = await addMyTask({
                                _id: "",
                                task: values.task,
                                time: values.time
                            });
                            action.resetForm();
                            router.push('/admin/tasks')
                            router.refresh();
                        }}
                    >
                        {({ errors, touched, setFieldValue }: any) => (
                            <Form>
                                <div className="mb-2">
                                    <label htmlFor="task" className="block text-sm font-semibold text-gray-800" >
                                        What is the task?
                                    </label>
                                    <Field name="task" className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Task explain: "></Field>
                                    <div>
                                        {errors.task && touched.task ? (
                                            <small className='text-red-400 mt-1'>
                                                {errors.task}
                                            </small>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="time" className="block text-sm font-semibold text-gray-800">
                                        Time period:
                                    </label>
                                    <Field name="time" className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Time: " ></Field>
                                </div>

                                <div className="mt-6">
                                    <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                                        Save
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default AddTask
