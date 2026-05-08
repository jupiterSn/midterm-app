import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    localStorage.setItem("savedUsername", username);
    localStorage.setItem("savedPassword", password);

    alert("Account created successfully. Please log in.");

    navigate("/login");
  };

  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold">Signup</h1>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Create username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="rounded border px-3 py-2"
        />

        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="rounded border px-3 py-2"
        />

        <button
          onClick={handleSignup}
          className="rounded bg-black px-4 py-2 text-white"
        >
          Signup
        </button>

        <Link to="/login" className="text-center text-blue-600">
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;