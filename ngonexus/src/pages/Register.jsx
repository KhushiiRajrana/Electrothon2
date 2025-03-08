import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (email) {
      localStorage.setItem("userEmail", email);
      navigate("/profile");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <p className="subtext">Create an account to continue</p>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="organization@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button onClick={handleRegister}>Register</button>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
