
import Image from 'next/image'

const Login = () => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <div className=''>
                <div className='container'>

                    <div className="flex justify-center items-center">
                        <Image
                            src='/assets/images/LoginIcon.png'
                            width={100}
                            className='items-center justify-center'
                            height={120}
                            alt='Login'
                        ></Image>
                    </div>
                    <div className='max-w-900 bggray-200 w-[400px] rounded-lg  py-4 px-4 shadow-md shadow-slate-400 text-center'>
                        <p className='text-subtitle font-semibold text-brand_bg'>
                            Login Now
                        </p>

                        <form className=' text-center mt-8'>
                            <div className='flex flex-col space-y-8 items-center justify-start'>
                                <div className='relative w-full'>
                                    <input
                                        name='email'
                                        type='text'
                                        className='bg-gray-50 w-full text-black text-red border-[1px] border-gray-300 focus:border-blue-300 text-sm py-1 h-10  px-2 rounded-lg outline-none'
                                        placeholder='Enter your email address'
                                    />
                                </div>

                                <div className='relative w-full'>
                                    <input
                                        name='password'
                                        type='password'
                                        className='bg-gray-50 text-black text-red border-[1px] border-gray-300 focus:border-blue-300  text-sm py-1 h-10 w-full   px-2 rounded-lg outline-none'
                                        placeholder='Enter your password' />
                                    <div>
                                    </div>
                                </div>

                                <button
                                    className='w-full cursor-pointer rounded-lg para hover:bg-brand_color hover:text-brand_bg border-[1px] font-semibold hover:border-brand_bg bg-brand_bg py-1 text-center subtitle text-brand_color shadow-md'
                                    type='submit'>
                                    Log in
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
