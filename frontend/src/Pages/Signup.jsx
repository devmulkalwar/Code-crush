import React, { useState } from 'react';
import "../Styles/SignUp.css";
import { Link } from 'react-router-dom';
import { useAuthContext } from '../Contexts/AuthContext';

const SignUp = () => {
  // State to hold form data
  const { signup } = useAuthContext();
  const [formData, setFormData] = useState({
    fullName: "", // Updated to match input name
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
    const { fullName, email, password, confirmPassword } = formData; // Access fullName instead of name

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
      await signup(formData); // Call the signup function with formData
      setFormData({ // Reset form data after submission
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "student",
      });
    } catch (error) {
      console.log(error);
      alert("Signup failed, please try again."); // Optional: Provide feedback on error
    }
  };

  return (
    <div className="main">
      <div className="innerMain">
        <div className="leftSide">
          <h1>
            The <span>Student</span> Sign Up
          </h1>
          <p>Please enter your details to sign up and be</p>
          <p>part of our great community.</p>
        </div>
        <div className="rightSide">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName" // Match the input name with the state
              placeholder="Enter Full Name"
              value={formData.fullName} // Updated to use fullName
              onChange={handleChange}
              required // Optional: add required for better validation
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required // Optional: add required for better validation
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required // Optional: add required for better validation
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required // Optional: add required for better validation
            />
            <button type="submit">Submit</button>
            <Link to="/forgot-password">Forgot Password? Reset Now</Link>
            <p>or</p>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
