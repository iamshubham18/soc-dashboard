import {
  Bell,
  Search,
  Moon,
  Sun,
  Settings,
} from "lucide-react";

import { useAuth } from "../../context/useAuth";
import { useTheme } from "../../context/useTheme";

function Navbar() {
  const { user } = useAuth();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header
      className="
        sticky top-0 z-20
        flex
        h-20
        items-center
        justify-between
        px-8

        border-b
        border-slate-200
        dark:border-slate-800

        bg-white/80
        dark:bg-slate-900/80

        backdrop-blur-xl

        transition-all
        duration-300
      "
    >
      {/* Search */}
      <div className="relative w-105">
        <Search
          size={18}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
        />

        <input
          type="text"
          placeholder="Search alerts, incidents, reports..."
          className="
            w-full

            rounded-xl

            border
            border-slate-300
            dark:border-slate-700

            bg-white
            dark:bg-slate-800

            py-3
            pl-11
            pr-4

            text-slate-900
            dark:text-white

            placeholder:text-slate-400

            outline-none

            transition-all
            duration-300

            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-500/20
          "
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-xl

            border
            border-slate-200
            dark:border-slate-700

            hover:bg-slate-100
            dark:hover:bg-slate-800

            transition-all
            duration-300
          "
        >
          {darkMode ? (
            <Sun
              size={20}
              className="text-yellow-400"
            />
          ) : (
            <Moon
              size={20}
              className="text-slate-700 dark:text-slate-300"
            />
          )}
        </button>

        {/* Settings */}
        <button
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-xl

            border
            border-slate-200
            dark:border-slate-700

            hover:bg-slate-100
            dark:hover:bg-slate-800

            transition-all
            duration-300

            text-slate-700
            dark:text-white
          "
        >
          <Settings size={20} />
        </button>

        {/* Notifications */}
        <button
          className="
            relative

            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-xl

            border
            border-slate-200
            dark:border-slate-700

            hover:bg-slate-100
            dark:hover:bg-slate-800

            transition-all
            duration-300

            text-slate-700
            dark:text-white
          "
        >
          <Bell size={20} />

          <span
            className="
              absolute
              right-2
              top-2

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

        {/* Divider */}
        <div className="mx-1 h-10 w-px bg-slate-300 dark:bg-slate-700" />

        {/* User */}
        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-full

              bg-linear-to-r
              from-blue-600
              to-indigo-600

              text-white
              font-bold

              shadow-lg
            "
          >
            {user?.name?.charAt(0) || "S"}
          </div>

          <div className="leading-tight">
            <p className="font-semibold text-slate-900 dark:text-white">
              {user?.name || "Shubham"}
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              {user?.role || "Security Analyst"}
            </p>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Navbar;