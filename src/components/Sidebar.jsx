import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const toggleDark = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="sidebar">
      <h2>ATTEND-EASE</h2>

      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/class">Classes</NavLink>
      <NavLink to="/student">Students</NavLink>
      <NavLink to="/attendance">Attendance</NavLink>
      <NavLink to="/records">Records</NavLink>

      <button className="dark-toggle" onClick={toggleDark} />
    </div>
  );
}
