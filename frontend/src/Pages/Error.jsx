import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaRegSadCry } from "react-icons/fa"; // Import an icon from react-icons

const Error = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="text-center p-5 bg-white rounded shadow" style={{ maxWidth: "500px", width: "90%" }}>
        <FaRegSadCry size={50} className="mb-4 text-primary" />
        <h1 className="display-1">404</h1>
        <h2 className="mb-4">Oops! Page Not Found</h2>
        <p className="lead">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary btn-lg mt-4">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
