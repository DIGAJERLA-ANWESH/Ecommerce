import React, { useState } from "react";
import "../pages/Contact.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { PhoneNumberUtil } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    setIsValidPhoneNumber(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validPhoneNumber = isPhoneNumberValid(phoneNumber);
    if (validPhoneNumber) {
      console.log("Phone number submitted:", phoneNumber);
      setSubmitted(true);
      setPhoneNumber("");
      e.target.reset();
    } else {
      setIsValidPhoneNumber(false);
    }
  };

  const isPhoneNumberValid = (phone) => {
    try {
      const phoneNumber = phoneUtil.parseAndKeepRawInput(phone);
      return phoneUtil.isValidNumber(phoneNumber);
    } catch (error) {
      return false;
    }
  };

  return (
    <div className="contact">
      <div className="contact-form">
        {submitted ? (
          <div className="thank-you-container">
            <div className="thank-you-card">
              <h3>Thank you for submitting!</h3>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3>Additional Details</h3>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="dateofbirth">Date of Birth:</label>
            <input type="date"></input>
            <label htmlFor="mobile number">Mobile Number</label>
            <PhoneInput
              className="phone"
              style={{
                margin: "0",
                marginBottom: "1rem",
              }}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              containerStyle={{ width: "100%" }}
            />
            {!isValidPhoneNumber && (
              <div className="error-message">
                Please enter a valid phone number.
              </div>
            )}
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" required />
            <label htmlFor="pincode">Pin Code</label>
            <input type="number" id="pincode" name="pincode" required />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
