import React from 'react'

const LogIn = () => {
  return (
    <div>
      <div>
      <div className="main">
    <div className="innerMain">
      <div className="leftSide">
        <h1>The <span>Student</span> Log In</h1>
        <p>Welcome Back,</p>
        <p>Please enter your correct Log In Credentials.</p>
      </div>
      <div className="rightSide">
        <h2>Log In</h2>
        <form>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button type="submit">Submit</button>
          <a href="#">Forgot Password? Reset Now</a>
          <p>or</p>
          <p>Already have an account? <a href="./login.html">Sign In</a></p>

        </form>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default LogIn
