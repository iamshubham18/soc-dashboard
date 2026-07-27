import clsx from "clsx";
import { TrendingUp, TrendingDown } from "lucide-react";
import Card from "../ui/Card";

function StatCard({
  title,
  value,
  icon,
  color,
  trend = "+0%",
}) {
  const isNegative = trend.startsWith("-");

  return (
    <Card
      className="
        p-6
        hover:-translate-y-1
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      <div className="flex items-start justify-between">
        {/* Left */}
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
            {value}
          </h2>

          <div
            className={clsx(
              "mt-5 flex items-center gap-1 text-sm font-semibold",
              isNegative
                ? "text-red-500"
                : "text-emerald-500"
            )}
          >
            {isNegative ? (
              <TrendingDown size={16} />
            ) : (
              <TrendingUp size={16} />
            )}

            <span>{trend} Today</span>
          </div>
        </div>

        {/* Icon */}
        <div
          className={clsx(
            "flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg text-white",
            color
          )}
        >
          {icon}
        </div>
      </div>
    </Card>
  );
}

export default StatCard;