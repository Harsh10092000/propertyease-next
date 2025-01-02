"use client"
import React from 'react'
import { useState, useEffect } from 'react';
const SubscribeUs = () => {
    const [step, setStep] = useState(false);
    const [dupEntry, setDupEntry] = useState("");
    const [popupData, setPopupData] = useState({
        name: "",
        phone: "",
        email: "",
      });
      const handleStep = () => {
        if (
          popupData.name !== "" &&
          popupData.phone.length > 9 &&
          popupData.phone.length < 11 &&
          subEmailError === false
        ) {
          setStep(false);
          
          handleSubmitSub();
        } else {
          setStep(true);
          
        }
      };

      const [subEmailError, setSubEmailError] = useState(true);
      useEffect(() => {
        if (!regEx[0].emailRegex.test(popupData.email)) {
          setSubEmailError(true);
        } else {
          setSubEmailError(false);
        }
      }, [popupData.email]);
  return (
    <div className="footer-inputs">
    <p className="pb-1">Subscribe Us</p>
    <p className="footer-inputs-para">Get the latest news about new properties and price updates.</p>
      <div className="footer-form">
        <input
          type="text"
          name="name"
          id="footer_name_input"
          placeholder="Your name"
          value={popupData.name}
          onChange={(e) => {
            setSubError(false);
            setPopupData({
              ...popupData,
              name: e.target.value.replace(/[^a-zA-Z ]/g, ""),
            });
          }}
        />
        <span className="popup-error-msg">
            {step && popupData.name === "" ? "Required" : ""}
          </span>
        <input
          type="email"
          name="email"
          id="footer_email_input"
          placeholder="Your email"
          value={popupData.email}
          onChange={(e) => {
            setDupEntry("");
            setSubError(false);
            setPopupData({
              ...popupData,
              email: e.target.value.replace(/[^a-zA-Z.@0-9/]/g, ""),
            });
          }}
        />
        <span className="popup-error-msg">
          {step && subEmailError
            ? "Please enter valid email address"
            : dupEntry.length > 1
            ? dupEntry
            : ""}
        </span>
        <input
          type="tel"
          name="Phone"
          id="footer_phone_input"
          placeholder="Your phone no"
          value={popupData.phone}
          onChange={(e) => {
            setSubError(false);
            setPopupData({
              ...popupData,
              phone: e.target.value.replace(
                regEx[2].phoneNumberValidation,
                ""
              ),
            });
          }}
          
        />
        <span className="popup-error-msg">
            {step && popupData.phone.length !== 10
              ? "Phone number must be 10 digits."
              : ""}
          </span>
        <button onClick={handleStep}
          title="Click to Subscribe">
          Subscribe <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}

export default SubscribeUs
