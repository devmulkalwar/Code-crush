import React from 'react';
import "../Styles/SignUp.css";

const SignUp = () => {
  return (
    <div>
      <div className="main">
    <div className="innerMain">
      <div className="leftSide">
        <h1>The <span>Student</span> Sign Up</h1>
        <p>Please enter your details to sign up and be</p>
        <p>part of our great community.</p>
      </div>
      <div className="rightSide">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Enter Full Name"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <input type="password" placeholder="Confirm Password"/>
          <button type="submit">Submit</button>
          <a href="#">Forgot Password? Reset Now</a>
          <p>or</p>
          <p>Already have an account? <a href="">Sign Up</a></p>

        </form>
      </div>
    </div>
    </div>
    </div>
  )
}

export default SignUp
