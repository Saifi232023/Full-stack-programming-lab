// CourseItem.jsx — Reusable component
// Props: courseName, instructor, duration, courseType (Bonus)

function CourseItem({ courseName, instructor, duration, courseType }) {

  // Bonus: different style for Online vs Offline
  const isOnline = courseType === "Online";
  const badgeStyle = {
    background: isOnline ? "#16a34a" : "#b45309",
    color: "white",
    padding: "2px 10px",
    borderRadius: "20px",
    fontSize: "11px",
    fontWeight: "bold",
  };

  return (
    <div className="course-item">
      <div className="course-header">
        <h2 className="course-name">{courseName}</h2>
        {/* Bonus: courseType badge */}
        <span style={badgeStyle}>{courseType}</span>
      </div>
      <p><span className="label">Instructor:</span> {instructor}</p>
      <p><span className="label">Duration:</span> {duration}</p>
    </div>
  );
}
