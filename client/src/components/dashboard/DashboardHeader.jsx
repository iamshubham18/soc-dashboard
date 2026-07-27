import {
  Download,
  Bell,
  UserCircle,
  Activity,
} from "lucide-react";

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
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        dark:border-slate-800

        bg-white
        dark:bg-slate-900

        shadow-sm

        p-8

        transition-all
        duration-300
      "
    >
      {/* Top */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div>
          <div className="flex items-center gap-3">

            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              SOC Dashboard
            </h1>

            <div
              className="
                flex items-center
                gap-2

                rounded-full

                bg-green-100
                dark:bg-green-900/30

                px-3
                py-1
              "
            >
              <Activity
                size={14}
                className="text-green-600"
              />

              <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                LIVE
              </span>
            </div>

          </div>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Monitor alerts, incidents and infrastructure health in real time.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          <button
            className="
              relative

              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-xl

              border
              border-slate-200
              dark:border-slate-700

              hover:bg-slate-100
              dark:hover:bg-slate-800

              transition
            "
          >
            <Bell className="text-slate-700 dark:text-white" />

            <span
              className="
                absolute
                top-2
                right-2

                h-2.5
                w-2.5

                rounded-full

                bg-red-500

                ring-2
                ring-white
                dark:ring-slate-900
              "
            />
          </button>

          <div
            className="
              flex
              items-center
              gap-3

              rounded-2xl

              border
              border-slate-200
              dark:border-slate-700

              px-4
              py-3
            "
          >
            <UserCircle
              size={38}
              className="text-blue-600"
            />

            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                Admin
              </p>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Security Analyst
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-slate-200 dark:border-slate-800"></div>

      {/* Bottom */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <p className="font-semibold text-slate-900 dark:text-white">
            {date}
          </p>

          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Current Time • {time}
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