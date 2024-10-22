import React, { useState } from "react";
import "../Styles/LogIn.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Contexts/AuthContext";

const Login = () => {
  const { login } = useAuthContext();
  
  // State to hold form data
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }
    console.log("Logging in with", email, password);
    try {
      await login(formData);  // Assuming login is an async function
    } catch (error) {
      console.error("Login failed:", error);
    }
    
    setFormData({ email: "", password: "" });
  };

  return (
    <div>
      <div className="main">
        <div className="innerMain">
          <div className="leftSide">
            <h1>
              The <span>Student</span> Log In
            </h1>
            <p>Welcome Back,</p>
            <p>Please enter your correct Log In Credentials.</p>
          </div>
          <div className="rightSide">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
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
              <button type="submit">Submit</button>
              <Link to="/forgot-password">Forgot Password? Reset Now</Link>
              <p>or</p>
              <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
