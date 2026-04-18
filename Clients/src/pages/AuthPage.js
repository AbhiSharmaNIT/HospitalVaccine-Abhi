import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [role, setRole] = useState("user");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // LOGIN FUNCTION
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);

      alert("Login Success");

      // Redirect based on role
      if (res.data.role === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }

    } catch (err) {
      alert("Invalid credentials");
    }
  };

  // SIGNUP FUNCTION
  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
        role
      });

      alert("Signup Successful");
      setIsSignup(false);

    } catch (err) {
      alert("Signup Failed");
    }
  };

  return (
    <div className="auth-container">
      <div className={`auth-card ${isSignup ? "expand" : ""}`}>

        {/* Role Toggle */}
        <div className="toggle">
          <button
            className={role === "user" ? "active" : ""}
            onClick={() => setRole("user")}
          >
            User
          </button>
          <button
            className={role === "admin" ? "active" : ""}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>
        </div>

        <h2>
          {isSignup
            ? `${role === "user" ? "User" : "Admin"} Signup`
            : `${role === "user" ? "User" : "Admin"} Login`}
        </h2>

        {/* Signup only */}
        {isSignup && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        {/* Common fields */}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          className="main-btn"
          onClick={isSignup ? handleSignup : handleLogin}
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>

        {/* Switch */}
        <p className="switch-text">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? " Login" : " Sign Up"}
          </span>
        </p>

      </div>
    </div>
  );
}

export default AuthPage;