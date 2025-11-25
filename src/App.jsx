import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Classes from "./pages/Classes";
import Students from "./pages/Students";
import Attendance from "./pages/Attendance";
import Records from "./pages/Records";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />

        <div className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/class" element={<Classes />} />
            <Route path="/student" element={<Students />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/records" element={<Records />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
