import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="site-footer"> {/* Main footer container */}
      <div className="footer-content"> {/* Content wrapper */}
        
        {/* Contact information section */}
        <div className="footer-section">
          <h4>צור קשר</h4>
          <p>טלפון: 050-1234567</p>
          <p>דוא"ל: info@taxrefund.co.il</p>
        </div>

        {/* Useful links section */}
        <div className="footer-section">
          <h4>קישורים</h4>
          <p>
            <a
              href="https://wa.me/972501234567"
              target="_blank"
              rel="noreferrer" // Prevent security issues with external links
            >
              📱 שלח הודעה בוואטסאפ
            </a>
          </p>
          <p>
            <a href="/privacy">מדיניות פרטיות</a>
          </p>
          <p>
            <a href="/terms">תנאי שימוש</a>
          </p>
        </div>

      </div>

      {/* Bottom section with copyright */}
      <div className="footer-bottom">
        <p>© {currentYear} TaxRefund. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
}

export default Footer; 