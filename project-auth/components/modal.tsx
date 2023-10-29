import { useState } from "react";


function Modal({ showModal, setShowModal, title, children, handleConfirm, data, confirmText, cancel, footer }: any) {

    const [close, setClose] = useState(true);
    // console.log("showModal");
    return (
        <>
            {showModal ? (
                <>
                    <div className="justify-center container font-lato items-center z-[3000] card flex overflow-x-hidden  overflow-y-auto fixed inset-0 outline-none focus:outline-none backdrop-blur-[1.5px]"
                        onClick={() => {
                            if (close) {
                                setShowModal(false);
                            }
                        }} >
                        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                            {/*content*/}
                            <div className='relative flex flex-col w-full bg-white card'
                                onMouseOver={() => setClose(false)}
                                onMouseLeave={() => setClose(true)}
                            >
                                {/*header*/}
                                {title ? (
                                    <div className=' bg-white text-center p-5 border-b border-solid border-slate-200 rounded-t'>
                                        <h3 className='text-2xl font-semibold w-full px-auto mx-auto'>
                                            {title}
                                        </h3>
                                    </div>
                                ) : null}

                                {/*body*/}
                                <div className='relative p-6 flex-auto'>{children}</div>
                                {/*footer*/}
                                {footer ? (
                                    <div className='flex items-center justify-end space-x-2 p-6  rounded-b bg-white'>
                                        {cancel === 'hidden' ? null : <button
                                            className='bg-red-500 rounded-md text-white background-transparent font-bold uppercase px-4 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                            type='button'
                                            onClick={() => setShowModal(false)}
                                        >
                                            {cancel ? cancel : 'No'}
                                        </button>}

                                        {confirmText && (
                                            <button
                                                className='bg-brand_bg text-white hover:bg-cyan-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                                type='button'
                                                onClick={() => {
                                                    handleConfirm(data);
                                                    setShowModal(false);
                                                }}
                                            >
                                                {confirmText ? confirmText : 'Yes'}
                                            </button>
                                        )}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                </>
            ) : null}
        </>
    )
}

export default Modal;
