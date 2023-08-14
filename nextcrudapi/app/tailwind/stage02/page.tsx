'use client'

function Tailwind3() {

    const handleClick = () => {
        window.print();
    }

    return (
        <div className="p-10 w-full pt-20 text-center">
            <h2 className="underline decoration-violet-500 decoration-4">Tailwind CSS 3</h2>
            <p className="text-lg text-gray-600  first-letter:text-6xl first-letter:text-blue-600 selection:bg-red-300 print:text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ullam facilis nemo fugiat tenetur excepturi voluptates neque vero soluta
                ex totam. Dolores repellat aspernatur tempore ipsum. Ratione soluta veniam id neque.
            </p>
            <p className="md:hover:bg-green-500 p-3 text-xl print:text-yellow-600 print:text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
                quis hic unde dignissimos aut est dicta natus iste dolore quidem blanditiis rerum.
                Voluptatibus dolorem illo vitae iusto non, quae cumque?
            </p>
            <div className="mt-10">
                <label htmlFor="email" className="after:content-['*'] after:ml-1 after:text-red-500 text-[#AA44aa]">Email</label>
            </div>

            <h3>Colored Box Shadow</h3>
            <div className="max-w-4xl mx-auto">
                <div className="mt-20 px-4 flex justify-center space-x-6">
                    <button className="bg-cyan-500 text-white px-4 py-2 rounded-full">Subscribe</button>
                    <button className="bg-lime-500 text-white px-4 py-2 rounded-2xl shadow-lg shadow-lime-500/20">Subscribe</button>
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded-full shadow-md shadow-indigo-600/30">Subscribe</button>
                </div>
            </div>

            {/* <h3>Print Modifier</h3> */}
            <p className="mt-6 text-right print:hidden">
                <button onClick={handleClick} className="bg-blue-500 text-white border-0 px-3 py-2 rounded-md">Print</button>
            </p>

            <h3>Aspect Ratio</h3>
            <div className="min-h-screen grid place-items-center px-8">
                <div className="w-full max-w-4xl mx-auto">
                    <iframe
                        className="w-full rounded-md aspect-video"
                        src="https://www.youtube.com/embed/o1eSZySl1Jg"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>

            <h3>Aspect Ratio 02</h3>
            <div className="min-h-screen grid place-items-center px-8">
                <div className="w-full max-w-2xl mx-auto">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <img
                                // className="aspect-[3/2] w-full object-cover"
                                className="aspect-video w-full object-cover"
                                //className="h-48 w-full object-cover"
                                src="https://img.youtube.com/vi/smDa6hoxLKI/maxresdefault.jpg"
                                alt=""
                            />
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-indigo-600">
                                    <a href="#" className="hover:underline"> Video </a>
                                </p>
                                <a href="#" className="block mt-2">
                                    <p className="text-xl font-semibold text-gray-900">
                                        Tailwind CSS Tutorial Bangla - Introduction
                                        to Tailwind CSS
                                    </p>
                                    <p className="mt-3 text-base text-gray-500">
                                        Tailwind is a utility-first CSS framework to
                                        rapidly build modern websites without ever
                                        leaving your HTML. In this Tailwind CSS
                                        tutorial, I have given a short introduction
                                        and overview of Tailwind CSS in Bangla
                                        language. Also, I have explained, why
                                        Tailwind vs Bootstrap debate should be
                                        stopped as both are useful in their own
                                        ways.
                                    </p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <a href="#">
                                        <span className="sr-only">Learn with Jewel</span>
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://www.dx360.com.bd/dxassets/img/jeweltutin.png"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        <a href="#" className="hover:underline">
                                            Learn with Jewel
                                        </a>
                                    </p>
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        <time datetime="2020-03-10">
                                            Mar 10, 2020
                                        </time>
                                        <span aria-hidden="true"> &middot; </span>
                                        <span> 13 min read </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3>Scroll Snap</h3>
            <div className="flex gap-8 p-8 w-screen overflow-x-scroll snap-x">
                <div className="flex-shrink-0 w-80 h-40 bg-cyan-300 rounded-2xl snap-center"></div>
                <div className="flex-shrink-0 w-80 h-40 bg-violet-400 rounded-2xl snap-center"></div>
                <div className="flex-shrink-0 w-80 h-40 bg-fuchsia-400 rounded-2xl snap-center"></div>
                <div className="flex-shrink-0 w-80 h-40 bg-yellow-500 rounded-2xl"></div>
            </div>

            <h3>Scroll Behavior</h3>
            <div className="max-w-7xl mx-auto">
                <nav className="bg-white shadow-md flex h-11 fixed w-full left-[50%] top-0 translate-x-[-50%]" >
                    <div className="px-10 py-2 border-slate-200 border-r-2">
                        <a href="#section-a">Section A</a>
                    </div>

                    <div className="px-10 py-2 border-slate-200 border-r-2">
                        <a href="#section-b">Section B</a>
                    </div>

                    <div className="px-10 py-2 border-slate-200">
                        <a href="#section-c">Section C</a>
                    </div>
                </nav>


                <div className="mt-24 space-y-8 px-10">
                    <section id="section-a" className="text-justify scroll-mt-14">
                        <h1 className="font-extrabold mb-5">Section A title here</h1>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Fugiat laboriosam dolorum in unde nihil sed error illum
                            dolor, similique est eligendi nesciunt dolorem harum
                            labore ipsa nam ex quam soluta. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Sapiente incidunt
                            rerum officia aperiam placeat vero sed eligendi ducimus,
                            officiis dignissimos impedit sit itaque adipisci dolor,
                            tempore ea? Sit, eveniet repellat?
                        </p>
                        <p className="mt-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Fugiat laboriosam dolorum in unde nihil sed error illum
                            dolor, similique est eligendi nesciunt dolorem harum
                            labore ipsa nam ex quam soluta. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Sapiente incidunt
                            rerum officia aperiam placeat vero sed eligendi ducimus,
                            officiis dignissimos impedit sit itaque adipisci dolor,
                            tempore ea? Sit, eveniet repellat?
                        </p>
                    </section>

                    <hr className="border-slate-200" />

                    <section id="section-b" className="text-justify scroll-mt-14">
                        <h1 className="font-extrabold mb-5">Section B title here</h1>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Fugiat laboriosam dolorum in unde nihil sed error illum
                            dolor, similique est eligendi nesciunt dolorem harum
                            labore ipsa nam ex quam soluta. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Sapiente incidunt
                            rerum officia aperiam placeat vero sed eligendi ducimus,
                            officiis dignissimos impedit sit itaque adipisci dolor,
                            tempore ea? Sit, eveniet repellat?
                        </p>
                        <p className="mt-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Fugiat laboriosam dolorum in unde nihil sed error illum
                            dolor, similique est eligendi nesciunt dolorem harum
                            labore ipsa nam ex quam soluta. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Sapiente incidunt
                            rerum officia aperiam placeat vero sed eligendi ducimus,
                            officiis dignissimos impedit sit itaque adipisci dolor,
                            tempore ea? Sit, eveniet repellat?
                        </p>
                    </section>

                    <hr className="border-slate-200" />

                    <section id="section-c" className="text-justify scroll-mt-14">
                        <h1 className="font-extrabold mb-5">Section C title here</h1>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Fugiat laboriosam dolorum in unde nihil sed error illum
                            dolor, similique est eligendi nesciunt dolorem harum
                            labore ipsa nam ex quam soluta. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Sapiente incidunt
                            rerum officia aperiam placeat vero sed eligendi ducimus,
                            officiis dignissimos impedit sit itaque adipisci dolor,
                            tempore ea? Sit, eveniet repellat?
                        </p>
                        <p className="mt-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Fugiat laboriosam dolorum in unde nihil sed error illum
                            dolor, similique est eligendi nesciunt dolorem harum
                            labore ipsa nam ex quam soluta. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Sapiente incidunt
                            rerum officia aperiam placeat vero sed eligendi ducimus,
                            officiis dignissimos impedit sit itaque adipisci dolor,
                            tempore ea? Sit, eveniet repellat?
                        </p>
                    </section>
                </div>

                <div className="mt-24 px-10">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
                    sequi laborum odio rerum voluptate excepturi nihil ea eligendi
                    magni nulla ipsum illo eaque atque, assumenda laudantium amet
                    fuga praesentium expedita.
                </div>
            </div>

            <h3>Multi column</h3>
            <div className="max-w-6xl mx-auto">
                <div className="mt-10 px-4 space-y-6 columns-2xs">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio minima repudiandae eius error inventore dolor dolore
                        amet deleniti! Culpa itaque dolore laborum dicta doloribus
                        necessitatibus quod tempora soluta ipsam! Ad? Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit. Non ipsam
                        quibusdam quidem molestiae nisi dolor deserunt rerum nostrum
                        quae consequuntur, assumenda eos dolorem beatae ducimus
                        temporibus? Dolorem animi vero cum.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Enim esse ad aliquid. Enim rerum vero illum sunt odio est
                        itaque nostrum obcaecati dolores. Nulla culpa doloremque
                        labore eveniet, autem commodi. Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Officia veritatis expedita
                        nisi cum a amet velit eligendi laudantium iure
                        exercitationem qui ipsa saepe, impedit officiis quae sint
                        vel obcaecati odio?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio minima repudiandae eius error inventore dolor dolore
                        amet deleniti! Culpa itaque dolore laborum dicta doloribus
                        necessitatibus quod tempora soluta ipsam! Ad? Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Cupiditate ut
                        vero ducimus similique ipsum nemo nesciunt praesentium
                        eligendi voluptatibus iste, laboriosam unde natus quas illum
                        perspiciatis quidem aliquam? Odio, harum.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Enim esse ad aliquid. Enim rerum vero illum sunt odio est
                        itaque nostrum obcaecati dolores. Nulla culpa doloremque
                        labore eveniet, autem commodi. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Perferendis, aliquam! Eius ab
                        corporis dolorum veniam quibusdam sunt incidunt harum
                        voluptatibus temporibus architecto natus, ut ullam? Sed
                        accusantium quos laborum cum!
                    </p>
                </div>

                <h3>Multi column</h3>
                <div className="bg-[url('/images/bg.jpg')] bg-repeat">
                    <div className="min-h-screen grid grid-cols-[100px_1fr_120px] gap-5 p-8">
                        <div className="bg-slate-600"></div>
                        <div className="bg-indigo-500"></div>
                        <div className="bg-pink-500"></div>
                        <div className="bg-green-500"></div>
                        <div className="bg-blue-600"></div>
                        <div className="bg-yellow-500 text"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Tailwind3