import "../styles/login.css";

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>

      <form>
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
