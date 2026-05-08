import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [showConfirm, setShowConfirm] =
    useState(false);

  const handleLoginClick = () => {
    const savedUsername =
      localStorage.getItem("savedUsername");

    const savedPassword =
      localStorage.getItem("savedPassword");

    if (!savedUsername || !savedPassword) {
      alert("Please sign up first");
      navigate("/signup");
      return;
    }

    if (
      username !== savedUsername ||
      password !== savedPassword
    ) {
      alert("Invalid username or password");
      return;
    }

    setShowConfirm(true);
  };

  const confirmLogin = () => {
    setShowConfirm(false);

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem(
        "token",
        "logged-in"
      );

      localStorage.setItem(
        "username",
        username
      );

      setLoading(false);

      navigate("/dashboard");
    }, 3000);
  };

  return (
    <div>

      <h1 className="mb-4 text-xl font-semibold">
        Login
      </h1>

      {loading ? (
        <div className="flex flex-col items-center gap-3">

          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>

          <p>Logging in...</p>

        </div>
      ) : (
        <div className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
            className="rounded border px-3 py-2"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            className="rounded border px-3 py-2"
          />

          <button
            onClick={handleLoginClick}
            className="rounded bg-black px-4 py-2 text-white"
          >
            Login
          </button>

          <Link
            to="/signup"
            className="text-center text-blue-600"
          >
            Create an account
          </Link>

        </div>
      )}

      {/* Custom Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">

          <div className="w-[350px] rounded-lg bg-white p-6 shadow-lg">

            <h2 className="mb-4 text-xl font-bold">
              Confirm Login
            </h2>

            <p className="mb-6 text-gray-600">
              Are you sure you want to log in?
            </p>

            <div className="flex justify-end gap-3">

              <button
                onClick={() =>
                  setShowConfirm(false)
                }
                className="rounded bg-gray-300 px-4 py-2"
              >
                Cancel
              </button>

              <button
                onClick={confirmLogin}
                className="rounded bg-black px-4 py-2 text-white"
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