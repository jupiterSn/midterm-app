import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold">Signup</h1>

      <div className="flex flex-col gap-4">
        <input
          className="rounded border px-3 py-2"
          type="text"
          placeholder="Full name"
        />

        <input
          className="rounded border px-3 py-2"
          type="email"
          placeholder="Email"
        />

        <input
          className="rounded border px-3 py-2"
          type="password"
          placeholder="Password"
        />

        <button className="rounded bg-black px-4 py-2 text-white">
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