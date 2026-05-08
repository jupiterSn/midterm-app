import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("token", "logged-in");
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold">Login</h1>

      {loading ? (
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
          <p>Logging in...</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <button
            onClick={handleLogin}
            className="rounded bg-black px-4 py-2 text-white"
          >
            Login
          </button>

          <Link to="/signup" className="text-center text-blue-600">
            Create an account
          </Link>
        </div>
      )}
    </div>
  );
}

export default Login;