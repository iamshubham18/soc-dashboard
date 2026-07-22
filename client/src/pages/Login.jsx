import { useAuth } from "../context/useAuth";

function Login() {
  const { isAuthenticated, login, logout, user } = useAuth();

  const handleLogin = () => {
    login({
      name: "Shubham",
      role: "SOC Analyst",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white gap-6">
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
          className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700"
        >
          Login
        </button>
      ) : (
        <button
          onClick={logout}
          className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700"
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default Login;