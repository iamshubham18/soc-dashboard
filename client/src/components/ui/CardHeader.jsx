import clsx from "clsx";

function CardHeader({
  icon,
  title,
  subtitle,
  action,
  className = "",
}) {
  return (
    <div
      className={clsx(
        "flex items-start justify-between mb-6",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div
            className="
              h-11
              w-11
              rounded-xl

              bg-blue-100
              dark:bg-blue-900/30

              text-blue-600
              dark:text-blue-400

              flex
              items-center
              justify-center
            "
          >
            {icon}
          </div>
        )}

        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            {title}
          </h2>

          {subtitle && (
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {action}
    </div>
  );
}

export default CardHeader;