import { useAuth } from "../../context/useAuth";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold">SOC Dashboard</h2>

      <div className="flex items-center gap-4">
        <span>{user?.name}</span>

        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;