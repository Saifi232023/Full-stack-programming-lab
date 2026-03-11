// StudentCard.jsx — Reusable card component
// Props: name, rollNo, department, university, color (bonus)

function StudentCard({ name, rollNo, department, university, color }) {
  return (
    <div className="card" style={{ background: color }}>
      <h2>{name}</h2>
      <p><span className="label">Roll No</span><br/>{rollNo}</p>
      <p><span className="label">Department</span><br/>{department}</p>
      <p><span className="label">University</span><br/>{university}</p>
    </div>
  );
}
