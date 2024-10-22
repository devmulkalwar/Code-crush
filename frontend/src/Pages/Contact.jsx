import React, { useState } from "react";
import "../Styles/Contact.css";

const Contact = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log(formData); // Log the input values to the console
  };

  // Handle clear button
  const handleClear = () => {
    setFormData({ name: "", email: "", message: "" }); // Reset the form values
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form
        style={{
          maxWidth: "26rem",
          margin: "0 auto",
       
          padding: "1rem",
          borderRadius: "15px", // Add rounded corners
        }}
        onSubmit={handleSubmit} // Add onSubmit handler
      >
        {/* Name input */}
        <div className="form-outline mb-4" data-mdb-input-init>
          <label className="form-label" htmlFor="form4Example1">
            Name
          </label>
          <input
            type="text"
            id="form4Example1"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange} // Handle change
            placeholder=" "
          />
        </div>

        {/* Email input */}
        <div className="form-outline mb-4" data-mdb-input-init>
          <label className="form-label" htmlFor="form4Example2">
            Email address
          </label>
          <input
            type="email"
            id="form4Example2"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange} // Handle change
            placeholder=" "
          />
        </div>

        {/* Message input */}
        <div className="form-outline mb-4" data-mdb-input-init>
          <label className="form-label" htmlFor="form4Example3">
            Message
          </label>
          <textarea
            className="form-control"
            id="form4Example3"
            name="message"
            value={formData.message}
            onChange={handleChange} // Handle change
            rows="4"
            placeholder=" "
          ></textarea>
        </div>

        {/* Submit and Clear buttons */}
        <div className="d-flex  justify-content-evenly text-center buttons mb-3">
          <button
            type="button"
            className="btn btn-danger btn-block " // Add margin-end for spacing
            style={{ padding: "10px 20px", fontSize: "1.1rem" }} // Increase size
            onClick={handleClear} 
          >
            Clear
          </button>

          <button
            data-mdb-ripple-init
            type="submit" 
            className="btn btn-primary btn-block"
            style={{ padding: "10px 20px", fontSize: "1.1rem" }} 
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
