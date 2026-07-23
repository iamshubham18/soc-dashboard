import { Bell, Search, UserCircle } from "lucide-react";
import { useAuth } from "../../context/useAuth";

function Navbar() {
  const { user } = useAuth();

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">

      {/* Search Bar */}
      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search alerts, incidents..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        <button className="relative">
          <Bell size={22} />

          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2">
          <UserCircle size={34} className="text-slate-600" />

          <div>
            <p className="font-semibold">{user?.name}</p>
            <p className="text-xs text-slate-500">
              {user?.role}
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;