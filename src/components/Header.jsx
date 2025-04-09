import React from "react";
import logo from "../images/logo.png"; 

function Header() {
  // Smooth scroll to the contact form section
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll effect
    }
  };

  return (
    <header className="main-header"> {/* Main header section */}
      <div className="hero-center"> {/* Centered hero content */}
        <h1>יכול להיות שמגיע לך כסף מהמדינה</h1>
        <h2>בדוק זכאות להחזר מס בלחיצת כפתור, בלי התחייבות, בלי עלות</h2>
        <button className="cta-button" onClick={scrollToForm}> {/* Call to action button */}
          בדיקת זכאות עכשיו
        </button>
      </div>
    </header>
  );
}

export default Header; 
