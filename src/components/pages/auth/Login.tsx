import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLoginClick = () => {
    const savedUsername = localStorage.getItem("savedUsername");
    const savedPassword = localStorage.getItem("savedPassword");

    if (!savedUsername || !savedPassword) {
      alert("Please sign up first");
      navigate("/signup");
      return;
    }

    if (username !== savedUsername || password !== savedPassword) {
      alert("Invalid username or password");
      return;
    }

    setShowConfirm(true);
  };

  const confirmLogin = () => {
    setShowConfirm(false);
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("token", "logged-in");
      localStorage.setItem("username", username);

      setLoading(false);
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <div>
      <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">
        Login
      </h1>

      {loading ? (
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900"></div>

          <p className="text-gray-600">Logging in...</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
          />

          <button
            onClick={handleLoginClick}
            className="rounded-lg bg-gray-900 px-4 py-3 font-medium text-white hover:bg-gray-700"
          >
            Login
          </button>

          <Link
            to="/signup"
            className="text-center font-medium text-blue-600 hover:underline"
          >
            Create an account
          </Link>
        </div>
      )}

      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              Confirm Login
            </h2>

            <p className="mb-6 text-gray-600">
              Are you sure you want to log in?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-800 hover:bg-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={confirmLogin}
                className="rounded-lg bg-gray-900 px-4 py-2 font-medium text-white hover:bg-gray-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;