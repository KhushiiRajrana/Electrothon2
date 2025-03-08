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
    <div className="container">
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;