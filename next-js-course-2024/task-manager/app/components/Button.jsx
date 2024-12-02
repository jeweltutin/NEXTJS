import clsx from 'clsx';

function Button({ icon, addClasses, label, type, onClick }) {
    return (
      <button
        type={type || "button"}
        className={clsx("px-3 py-2 outline-none", addClasses)}
        onClick={onClick} // Enable click handling
      >
        <span>{label}</span>
        {icon && icon}
      </button>
    );
  }

export default Button;
