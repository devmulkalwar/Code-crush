import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if you want to navigate to other pages

const ForgotPassword = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Forgot Password</h2>
        <p className="text-center">Enter your email address to receive a password reset link.</p>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Send Reset Link</button>
        </form>
        <div className="mt-3 text-center">
          <Link to="/login" className="link-secondary">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
