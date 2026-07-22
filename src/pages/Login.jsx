import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Create Account</h2>
        <p>Join ClassicShop and start shopping today.</p>

        <form>

          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
            />
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="login-btn">
            Create Account
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;