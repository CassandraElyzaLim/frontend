import Topbar from "../components/Topbar";

export default function Dashboard() {
  return (
    <>
      <Topbar title="A Web-Based Class Attendance Tracking System for BSIT - 3B" />

      <div className="dashboard-row">
        <div className="dash-card preview-card">
          <img src="/your-image.jpg" className="preview-img" alt="Screenshot" />
        </div>

        <div className="dash-card">
          <h2>3</h2>
          <p>Students</p>
        </div>

        <div className="dash-card">
          <h2>2</h2>
          <p>Present Today</p>
        </div>
      </div>
    </>
  );
}
