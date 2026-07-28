import {
  LayoutDashboard,
  ShieldAlert,
  FolderKanban,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Alerts",
      path: "/alerts",
      icon: <ShieldAlert size={20} />,
    },
    {
      name: "Incidents",
      path: "/incidents",
      icon: <FolderKanban size={20} />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <BarChart3 size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
      <aside
  className="
    h-screen
    w-72
    bg-white
    dark:bg-slate-950

    border-r
    border-slate-200
    dark:border-slate-800

    text-slate-900
    dark:text-white

    flex
    flex-col
  "
>
      {/* Logo */}
      <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
            <span className="text-2xl text-white">🛡</span>
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide text-slate-900 dark:text-white">
              SecureOps
            </h1>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Security Operations Center
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `
                flex items-center gap-3
                px-4 py-3
                rounded-xl
                font-medium
                transition-all
                duration-300

                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                }
              `
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* User Section */}
      <div className="px-4 py-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
            S
          </div>

          <div>
            <p className="font-semibold text-slate-900 dark:text-white">
              Shubham
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Security Analyst
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="
            w-full
            flex
            items-center
            justify-center
            gap-2

            px-4
            py-3

            rounded-xl

            bg-red-500
            hover:bg-red-600

            text-white

            transition-all
            duration-300
          "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;