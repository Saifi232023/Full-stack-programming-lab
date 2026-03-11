// App.jsx — Renders 3 Greeting components with different props

function App() {
  return (
    <div className="app">
      <h1>Dynamic Greeting App</h1>
      <div className="greetings">

        <Greeting
          name="Hasaan"
          timeOfDay="morning"
          bgColor="#fef9c3"
        />

        <Greeting
          name="Hussain"
          timeOfDay="afternoon"
          bgColor="#dbeafe"
        />

        <Greeting
          name="Zara"
          timeOfDay="evening"
          bgColor="#fce7f3"
        />

        <Greeting
          name="Saif"
          timeOfDay="night"
          bgColor="#ede9fe"
        />

      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
