import { Outlet, NavLink } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav style={{ marginBottom: "10px" }}>
        <NavLink to="users">Users</NavLink>{" | "}
        <NavLink to="settings">Settings</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}