import clsx from "clsx";

function Card({ children, className = "" }) {
  return (
    <div
      className={clsx(
        `
        rounded-2xl
        border
        border-slate-200
        dark:border-slate-800

        bg-white
        dark:bg-slate-800

        shadow-sm
        hover:shadow-lg

        transition-all
        duration-300
        `,
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;