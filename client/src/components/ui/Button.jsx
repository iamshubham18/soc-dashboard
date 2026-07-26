import clsx from "clsx";

function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-slate-100 hover:bg-slate-200 text-slate-900",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",

    success:
      "bg-green-600 hover:bg-green-700 text-white",
  };

  return (
    <button
      className={clsx(
        "px-5 py-2.5 rounded-xl font-medium transition-all duration-300 shadow-sm hover:shadow-md",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;