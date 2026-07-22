import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">SOC Dashboard</h1>

      <nav className="flex flex-col gap-3">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/alerts">Alerts</NavLink>
        <NavLink to="/incidents">Incidents</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;