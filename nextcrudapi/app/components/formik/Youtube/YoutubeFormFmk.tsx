"use client"
import { Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";


export default function YoutubeFormFmk() {

  const youtubeSchema = Yup.object({
    name: Yup.string().required('Please provide the Name').min(3, 'Please give 3 characters long').max(25, 'Name is too long'),
    email: Yup.string().email().required('Please provide your email'),
    comments: Yup.string().required('Please Enter your comments')
  })

  return (
    <div className="max-w-md mx-auto pt-16">
      <Formik
        initialValues={{
          name: '',
          email: '',
          channel: '',
          comments: ''
        }}
        validationSchema={youtubeSchema}

        onSubmit={(values, action: any) => {
          console.log("Values:", values);
          action.resetForm();
        }}

      /* onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }} */

      >
        {({ errors, touched, setFieldValue }: any) => (
          <Form>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <Field name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your name" ></Field>
              <div>
                {errors.name && touched.name ? (
                  <small className='text-red-400 mt-1'>
                    {errors.name}
                  </small>
                ) : null}
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
              <Field name="email" type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your email"></Field>
              <div>
                {errors.email && touched.email ? (
                  <small className='text-red-400 mt-1'>
                    {errors.email}
                  </small>
                ) : null}
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="channel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Channel</label>
              <Field name="channel" id="channel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your name"></Field>
            </div>

            <div className="mb-6">
              <Field as="select" name="color">
                {/* <option value="">Select Color</option> */}
                <option value="DEFAULT" disabled>Choose a Color ...</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
            </div>

            <div className="mb-6">
              <label htmlFor="channel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Description:</label>
              <Field
                as='textarea'
                name='comments'
                id='comments'
                cols='40'
                rows='5'
                placeholder='comments'
                className='bg-gray-100 p-2 px-4 placeholder-black mb-6'
              />
              <div>
                {errors.comments && touched.comments ? (
                  <small className='text-red-400 mt-1'>
                    {errors.comments}
                  </small>
                ) : null}
              </div>
            </div>

            <button type="submit" className="bg-green-600 px-4 py-2 hover:bg-green-400 text-white">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
