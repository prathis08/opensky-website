// ContactForm.jsx
import React, { useState } from "react";
import styles from "./styles.module.scss";
import landingImage from "../../assets/core/landing-image.jpeg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img
          src={landingImage}
          alt="Wedding couple under a floral arch"
          className={styles.image}
        />
      </div>

      <div className={styles.formSection}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              placeholder="Your name"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="E-mail Address"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              placeholder="Phone number"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>

          <div className={styles.submitContainer}>
            <button type="submit" className={styles.submitButton}>
              Submit <span className={styles.arrow}>↗</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
