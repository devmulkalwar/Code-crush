import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import Link for navigation
import { useAuthContext } from '../Contexts/AuthContext';

const ResetPassword = () => {
  const{resetPassword} = useAuthContext();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you would typically handle the password reset logic, such as API call
    if ( !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await resetPassword(token, password);
    } catch (error) {
      console.log(error)
    }
    console.log('Password reset to:', password);
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Reset Password</button>
        </form>
        <div className="mt-3 text-center">
          <Link to="/login" className="link-secondary">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
