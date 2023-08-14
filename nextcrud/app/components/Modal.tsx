
const Modal = () => {
    return (
        <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                {/* <h3 className="font-bold text-lg">Add Todo</h3>
                <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
                <h3 className="font-bold text-lg">Add New Todo</h3>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">What is the task?</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Time period:</span>
                    </label>
                    <input type="text" placeholder="Time:" className="input input-bordered w-full max-w-xs mb-4" />
                    <button type="submit" className="btn btn-success">Save</button>
                </div>
            </form>
        </dialog>
    )
}

export default Modal;
