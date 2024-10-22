import React, { useState, useRef } from "react";
import "../Styles/Contact.css";
import emailjs from "emailjs-com"; // Import emailjs for sending emails
import { toast } from "react-toastify"; // Assuming you're using react-toastify for notifications
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast notifications

const Contact = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Loading state
  const form = useRef(null); // Ref to form element

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle toast messages
  const handleToast = (message, type) => {
    toast[type](message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    emailjs.init(import.meta.env.VITE_EMAIL_PRIVATE_KEY); // Use emailjs public key

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID, // Service ID
        import.meta.env.VITE_EMAIL_TEMPLATE_ID, // Template ID
        form.current, // Form reference
        import.meta.env.VITE_EMAIL_PUBLIC_KEY // Corrected to use public key
      )
      .then(
        () => {
          const successMessage = "Your message has been sent successfully.";
          handleToast(successMessage, "success");
          setIsLoading(false); // Reset loading state
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          const errorMessage = error?.text || "Error sending message";
          handleToast(errorMessage, "error");
          setIsLoading(false); // Reset loading state
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        }
      );
  };

  // Handle clear button
  const handleClear = () => {
    setFormData({ name: "", email: "", message: "" }); // Reset the form values
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form
        ref={form} // Assign form reference
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
            required
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
            required
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
            required
          ></textarea>
        </div>

        {/* Submit and Clear buttons */}
        <div className="d-flex justify-content-evenly text-center buttons mb-3">
          <button
            type="button"
            className="btn btn-danger btn-block" // Add margin-end for spacing
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
            {isLoading ? "Sending..." : "Send"} {/* Loading indicator */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
