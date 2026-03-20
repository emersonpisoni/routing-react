import { Outlet, NavLink } from "react-router-dom";

export default function App() {
  const linkStyle = ({ isActive }) => ({
    marginRight: "15px",
    textDecoration: "none",
    color: isActive ? "blue" : "black",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <div>
      <h1>React Routing Study</h1>
      <nav style={{ marginBottom: "20px" }}>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>
        <NavLink to="/contact" style={linkStyle}>
          Contact
        </NavLink> 
        <NavLink to="/services" style={linkStyle}>
          Services
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}