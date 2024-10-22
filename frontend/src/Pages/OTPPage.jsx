import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuthContext } from "../Contexts/AuthContext";

const OTPPage = () => {
  const { verifyEmail } = useAuthContext();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [resendTimer, setResendTimer] = useState(30);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  useEffect(() => {
    if (resendTimer > 0) {
      const timerId = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [resendTimer]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (!newOtp[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      } else {
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  const handlePaste = (e) => {
    const {} = useAuthContext();
    const pastedData = e.clipboardData.getData("text").split("");
    if (
      pastedData.length === 6 &&
      pastedData.every((char) => /^[0-9]$/.test(char))
    ) {
      setOtp(pastedData);
      pastedData.forEach((digit, index) => {
        inputRefs.current[index].value = digit;
      });
      inputRefs.current[5].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.some((digit) => digit === "")) {
      alert("Please enter all 6 digits of the OTP.");
      return;
    }
    const otpValue = otp.join("");
    console.log("Submitting OTP:", otpValue);

    try {
      await verifyEmail(otpValue);
      handleReset();
    } catch (error) {
      console.log(error);
      handleReset();
    }
    setOtp(new Array(6).fill(""));
    inputRefs.current[0].focus();
  };

  const handleReset = () => {
    setOtp(new Array(6).fill(""));
    inputRefs.current[0].focus();
  };

  const handleResendOTP = () => {
    setResendTimer(30);
    console.log("Resending OTP...");
    handleReset();
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center ">
      <div
        className="card shadow p-4 w-100"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <h2 className="mb-4 text-center">Enter OTP</h2>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column align-items-center justify-content-center w-100"
        >
          <div className="d-flex justify-content-around mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
                onPaste={handlePaste}
                ref={(el) => (inputRefs.current[index] = el)}
                className="form-control text-center"
                style={{
                  width: "40px",
                  height: "40px",
                  fontSize: "20px",
                  borderRadius: "8px",
                  margin: "0 5px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              />
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary mx-2"
              style={{ width: "120px" }}
            >
              Submit
            </button>
          </div>
        </form>

        <div className="mt-3 text-center">
          <button
            type="button"
            className="btn btn-link"
            onClick={handleResendOTP}
            disabled={resendTimer > 0}
          >
            Resend OTP {resendTimer > 0 && `(${resendTimer}s)`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
