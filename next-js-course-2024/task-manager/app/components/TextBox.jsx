import clsx from "clsx";

function TextBox({ type, placeholder, label, name, register, error, addClasses }) {
    return (
        <div className="w-full flex flex-col gap-1">
            {label && (
                <label htmlFor={name} className='text-slate-800'>
                    {label}
                </label>
            )}

            <div>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    //ref={ref}
                    {...register}
                    aria-invalid={error ? "true" : "false"}
                    className={clsx(addClasses, "bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300")} />
            </div>
            {error && (
                <span className='text-xs text-[#f64949fe] mt-0.5 '>{error}</span>
            )}
        </div>
    )
}

export default TextBox;
