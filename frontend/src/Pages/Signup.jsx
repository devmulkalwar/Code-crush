import React, { useState } from 'react';
import "../Styles/SignUp.css";
import { Link } from 'react-router-dom';
import { useAuthContext } from '../Contexts/AuthContext';

const Signup = () => {
  const { signup } = useAuthContext(); // Access signup function from context

  // State to hold form data
  const [formData, setFormData] = useState({
    fullName: "", 
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const { fullName, email, password, confirmPassword } = formData; 

    // Basic validation
    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await signup(formData); // Call signup function from context with formData
      // Reset form data after successful submission
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "student",
      });
    } catch (error) {
      console.error(error);
      alert("Signup failed, please try again.");
    }
  };

  return (
    <div className="main">
      <div className="innerMain">
        <div className="leftSide">
          <h1>The <span>Student</span> Sign Up</h1>
          <p>Please enter your details to sign up and be</p>
          <p>part of our great community.</p>
        </div>
        <div className="rightSide">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
          <Link to="/forgot-password">Forgot Password? Reset Now</Link>
          <p>or</p>
          <p>Already have an account? <Link to="/login">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
