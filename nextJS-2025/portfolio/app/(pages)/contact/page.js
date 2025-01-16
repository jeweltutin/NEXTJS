import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Contact() {
    return (
        <div className="py-16 px-8">
            <div className="container mx-auto flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0 md:space-x-8">
                {/* Left Side */}
                <div className="flex flex-col space-y-6 w-full lg:w-[40%] xl:w-[30%]">
                    <h2 className="text-2xl font-bold border-b-2 border-red-400 inline-block">Contact</h2>
                    <div className="flex items-start space-x-4 bg-pink-100 p-4 rounded-lg">
                        <FiPhone className="w-6 h-6 text-pink-600" />
                        <div>
                            <p className="font-semibold">Phone :</p>
                            <p>+452 666 386</p>
                            <p>+654 764 878</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4 bg-blue-100 p-4 rounded-lg">
                        <FiMail className="w-6 h-6 text-blue-600" />
                        <div>
                            <p className="font-semibold">Email :</p>
                            <p>ibthemes@gmail.com</p>
                            <p>mailto:xyz@abc.com</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4 bg-purple-100 p-4 rounded-lg">
                        <FiMapPin className="w-6 h-6 text-purple-600" />
                        <div>
                            <p className="font-semibold">Address :</p>
                            <p>Maount View, Oval Road,</p>
                            <p>New York, USA</p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%] p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">
                        I'm always open to discussing product <br />
                        <span className="font-bold text-gray-800">design work or partnerships.</span>
                    </h3>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-semibold mb-2">Name *</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-semibold mb-2">Email *</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block font-semibold mb-2">Message *</label>
                            <textarea
                                id="message"
                                className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-red-400"
                                placeholder="Write your message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-red-400 text-white font-semibold py-3 rounded-lg hover:bg-red-500 transition-all duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
