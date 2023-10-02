
import { setPopup } from '@/redux/slices/popupSlice';
import { userLogin } from '@/redux/slices/userSlice';
import { AppDispatch } from '@/redux/store';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

const Login = () => {
    //const dispatch = useDispatch();
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const loginSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password not provided').min(3, 'Password is too short')
    });

    return (
        <div className='flex h-screen items-center justify-center'>
            <div>
                <div className='container'>
                    <div className="flex justify-center items-center">
                        <Image src='/assets/images/LoginIcon.png' width={100} className='items-center justify-center' height={120} alt='Login'></Image>
                    </div>
                    <div className='max-w-900 bggray-200 w-[300px] rounded-lg  py-4 px-4 shadow-md shadow-slate-400 text-center'>
                        <p className='text-subtitle font-semibold text-brand_bg'>
                            Login Now
                        </p>
                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            validationSchema={loginSchema}
                            /* onSubmit={(formData) => {
                                //alert(JSON.stringify(formData))
                                // JSON.stringify(obj, replacer, space)
                                alert(JSON.stringify(formData, null , 5))  /// Insert 1-10 space characters for each white space:
                            }} */

                            /* onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                  alert(JSON.stringify(values, null, 2));
                                  setSubmitting(false);
                                }, 400);
                            }} */

                            onSubmit={(formData) => {
                                //alert(JSON.stringify(formData.email))
                                dispatch(userLogin({
                                    email: formData.email,
                                    password: formData.password
                                })).then((res) => {
                                    //console.log(res);
                                    //alert(JSON.stringify(res));
                                    if(res.type === 'user/userLogin/fulfilled'){
                                        //alert('Success');
                                        //console.log('Good Success');
                                        dispatch(setPopup({
                                            type: 'success',
                                            message: 'login Success',
                                            show: true
                                        }));
                                        /* if (res.payload.role === 'admin') {
                                            router.push('marketing/dashboard')
                                        } else {
                                            //
                                        } */
                                        res?.payload?.role === 'admin' && router.push('marketing/dashboard');

                                    }else {
                                        dispatch(setPopup({
                                            type: 'failed',
                                            // message: 'login Failed',
                                            message: res.payload.response.data,
                                            show: true
                                        }));
                                      }
                                })
                                setTimeout(() => {
                                    dispatch(setPopup({ 
                                        show: false,
                                        type: '',
                                        message: ''
                                     }));
                                }, 15000)
                            }}
                        >

                            <Form className=' text-center mt-8'>
                                <div className='flex flex-col space-y-8 items-center justify-start'>
                                    <div className='relative w-full'>
                                        <Field
                                            name='email'
                                            type='text'
                                            className='bg-gray-50 w-full text-black text-red border-[1px] border-gray-300 focus:border-blue-300 text-sm py-1 h-10  px-2 rounded-lg outline-none'
                                            placeholder='Enter your email address' />
                                        
                                        <div className="text-left text-red-500 text-sm">
                                            <ErrorMessage name="email" />
                                        </div>                                      
                                    </div>

                                    <div className='relative w-full'>
                                        <Field
                                            name='password'
                                            type='password'
                                            className='bg-gray-50 text-black text-red border-[1px] border-gray-300 focus:border-blue-300  text-sm py-1 h-10 w-full   px-2 rounded-lg outline-none'
                                            placeholder='Enter your password' />

                                        <div className="text-left text-red-500 text-sm">
                                            <ErrorMessage name="password" />
                                        </div>
                                    </div>

                                    <button
                                        className='w-full cursor-pointer rounded-lg para hover:bg-brand_color hover:text-brand_bg border-[1px] font-semibold hover:border-brand_bg bg-sky-500 py-1 text-center subtitle text-white shadow-md'
                                        type='submit'>
                                        Log in
                                    </button>
                                </div>
                            </Form>
                        </Formik>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
