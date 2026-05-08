function Profile() {
  const username =
    localStorage.getItem("username") || "User";

  return (
    <div className="max-w-3xl rounded-xl bg-white p-8 shadow">
      <div className="mb-8 flex items-center gap-6">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-900 text-3xl font-bold text-white">
          {username.charAt(0).toUpperCase()}
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            {username}
          </h1>

          <p className="text-gray-500">
            Library Member
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="mb-2 text-lg font-semibold">
            Account Information
          </h2>

          <p>
            <span className="font-medium">
              Username:
            </span>{" "}
            {username}
          </p>

          <p className="mt-2">
            <span className="font-medium">
              Email:
            </span>{" "}
            user@example.com
          </p>

          <p className="mt-2">
            <span className="font-medium">
              Role:
            </span>{" "}
            Member
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="mb-2 text-lg font-semibold">
            Library Activity
          </h2>

          <p>
            <span className="font-medium">
              Borrowed Books:
            </span>{" "}
            3
          </p>

          <p className="mt-2">
            <span className="font-medium">
              Returned Books:
            </span>{" "}
            12
          </p>

          <p className="mt-2">
            <span className="font-medium">
              Membership Status:
            </span>{" "}
            Active
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;