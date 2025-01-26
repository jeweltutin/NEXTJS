"use client"
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';

export default function Contact() {
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        setStatus('Sending...');
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/emails', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values), // Formik passes the form values here
            });
    
            const data = await response.json();
    
            console.log('Response status:', response.status); // Debugging line
            console.log('Response data:', data); // Debugging line
    
            if (response.ok) {
                setStatus('Email sent successfully!');
                toast.success('🦄 Success! ' + data.message, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
                // Clear the form after successful submission
                resetForm();
            } else {
                setStatus(data.error || 'Failed to send email.');
                toast.error('Error: ' + (data.error || 'Failed to send email.'));
            }
        } catch (error) {
            console.error('Error occurred:', error); // Log error details
            setStatus('Error occurred while sending the email.');
            toast.error('Error occurred while sending the email.');
        } finally {
            setIsSubmitting(false); // Stop the spinner after submission
        }
    };
    

    return (
        <div className="py-16 px-8">
            <div className="px-12">
                <div className="flex items-center">
                    <h1 className="text-4xl font-bold mr-3">Contact</h1>
                    <div className="h-[2px] w-48 bg-red-500"></div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0 md:space-x-8 lg:space-x-12 p-10">
                {/* Left Side */}
                <div className="flex flex-col text-[18px] leading-8 space-y-6 w-full lg:w-[40%] xl:w-[30%]">
                    <div className="flex items-start space-x-4 bg-pink-100 p-8 rounded-lg">
                        <FiPhone className="w-6 h-6 text-pink-600" />
                        <div>
                            <p className="font-semibold">Phone :</p>
                            <p className="text-gray-500">+452 666 386</p>
                            <p className="text-gray-500">+654 764 878</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4 bg-blue-100 p-8 rounded-lg">
                        <FiMail className="w-6 h-6 text-blue-600" />
                        <div>
                            <p className="font-semibold">Email :</p>
                            <p className="text-gray-500">ibthemes@gmail.com</p>
                            <p className="text-gray-500">mailto:xyz@abc.com</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4 bg-purple-100 p-8 rounded-lg">
                        <FiMapPin className="w-6 h-6 text-purple-600" />
                        <div>
                            <p className="font-semibold">Address :</p>
                            <p className="text-gray-500">Maount View, Oval Road,</p>
                            <p className="text-gray-500">New York, USA</p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%] p-8 lg:p-12 rounded-lg shadow-md bg-[rgb(248,251,251)]">
                    <h3 className="text-2xl font-bold mb-4 leading-10">
                        I'm always open to discussing product <br />
                        <span className="font-bold text-gray-500">design work or partnerships.</span>
                    </h3>

                    <Formik initialValues={{ name: "", email: "", message: "" }}
                        validationSchema={Yup.object({
                            name: Yup.string().max(25, "MUst be 15 characters or less").required("Required"),
                            email: Yup.string().email("Invalid email address").required("Required"),
                            message: Yup.string().required("Required")
                        })}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-2">Name *</label>
                                <Field name="name" type="text" placeholder="Enter your name" className="w-full border-b border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
                                <p className="text-red-700 p-2" >
                                    <ErrorMessage name="name" />
                                </p>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2">Email *</label>
                                <Field name="email" type="email" placeholder="Enter your email" className="w-full border-b border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
                                <p className="text-red-700 p-2" >
                                    <ErrorMessage name="email" />
                                </p>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-2">Message *</label>
                                <Field name="message" as="textarea" placeholder="Write your message" className="w-full border-b border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-red-400" />
                                <p className="text-red-700 p-2" >
                                    <ErrorMessage name="message" />
                                </p>
                            </div>
                            <button type="submit" disabled={isSubmitting} className="px-5 text-black font-semibold py-2 rounded-lg border hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-all duration-300">
                                {isSubmitting ? (
                                    <span className="flex items-center space-x-2">
                                        <div className="w-5 h-5 border-t-2 border-b-2 border-gray-600 rounded-full animate-spin"></div>
                                        <span>Sending...</span>
                                    </span>
                                ) : (
                                    'Submit'
                                )}
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
