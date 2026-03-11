// App.jsx — Root component, renders 3 StudentCards

function App() {
  return (
    <div>
      <h1>Student Information Cards</h1>
      <div className="cards">
        {students.map(s => (
          <StudentCard
            key={s.rollNo}
            name={s.name}
            rollNo={s.rollNo}
            department={s.department}
            university={s.university}
            color={s.color}
          />
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
