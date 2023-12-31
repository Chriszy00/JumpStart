import React, { useState } from "react";
import "../../assets/css/style-register.css";
import axios from "axios";
import { notification} from "antd";
import { Link, useNavigate } from "react-router-dom";
import {QuestionCircleOutlined} from '@ant-design/icons';
const Register = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordLengthValid, setPasswordLengthValid] = useState(false);
  const [passwordUpperCaseValid, setPasswordUpperCaseValid] = useState(false);
  const [passwordLowerCaseValid, setPasswordLowerCaseValid] = useState(false);
  const [passwordNumberValid, setPasswordNumberValid] = useState(false);
  const [passwordSymbolValid, setPasswordSymbolValid] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "firstName") {
      setFirstName(value);
      if (firstNameError) {
        setFirstNameError("");
      }
    } else if (name === "lastName") {
      setLastName(value);
      if (lastNameError) {
        setLastNameError("");
      }
    } else if (name === "address") {
      setAddress(value);
      if (addressError) {
        setAddressError("");
      }
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
      if (phoneNumberError) {
        setPhoneNumberError("");
      }
    } else if (name === "email") {
      setEmail(value);
      if (emailError) {
        setEmailError("");
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nameRegex = /^[A-Za-z\s]+$/; // Only alphabets and space allowed
    const phoneNumberRegex = /^\d{11}$/; // 11 digits required
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

    const newUser = {
      firstName,
      lastName,
      phoneNumber,
      address,
      email,
      password,
    };

    try {
      await axios.post("http://localhost:8080/user/sign-up", newUser);
      // Show success notification
      notification.success({
        message: "Registration Successful",
        description:
          "You have successfully registered. Please log in to continue.",
      });
      console.log("Form submitted successfully");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Email already exists
        notification.error({
          message: "Meals On Wheels APP",
          description: "Email Already exists, Please Enter Another Email",
        });
      } else {
        console.log(error);
      }
    }

    let isFormValid = true;

    if (!nameRegex.test(firstName.trim())) {
      setFirstNameError("Invalid first name");
      isFormValid = false;
    } else {
      setFirstNameError("");
    }

    if (!nameRegex.test(lastName.trim())) {
      setLastNameError("Invalid last name");
      isFormValid = false;
    } else {
      setLastNameError("");
    }

    if (address.trim() === "") {
      setAddressError("Address is required");
      isFormValid = false;
    } else {
      setAddressError("");
    }

    if (!phoneNumberRegex.test(phoneNumber.trim())) {
      setPhoneNumberError("Invalid phone number");
      isFormValid = false;
    } else {
      setPhoneNumberError("");
    }

    if (!emailRegex.test(email.trim())) {
      setEmailError("Invalid email address");
      isFormValid = false;
    } else {
      setEmailError("");
    }

    if (isFormValid) {
      // Form is valid, perform further actions (e.g., submit to server)
      console.log("Form submitted successfully");
    } else {
      // Display error messages or handle invalid form
      console.log("Invalid form");
    }
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    const passwordLengthValid = password.length >= 8;
    const passwordUpperCaseValid = /[A-Z]/.test(password);
    const passwordLowerCaseValid = /[a-z]/.test(password);
    const passwordNumberValid = /[0-9]/.test(password);
    const passwordSymbolValid = /[!@#$%^&*]/.test(password);
    const passwordValid =
      passwordLengthValid &&
      passwordUpperCaseValid &&
      passwordLowerCaseValid &&
      passwordNumberValid &&
      passwordSymbolValid;
    setPassword(password);
    setPasswordValid(passwordValid);
    setPasswordLengthValid(passwordLengthValid);
    setPasswordUpperCaseValid(passwordUpperCaseValid);
    setPasswordLowerCaseValid(passwordLowerCaseValid);
    setPasswordNumberValid(passwordNumberValid);
    setPasswordSymbolValid(passwordSymbolValid);
  };

  let passwordInputClass = "form-control";
  if (password !== "" && !passwordValid) {
    passwordInputClass += " is-invalid";
  }

  return (
    <div className="container-fluid min-vh-100 bg custom-font custom-vh" style={{ backgroundColor: "#fcf3f6" }}>
      <div className="row">
        <div className="col-md-4">
          <div className=" welcome-register">
            <div className="image-holder">
              <img src="/images/merryOnwheels.png" alt="logo" className="" />
            </div>

            <div className="custome-font">
              <h4 className="text-muted ms-5 pt-1 custom-font">Welcome to JUMPSTART</h4>
              <h2 className="ms-5 pt-2 custom-font">Create Your Account</h2>
            </div>
          </div>
        </div>
        <div className="col-md-8 p-0">
          <div className="card rounded-top-left shadow">
            <div className="card-header bg-transparent px-5 pt-5 m-5 border-1">
              <h5 className="text-muted text-end py-2 pb-4 custom-font">
                Already have an account?{" "}
                <Link to="/login" className="TC fw-bold custom-font">
                  Login
                </Link>
              </h5>
            </div>
            <div className="card-body p-0 mx-5">
              <div>
                <h3 className=" ms-5 text-muted custom-font">Your account details</h3>
              </div>

              {/* First Name Field */}
              <div className="form-inner text-dark px-5 mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col">
                      <div className="form-group form-floating mb-3">
                        <input
                          type="text"
                          className={`form-control ${
                            firstNameError ? "is-invalid" : ""
                          }`}
                          id="firstName"
                          name="firstName"
                          value={firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your First Name"
                        />
                        <label htmlFor="firstName">First Name</label>
                        {firstNameError && (
                          <div className="invalid-feedback">
                            {firstNameError}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Last Name Field */}
                    <div className="col">
                      <div className="form-group form-floating mb-3">
                        <input
                          type="text"
                          className={`form-control ${
                            lastNameError ? "is-invalid" : ""
                          }`}
                          id="lastName"
                          name="lastName"
                          value={lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your Last Name"
                        />
                        <label htmlFor="lastName">Last Name</label>
                        {lastNameError && (
                          <div className="invalid-feedback">
                            {lastNameError}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Phone Number Field */}
                  <div className="form-group form-floating mb-3">
                    <input
                      type="text"
                      className={`form-control ${
                        phoneNumberError ? "is-invalid" : ""
                      }`}
                      id="phoneNumber"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your Phone Number"
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
                    {phoneNumberError && (
                      <div className="invalid-feedback">{phoneNumberError}</div>
                    )}
                  </div>

                  {/* Address Field */}
                  <div className="form-group form-floating mb-3">
                    <input
                      type="text"
                      className={`form-control ${
                        addressError ? "is-invalid" : ""
                      }`}
                      id="address"
                      name="address"
                      value={address}
                      onChange={handleInputChange}
                      placeholder="Enter your Address"
                    />
                    <label htmlFor="address">Address</label>
                    {addressError && (
                      <div className="invalid-feedback">{addressError}</div>
                    )}
                  </div>

                  {/* Emaill Address Field*/}
                  <div className="row">
                    <div className="col">
                      <div className="form-group form-floating mb-3">
                        <input
                          type="email"
                          className={`form-control ${
                            emailError ? "is-invalid" : ""
                          }`}
                          id="email"
                          name="email"
                          value={email}
                          onChange={handleInputChange}
                          placeholder="Enter your Email"
                        />
                        <label htmlFor="email">Email Address</label>
                        {emailError && (
                          <div className="invalid-feedback">{emailError}</div>
                        )}
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="col">
                      <div className="form-group form-floating mb-3">
                        <input
                          type="password"
                          className={passwordInputClass}
                          id="floatingPassword"
                          placeholder="Enter your Password"
                          onChange={handlePasswordChange}
                        />
                        <label htmlFor="floatingInput">Password</label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Membership Number Field */}
                  <div className="form-group form-floating mb-3">
                    <input
                      type="text"
                      className={passwordInputClass}
                      id=""
                      placeholder="Enter your Membership Number"
                      onChange={handlePasswordChange}
                    />
                    
                    <label htmlFor="floatingInput">Membership Number (optioal)</label>                            
                  </div>

                  {/* password validation box */}
                  <div className="password-validation-box">
                    <div className="password-validation">
                      <p className="px-3">Your password must have:</p>
                      <ul>
                        <li className={passwordLengthValid ? "check" : "wrong"}>
                          {passwordLengthValid ? "✓" : "✕"} At least 8
                          characters
                        </li>
                        <li
                          className={passwordUpperCaseValid ? "check" : "wrong"}
                        >
                          {passwordUpperCaseValid ? "✓" : "✕"} 1 upper-case
                          letter
                        </li>
                        <li
                          className={passwordLowerCaseValid ? "check" : "wrong"}
                        >
                          {passwordLowerCaseValid ? "✓" : "✕"} 1 lower-case
                          letter
                        </li>
                        <li className={passwordNumberValid ? "check" : "wrong"}>
                          {passwordNumberValid ? "✓" : "✕"} 1 number
                        </li>
                        <li className={passwordSymbolValid ? "check" : "wrong"}>
                          {passwordSymbolValid ? "✓" : "✕"} 1 symbol
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent py-5 mt-5 border-1">
                    <div className="text-center">
                      <span className="fs-6 text-muted custom-font">
                        By continuing, you agree to the Jumpstart{" "}
                        <Link to="/termsandconditions" className="TC fw-bold custom-font">
                          Terms and Conditions
                        </Link>
                      </span>
                      <button
                        className="btn btn-outline btn-custom btn-lg btn-block mt-3 custom-font"
                        type="submit"
                        style={{ width: "100%" }}
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
