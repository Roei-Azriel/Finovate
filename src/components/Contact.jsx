import React, { useState } from "react"; 

function ContactForm() {
  // Form state to hold user input values
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    year: "",
    consent: false,
  });

  // Handle input changes (text and checkbox)
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox separately
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    alert("!הפרטים התקבלו בהצלחה - נחזור אליך בהקדם"); // Success message
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      year: "",
      consent: false,
    }); // Reset form
  };

  return (
    <section id="contact-form" className="contact-form-section"> 
      <h2>השאירו פרטים לבדיקה</h2>
      <form onSubmit={handleSubmit}> 
        {/* Input: Full name */}
        <input
          type="text"
          name="fullName"
          placeholder="שם מלא"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        {/* Input: Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="טלפון"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        {/* Input: Email */}
        <input
          type="email"
          name="email"
          placeholder="אימייל"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Input: Year */}
        <input
          type="number"
          name="year"
          placeholder="שנה לבדיקה"
          value={formData.year}
          onChange={handleChange}
          required
        />

        {/* Checkbox: Consent */}
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          אני מאשר קבלת מידע ופרסום לפי תנאי השימוש
        </label>

        {/* Submit button */}
        <button type="submit" className="submit-button">
          שלח
        </button>
      </form>
    </section>
  );
}

export default ContactForm; 
