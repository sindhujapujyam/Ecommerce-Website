import React from 'react'
import './SignUp.css'

function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-box">

        <h2>Create Account</h2>

        <form>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit">Sign Up</button>

          <p>
            Already have an account? <a href="/login">Login</a>
          </p>

        </form>

      </div>
    </div>
  )
}

export default SignUp