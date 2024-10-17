"use client";
import GlobalApi from '@/actions/GlobalApi';
import { Button } from '@/components/ui/button';
import html2pdf from 'html2pdf.js';
import moment from 'moment';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

function Invoice() {
    const invoiceRef = useRef(null);
    const { orderId } = useParams();
    console.log(orderId);
    const router = useRouter();
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [orderItem, setOrderItem] = useState();

    useEffect(() => {
        const jwtToken = sessionStorage.getItem("jwt");
        const getUser = JSON.parse(sessionStorage.getItem("user"));

        console.log("JWT Token:", jwtToken);
        console.log("User:", getUser);

        if (jwtToken) {
            setToken(jwtToken);
            setUser(getUser);
        } else {
            router.replace("/");
        }
    }, []);

    async function getTheOrder() {
        if (token && user) {
            try {
                const getOrder = await GlobalApi.getSingleOrder(orderId, token);
                //console.log("Order Address: ", getOrder[0].address);
                setOrderItem(getOrder[0]); // Set orderItem to the first item of the array
                console.log("Order: ", getOrder);
            } catch (error) {
                console.log(error)
            }

        }
    }

    useEffect(() => {
        if (token && user) {
            getTheOrder();
        }
    }, [user, token])



    const generatePDF = () => {
        if (invoiceRef.current) {
            const options = {
                margin: 0,
                filename: 'invoice.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' },
            };
            html2pdf().from(invoiceRef.current).set(options).save();
        }
    }

    function printDiv(divName) {
        //var printContents = invoiceRef.current;
        var printContents = document.getElementById(divName).innerHTML;
        w = window.open();
        w.document.write(printContents);
        w.print();
        w.close();
    }

    // Check if user is defined before rendering
    if (!user) {
        return <div>Loading user data...</div>;
    }

    return (
        <main id="content">
            <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
                <div className="sm:w-11/12 lg:w-3/4 mx-auto">
                    <div ref={invoiceRef} id="printDiv" className="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-neutral-800">
                        <div className="flex justify-between">
                            <div>
                                <svg className="size-10" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 26V13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13C25 19.6274 19.6274 25 13 25H12" className="stroke-blue-600 dark:stroke-white" stroke="currentColor" strokeWidth="2" />
                                    <path d="M5 26V13.16C5 8.65336 8.58172 5 13 5C17.4183 5 21 8.65336 21 13.16C21 17.6666 17.4183 21.32 13 21.32H12" className="stroke-blue-600 dark:stroke-white" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="13" cy="13.0214" r="5" fill="currentColor" className="fill-blue-600 dark:fill-white" />
                                </svg>
                                <h1 className="mt-2 text-lg md:text-xl font-semibold text-blue-600 dark:text-white">Preline Inc.</h1>
                            </div>


                            <div className="text-end">
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-neutral-200">Invoice #</h2>
                                <span className="mt-1 block text-gray-500 dark:text-neutral-500">
                                    3682303
                                    {/* {orderId} */}
                                </span>

                                <address className="mt-4 not-italic text-gray-800 dark:text-neutral-200">
                                    45 Roker Terrace<br />
                                    Latheronwheel<br />
                                    KW5 8NW, London<br />
                                    United Kingdom<br />

                                </address>
                            </div>

                        </div>

                        <div className="mt-8 grid sm:grid-cols-2 gap-3">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">Bill to:</h3>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200"> {user?.username} </h3>
                                <address className="mt-2 not-italic text-gray-500 dark:text-neutral-500">
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: orderItem?.address ? orderItem.address.split(",").join(",<br />") : "Address not available"
                                        }}
                                    />
                                </address>
                            </div>

                            <div className="sm:text-end space-y-2">
                                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                    <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">Invoice date:</dt>
                                        <dd className="col-span-2 text-gray-500 dark:text-neutral-500"> {moment(orderItem?.createdAt).format("DD/MMM/yyyy")}</dd>
                                    </dl>
                                    <dl className="grid sm:grid-cols-5 gap-x-3">
                                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">Due date:</dt>
                                        <dd className="col-span-2 text-gray-500 dark:text-neutral-500">03/11/2018</dd>
                                    </dl>
                                </div>

                            </div>

                        </div>

                        <div className="mt-6">
                            <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700">
                                <div className="hidden sm:grid sm:grid-cols-5">
                                    <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Item</div>
                                    <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Qty</div>
                                    <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Rate</div>
                                    <div className="text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Amount</div>
                                </div>

                                <div className="hidden sm:block border-b border-gray-200 dark:border-neutral-700"></div>


                                {orderItem?.orderItemList.map((productItem, idx) => (
                                    <div key={idx}>
                                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                            <div className="col-span-full sm:col-span-2">
                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Item</h5>
                                                <p className="font-medium text-gray-800 dark:text-neutral-200">{productItem.product.name}</p>
                                            </div>
                                            <div>
                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Qty</h5>
                                                <p className="text-gray-800 dark:text-neutral-200">{productItem.quantity} </p>
                                            </div>
                                            <div>
                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Rate</h5>
                                                <p className="text-gray-800 dark:text-neutral-200">
                                                    {productItem.product.sellingPrice ? productItem.product.sellingPrice : productItem.product.mrp }
                                                    <span className="line-through pl-3">
                                                        {productItem.product.sellingPrice ?  productItem.product.mrp: " "  }
                                                    </span>
                                                </p>
                                            </div>
                                            <div>
                                                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Amount</h5>
                                                <p className="sm:text-end text-gray-800 dark:text-neutral-200">Tk {productItem.amount}</p>
                                            </div>
                                        </div>
                                        <div className="sm:hidden border-b border-gray-200 dark:border-neutral-700"></div>
                                    </div>
                                ))}
                          
                        </div>
                    </div>

                    <div className="mt-8 flex sm:justify-end">
                        <div className="w-full max-w-2xl sm:text-end space-y-2">
                            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                <dl className="grid sm:grid-cols-5 gap-x-3">
                                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">Subtotal:</dt>
                                    <dd className="col-span-2 text-gray-500 dark:text-neutral-500">Tk {orderItem?.subTotal}</dd>
                                </dl>

                                <dl className="grid sm:grid-cols-5 gap-x-3">
                                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">Tax:</dt>
                                    <dd className="col-span-2 text-gray-500 dark:text-neutral-500">Tk 00</dd>
                                </dl>

                                <dl className="grid sm:grid-cols-5 gap-x-3">
                                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">Delivery Charge:</dt>
                                    <dd className="col-span-2 text-gray-500 dark:text-neutral-500">Tk 60</dd>
                                </dl>

                                <dl className="grid sm:grid-cols-5 gap-x-3">
                                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">Total:</dt>
                                    <dd className="col-span-2 text-gray-500 dark:text-neutral-500">Tk { orderItem?.totalAmount }</dd>
                                </dl>

                                <dl className="grid sm:grid-cols-5 gap-x-3">
                                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">Amount paid:</dt>
                                    <dd className="col-span-2 text-gray-500 dark:text-neutral-500">Tk { orderItem?.totalAmount }</dd>
                                </dl>

                            </div>

                        </div>
                    </div>


                    <div className="mt-8 sm:mt-12">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">Thank you!</h4>
                        <p className="text-gray-500 dark:text-neutral-500">If you have any questions concerning this invoice, use the following contact information:</p>
                        <div className="mt-2">
                            <p className="block text-sm font-medium text-gray-800 dark:text-neutral-200">example@site.com</p>
                            <p className="block text-sm font-medium text-gray-800 dark:text-neutral-200">+1 (062) 109-9222</p>
                        </div>
                    </div>

                    <p className="mt-5 text-sm text-gray-500 dark:text-neutral-500">© 2022 Preline.</p>
                </div>

                <div className="mt-6 flex justify-end gap-x-3">
                    <Button onClick={() => generatePDF()} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
                        Invoice PDF
                    </Button>
                    <Button onClick={() => window.print()} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 6 2 18 2 18 9" />
                            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                            <rect width="12" height="8" x="6" y="14" />
                        </svg> Print

                    </Button>
                </div>

            </div>
        </div>

        </main >

    )
}

export default Invoice;