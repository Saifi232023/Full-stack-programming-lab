import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Increment
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement (prevent below 0)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Reset
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <h1>Counter Application</h1>
      <h2>{count}</h2>

      <div style={styles.buttonGroup}>
        <button onClick={increment} style={styles.btn}>Increment</button>
        <button onClick={decrement} style={styles.btn}>Decrement</button>
        <button onClick={reset} style={styles.btn}>Reset</button>
      </div>
    </div>
  );
}

// Simple styling (solid colors)
const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    backgroundColor: "#fe0f07",
    color: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  buttonGroup: {
    marginTop: "20px"
  },
  btn: {
    margin: "5px",
    padding: "10px 15px",
    backgroundColor: "#940b07",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};

export default App;