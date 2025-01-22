"use client"
import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const response = await fetch('/api/emails', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();  // Parse the response to get the error message if any

            console.log('Response status:', response.status);  // Debugging line to check the response status
            console.log('Response data:', data);  // Debugging line to check the response data

            if (response.ok) {
                setStatus('Email sent successfully!');
                toast.success('🦄 Success! ' + data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
            } else {
                setStatus(data.error || 'Failed to send email.');
                toast.error('Error: ' + (data.error || 'Failed to send email'), {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
            }
        } catch (error) {
            console.error('Error occurred:', error);  // Log error details
            setStatus('Error occurred while sending the email.');
            toast.error('Error occurred while sending the email.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
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
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name" // Ensure name attribute is set for form data
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email" // Ensure name attribute is set for form data
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-2">Message *</label>
                            <textarea
                                id="message"
                                name="message" // Ensure name attribute is set for form data
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-red-400"
                                placeholder="Write your message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="px-5 text-black font-semibold py-2 rounded-lg border hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-all duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
