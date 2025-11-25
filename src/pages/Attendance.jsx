import { useState } from "react";
import Topbar from "../components/Topbar";

export default function Attendance() {
  const subjectData = {
    math: { day: "Monday", from: "08:00", to: "09:30", desc: "Basic Algebra & Geometry" },
    science: { day: "Wednesday", from: "10:00", to: "11:30", desc: "Biology & Earth Science" },
    english: { day: "Friday", from: "13:00", to: "14:30", desc: "Grammar, Reading & Writing" }
  };

  const [subject, setSubject] = useState("");
  const [screenshot, setScreenshot] = useState(null);

  const handleImageUpload = (e) => {
    setScreenshot(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <Topbar title="Attendance" />

      <div className="attendance-card">
        <div className="attendance-row">

          {/* SUBJECT */}
          <div className="attendance-field">
            <label>Select Subject</label>
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option value="">-- Choose Subject --</option>
              <option value="math">Mathematics</option>
              <option value="science">Science</option>
              <option value="english">English</option>
            </select>
          </div>

          {/* DESCRIPTION */}
          <div className="attendance-field">
            <label>Description</label>
            <input type="text" value={subjectData[subject]?.desc || ""} readOnly />
          </div>

          {/* DAY */}
          <div className="attendance-field">
            <label>Day</label>
            <input type="text" value={subjectData[subject]?.day || ""} readOnly />
          </div>

          {/* TIME */}
          <div className="attendance-field">
            <label>Time From</label>
            <input type="time" value={subjectData[subject]?.from || ""} readOnly />
          </div>

          <div className="attendance-field">
            <label>Time To</label>
            <input type="time" value={subjectData[subject]?.to || ""} readOnly />
          </div>

          {/* IMAGE UPLOAD */}
          <div className="attendance-field">
            <label>Upload Screenshot</label>
            <input type="file" onChange={handleImageUpload} accept="image/*" />

            {screenshot && (
              <img
                src={screenshot}
                alt="Preview"
                style={{
                  marginTop: "10px",
                  maxWidth: "150px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            )}
          </div>
        </div>

        <button className="attendance-btn">Take Attendance</button>
      </div>
    </>
  );
}
