import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

const Contact = () => {
  const [inputValue, setInputValue] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    // rollno :"",
    message: "",
    });

  const [shakeField, setShakeField] = useState("");
  const [mobileError, setMobileError] = useState(false); // New state for mobile validation

  const getValue = (e) => {
    const { name, value } = e.target;

    // Ensure only numbers for the mobile field
    const updatedValue = name === "mobile" ? value.replace(/\D/g, "") : value;
    setInputValue({ ...inputValue, [name]: updatedValue });

    // Remove error if valid while typing
    if (name === "mobile" && /^\d{10}$/.test(updatedValue)) {
      setMobileError(false);
    }
  };

  const validateMobileOnBlur = () => {
    if (!/^\d{10}$/.test(inputValue.mobile.trim())) {
      setMobileError(true);
      toast.error("Mobile number must be exactly 10 digits!");
    } else {
      setMobileError(false);
    }
  };

  const validateForm = () => {
    const { fname, lname, email, mobile } = inputValue;

    if (fname.trim() === "") return triggerShake("fname");
    if (lname.trim() === "") return triggerShake("lname");
    if (email.trim() === "" || !email.includes("@")) return triggerShake("email");
    // if (rollno.trim()==="") return triggerShake("rollno");

    if (!/^\d{10}$/.test(mobile.trim())) {
      triggerShake("mobile");
      setMobileError(true);
      return false;
    }

    return true;
  };

  const sentUserData = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputValue),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Your response has been submitted!");
        setInputValue({ fname: "", lname: "", email: "", mobile: "", message: "" });
      } else {
        toast.error(data.error || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
    }
  };

  const triggerShake = (field) => {
    setShakeField(field);
    setTimeout(() => setShakeField(""), 500);
  };

  return (
    <div className="contact-container">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="contact-form-container">
        <Form className="contact-form" onSubmit={sentUserData}>
          {["fname", "lname", "email"].map((field, index) => (
            <Form.Group key={index} className="mb-3 col-lg-6 position-relative">
              <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
              <Form.Control
                type={field === "email" ? "email" : "text"}
                name={field}
                value={inputValue[field]}
                onChange={getValue}
                className={shakeField === field ? "shake" : ""}
                required
              />
              {shakeField === field && <div className="error-tooltip">{`${field} is required`}</div>}
            </Form.Group>
          ))}

          {/* Mobile Field with onBlur Validation */}
          <Form.Group className="mb-3 col-lg-6 position-relative">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              name="mobile"
              value={inputValue.mobile}
              onChange={getValue}
              onBlur={validateMobileOnBlur} // Validate on blur (when user moves away)
              className={mobileError ? "error-border" : ""} // Add red border if invalid
              required
            />
            {mobileError && <div className="error-tooltip">Mobile number must be 10 digits</div>}
          </Form.Group>
{/* 
          <Form.Group className="mb-3 col-lg-6 position-relative">
          <Form.Label>Roll No</Form.Label>
          {/* <Form.Control
            type="text"
            name="rollno"
            value={inputValue.rollno}
            onChange={getValue}
            className={shakeField === "rollno" ? "shake" : ""}
            required
          />
          {shakeField === "rollno" && <div className="error-tooltip">Roll No is required</div>}
        </Form.Group> */} 

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={inputValue.message}
              onChange={getValue}
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit" className="submit-button">
              Submit
            </Button>
          </div>
        </Form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
