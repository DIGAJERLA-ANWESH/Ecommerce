import React, { useState, useEffect } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { PhoneNumberUtil } from "google-libphonenumber";
import "./login.css";

const phoneUtil = PhoneNumberUtil.getInstance();

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [step, setStep] = useState(1);
  const [timer, setTimer] = useState(60);
  const [intervalId, setIntervalId] = useState(null);
  const [resendEnabled, setResendEnabled] = useState(false);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    setIsValidPhoneNumber(true);
  };

  const handleCountryCodeChange = (value) => {
    setCountryCode(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validPhoneNumber = isPhoneNumberValid(phoneNumber, countryCode);
    if (validPhoneNumber) {
      console.log("Phone number submitted:", countryCode + phoneNumber);
      setStep(2);
      startTimer();
    } else {
      setIsValidPhoneNumber(false);
    }
  };

  const handleResendClick = () => {
    setTimer(60);
    setResendEnabled(false);
    startTimer();
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    console.log("OTP submitted");
    clearInterval(intervalId);
    setTimer(60);
    e.target.reset();
  };

  const startTimer = () => {
    const id = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(id);
          setResendEnabled(true);
        }
        return prevTimer - 1;
      });
    }, 1000);

    setIntervalId(id);
  };

  useEffect(() => {
    if (timer === 0) {
      clearInterval(intervalId);
      setResendEnabled(true);
    }
  }, [timer, intervalId]);

  const isPhoneNumberValid = (phone, countryCode) => {
    try {
      const phoneNumber = phoneUtil.parseAndKeepRawInput(phone, countryCode);
      return phoneUtil.isValidNumber(phoneNumber);
    } catch (error) {
      return false;
    }
  };

  return (
    <div className="login-container">
      {step === 1 && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h2
              className="login"
              style={{
                textAlign: "center",
              }}
            >
              Login
            </h2>
            <label htmlFor="countryCode">Mobile Number</label>
            <PhoneInput
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              containerStyle={{ width: "100%" }}
            />
            {!isValidPhoneNumber && (
              <div
                className="error-message"
                style={{
                  color: "red",
                  fontSize: "15px",
                }}
              >
                Please enter a valid phone number.
              </div>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {step === 2 && (
        <div>
          <form onSubmit={handleOTPSubmit}>
            <div className="form-group">
              <h2
                style={{
                  textAlign: "center",
                }}
              >
                Enter OTP
              </h2>
              <label htmlFor="otpInput">OTP:</label>
              <input
                type="text"
                id="otpInput"
                placeholder="Enter OTP"
                required
              />
            </div>
            {timer === 0 && (
              <p>
                Resend OTP:{" "}
                <a
                  href="#"
                  onClick={handleResendClick}
                  disabled={!resendEnabled}
                  style={{
                    pointerEvents: resendEnabled ? "auto" : "none",
                    color: resendEnabled ? "inherit" : "#ccc",
                  }}
                >
                  Resend
                </a>
              </p>
            )}
            {timer > 0 && <p>Resend OTP after {timer} seconds</p>}
            <button type="submit">Verify OTP</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
