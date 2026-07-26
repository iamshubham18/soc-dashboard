import { Download, Bell, UserCircle } from "lucide-react";
import Button from "../ui/Button";

function DashboardHeader() {
  const today = new Date();

  const date = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = today.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      {/* Top Row */}
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            SOC Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Monitor alerts, incidents, and system health in real time.
          </p>
        </div>

        <div className="flex items-center gap-4">

          <button className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100">
            <Bell size={20} />
          </button>

          <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2">

            <UserCircle
              size={34}
              className="text-blue-600"
            />

            <div>
              <p className="font-semibold">
                Admin
              </p>

              <p className="text-xs text-slate-500">
                Security Analyst
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Row */}

      <div className="flex items-center justify-between">

        <div>

          <p className="font-medium text-slate-700">
            {date}
          </p>

          <p className="text-sm text-slate-500">
            {time}
          </p>

        </div>

        <Button className="flex items-center gap-2">
          <Download size={18} />
          Export Report
        </Button>

      </div>

    </div>
  );
}

export default DashboardHeader;