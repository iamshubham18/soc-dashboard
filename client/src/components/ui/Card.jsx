import clsx from "clsx";

function Card({ children, className = "" }) {
  return (
    <div
      className={clsx(
        `
        bg-white
        rounded-2xl
        border
        border-slate-200
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