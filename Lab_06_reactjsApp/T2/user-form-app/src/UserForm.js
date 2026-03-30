import React, { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData(formData);

    // Clear fields
    setFormData({
      name: "",
      email: ""
    });
  };

  return (
    <div style={styles.container}>
      <h1>User Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <br />

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={styles.result}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

// Simple solid color styling
const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#151ca1",
    color: "white",
    padding: "30px",
    width: "300px",
    margin: "100px auto",
    borderRadius: "10px"
  },
  input: {
    margin: "10px",
    padding: "8px",
    width: "80%"
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#1f64e4",
    color: "white",
    border: "none",
    cursor: "pointer"
  },
  result: {
    marginTop: "20px",
    backgroundColor: "#111615",
    padding: "10px"
  }
};

export default UserForm;