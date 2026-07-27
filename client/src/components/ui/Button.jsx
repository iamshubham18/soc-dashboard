import clsx from "clsx";

function Button({
  children,
  variant = "primary",
  className = "",
  disabled = false,
  loading = false,
  ...props
}) {
  const variants = {
    primary: `
      bg-blue-600
      hover:bg-blue-700
      text-white
    `,

    secondary: `
      bg-slate-100
      text-slate-900
      hover:bg-slate-200

      dark:bg-slate-800
      dark:text-white
      dark:hover:bg-slate-700
    `,

    success: `
      bg-emerald-600
      hover:bg-emerald-700
      text-white
    `,

    danger: `
      bg-red-600
      hover:bg-red-700
      text-white
    `,

    outline: `
      border
      border-slate-300
      bg-white
      text-slate-900
      hover:bg-slate-100

      dark:border-slate-700
      dark:bg-slate-900
      dark:text-white
      dark:hover:bg-slate-800
    `,
  };

  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        `
        inline-flex
        items-center
        justify-center
        gap-2

        rounded-xl

        px-5
        py-2.5

        font-semibold

        shadow-sm
        hover:shadow-lg

        transition-all
        duration-300

        active:scale-95

        focus:outline-none
        focus:ring-4
        focus:ring-blue-500/20

        disabled:cursor-not-allowed
        disabled:opacity-50
        `,
        variants[variant],
        className
      )}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;