import { Bell, Search, Moon, Settings } from "lucide-react";
import { useAuth } from "../../context/useAuth";

function Navbar() {
  const { user } = useAuth();

  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between shadow-sm sticky top-0 z-10">

      {/* Left */}
      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search alerts, incidents, reports..."
          className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        <button className="h-11 w-11 rounded-xl border border-slate-200 hover:bg-slate-100 transition flex items-center justify-center">
          <Moon size={20} />
        </button>

        <button className="h-11 w-11 rounded-xl border border-slate-200 hover:bg-slate-100 transition flex items-center justify-center">
          <Settings size={20} />
        </button>

        <button className="relative h-11 w-11 rounded-xl border border-slate-200 hover:bg-slate-100 transition flex items-center justify-center">
          <Bell size={20} />

          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3 ml-2">
          <div className="h-11 w-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            {user?.name?.charAt(0) || "S"}
          </div>

          <div>
            <p className="font-semibold">
              {user?.name || "Shubham"}
            </p>

            <p className="text-xs text-slate-500">
              {user?.role || "Security Analyst"}
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;