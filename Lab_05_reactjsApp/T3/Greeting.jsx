// Greeting.jsx — Component with conditional rendering
// Props: name, timeOfDay, bgColor (Bonus)

function Greeting({ name, timeOfDay, bgColor }) {

  // Conditional rendering based on timeOfDay prop
  let message = "";
  let emoji   = "";

  if (timeOfDay === "morning") {
    message = "Good Morning";
    emoji   = "🌅";
  } else if (timeOfDay === "afternoon") {
    message = "Good Afternoon";
    emoji   = "☀️";
  } else if (timeOfDay === "evening") {
    message = "Good Evening";
    emoji   = "🌆";
  } else if (timeOfDay === "night") {
    message = "Good Night";
    emoji   = "🌙";
  } else {
    message = "Hello";
    emoji   = "👋";
  }

  return (
    // Bonus: bgColor prop sets background color
    <div className="greeting-card" style={{ background: bgColor || "#ffffff" }}>
      <span className="emoji">{emoji}</span>
      <h2>{message}, {name}!</h2>
      <p className="time-label">{timeOfDay}</p>
    </div>
  );
}
