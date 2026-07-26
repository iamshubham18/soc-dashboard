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
  return (
    <Card className="p-6 hover:-translate-y-1">
      <div className="flex items-start justify-between">
        {/* Left Section */}
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            {value}
          </h2>

          <div
            className={clsx(
              "mt-4 flex items-center gap-1 text-sm font-semibold",
              trend.startsWith("-")
                ? "text-red-600"
                : "text-green-600"
            )}
          >
            {trend.startsWith("-") ? (
              <TrendingDown size={16} />
            ) : (
              <TrendingUp size={16} />
            )}

            <span>{trend} Today</span>
          </div>
        </div>

        {/* Right Section */}
        <div
          className={clsx(
            "flex h-14 w-14 items-center justify-center rounded-2xl shadow-md",
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