"use client"

import { useState } from "react"
import "../styles/Register.css"

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "volunteer",
    agreeTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add form submission logic here
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h1>Create an Account</h1>
          <p>Join our community of NGOs and volunteers</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
            />
          </div>

          <div className="form-group">
            <label>I am registering as:</label>
            <div className="radio-group">
              <div className="radio-option">
                <input
                  type="radio"
                  id="volunteer"
                  name="userType"
                  value="volunteer"
                  checked={formData.userType === "volunteer"}
                  onChange={handleChange}
                />
                <label htmlFor="volunteer">Volunteer</label>
              </div>
              <div className="radio-option">
                <input
                  type="radio"
                  id="organization"
                  name="userType"
                  value="organization"
                  checked={formData.userType === "organization"}
                  onChange={handleChange}
                />
                <label htmlFor="organization">Organization</label>
              </div>
            </div>
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="agreeTerms">
              I agree to the{" "}
              <a href="#" className="terms-link">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="terms-link">
                Privacy Policy
              </a>
            </label>
          </div>

          <button type="submit" className="register-button">
            Create Account
          </button>
        </form>

        <div className="register-footer">
          <p>
            Already have an account?{" "}
            <a href="#" className="login-link">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register

