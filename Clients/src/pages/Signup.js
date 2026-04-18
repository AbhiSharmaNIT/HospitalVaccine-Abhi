import { useState } from "react";
import "./Signup.css";

function Signup() {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", form);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <h2>Sign up</h2>
        <p>
          Create an account or <span className="link">Sign in</span>
        </p>

        <form onSubmit={handleSubmit}>
          <label>Email address</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
          />

          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
          />

          <div className="checkbox">
            <input
              type="checkbox"
              name="agree"
              onChange={handleChange}
            />
            <span>
              I do not want to receive emails with advertising, news,
              suggestions or marketing promotions
            </span>
          </div>

          <button type="submit">Sign up</button>
        </form>

        <small>
          By signing up you agree to terms and privacy policy
        </small>

      </div>
    </div>
  );
}

export default Signup;