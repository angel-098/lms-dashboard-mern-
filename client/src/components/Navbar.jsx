import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = {
    color: "#e5e7eb",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
    padding: "8px 14px",
    borderRadius: "6px",
  };

  return (
    <nav
      style={{
        height: "60px",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
      }}
    >
      <h2 style={{ color: "#fff", fontSize: "20px" }}>
        LMS Dashboard
      </h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            ...linkStyle,
            background: isActive ? "rgba(255,255,255,0.2)" : "transparent",
          })}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/courses"
          style={({ isActive }) => ({
            ...linkStyle,
            background: isActive ? "rgba(255,255,255,0.2)" : "transparent",
          })}
        >
          Courses
        </NavLink>

        <NavLink
          to="/lessons"
          style={({ isActive }) => ({
            ...linkStyle,
            background: isActive ? "rgba(255,255,255,0.2)" : "transparent",
          })}
        >
          Lessons
        </NavLink>

        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            ...linkStyle,
            background: isActive ? "rgba(255,255,255,0.2)" : "transparent",
          })}
        >
          Profile
        </NavLink>
      </div>
    </nav>
  );
}
