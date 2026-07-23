import clsx from "clsx";

function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-all">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div
          className={clsx(
            "p-3 rounded-xl",
            color
          )}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;