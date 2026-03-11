// App.jsx — Root component
// Maps over courses array and renders a CourseItem for each

function App() {
  return (
    <div className="app">
      <h1>Course List</h1>
      <div className="course-list">
        {courses.map(course => (
          <CourseItem
            key={course.id}
            courseName={course.courseName}
            instructor={course.instructor}
            duration={course.duration}
            courseType={course.courseType}
          />
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
