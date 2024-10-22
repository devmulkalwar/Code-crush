import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ForgotPassword.css';
import { useAuthContext } from '../Contexts/AuthContext';

const ForgotPassword = () => {
  const { forgotPassword } = useAuthContext();  // Access forgotPassword function from context
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Reset link sent to:', email);
    
    try {
      await forgotPassword(email);  
    } catch (error) {
      console.log(error);
    }
    
    setEmail('');  
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ maxWidth: "550px", width: "100%" }}>
        <h2 className=" mb-4">Forgot Password</h2>
        <p className="">Enter your email address to receive a password reset link.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Send Reset Link</button>
        </form>
        <div className="mt-3">
          <Link to="/login" className="link-secondary">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
