import clsx from "clsx";
import { TrendingUp } from "lucide-react";
import Card from "../ui/Card";

function StatCard({
  title,
  value,
  icon,
  color,
  trend = "+12%",
}) {
  return (
    <Card className="p-6 hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            {value}
          </h2>

          <div className="flex items-center gap-1 mt-4 text-green-600 text-sm font-semibold">
            <TrendingUp size={16} />
            <span>{trend} Today</span>
          </div>
        </div>

        <div
          className={clsx(
            "h-14 w-14 rounded-2xl flex items-center justify-center shadow-md",
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