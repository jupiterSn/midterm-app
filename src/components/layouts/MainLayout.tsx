import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <h2>Main Layout</h2>

      <Outlet />
    </div>
  );
}

export default MainLayout;