import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

function Login() {
  const { isAuthenticated, login, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({
      name: "Shubham",
      role: "SOC Analyst",
    });

    navigate("/dashboard");
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-900 text-white">
      <h1 className="text-4xl font-bold">
        {isAuthenticated ? "Logged In ✅" : "Not Logged In ❌"}
      </h1>

      {isAuthenticated && (
        <div className="text-center">
          <p>Name: {user.name}</p>
          <p>Role: {user.role}</p>
        </div>
      )}

      {!isAuthenticated ? (
        <button
          onClick={handleLogin}
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      ) : (
        <button
          onClick={handleLogout}
          className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default Login;