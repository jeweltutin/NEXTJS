'use client'
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';

const Login = () => {
    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Enter a valid email').required('Email required'),
        password: Yup.string().required('No password provided').min(3, 'Password is too short - should be 3 character minimum')
    })
    return (
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
            <div className='max-w-container container side_padding flex justify-center md:justify-center items-center'>
                <div className='max-w-400 bggray-200 w-300 rounded-lg  py-4 px-4 shadow-md shadow-slate-400 text-center'>
                    <p className='text-subtitle font-semibold text-brand_bg'>
                        Log in to Dx Admin
                    </p>
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={loginSchema}
                        onSubmit={async (values, action) => {
                            console.log(values);
                            /* try {
                                const data = await fetch('http://localhost:5000/api/user/Login',{
                                    method: 'POST',
                                    //body:JSON.stringify({ values.email })
                                })
                                
                            } catch (error) {
                                
                            } */
                        }}
                    >
                        {({ errors, touched }: any) => (
                            <Form className=' text-center mt-8'>
                                <div className='flex flex-col space-y-8 items-center justify-start'>
                                    <div className='relative w-full'>
                                        <Field
                                            name='email'
                                            type='text'
                                            className='bg-gray-50 w-full text-black text-red border-[1px] border-gray-300 focus:border-blue-300 text-sm py-1 h-10  px-2 rounded-lg outline-none'
                                            placeholder='Enter your email address'
                                        />

                                        <div>
                                            {errors.email && touched.email ? (
                                                <small className='text-red-500 absolute left-0 top-11'>
                                                    {errors.email}
                                                </small>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div className='relative w-full'>
                                        <Field
                                            name='password'
                                            type='password'
                                            className='bg-gray-50 text-black text-red border-[1px] border-gray-300 focus:border-blue-300  text-sm py-1 h-10 w-full   px-2 rounded-lg outline-none'
                                            placeholder='Enter your password'
                                        />
                                        <div>
                                            {errors.password && touched.password ? (
                                                <small className='text-red-500 absolute left-0 top-11'>
                                                    {errors.password}
                                                </small>
                                            ) : null}
                                        </div>
                                    </div>

                                    <button
                                        className='w-full cursor-pointer rounded-lg para hover:bg-brand_color hover:text-brand_bg border-[1px] font-semibold hover:border-brand_bg bg-brand_bg py-1 text-center subtitle text-brand_color shadow-md'
                                        type='submit'
                                    >
                                        Log in
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

export default Login
