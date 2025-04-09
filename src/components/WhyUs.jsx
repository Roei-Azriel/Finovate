import React from "react"; 

function WhyUs() {
  return (
    <section className="why-us-section"> {/* Section for "Why choose us" */}
      <h2>?למה לבחור בנו</h2>
      
      <div className="benefits-list"> {/* Container for benefit items */}
        
        {/* Benefit 1: Online process */}
        <div className="benefit-item">
          <span role="img" aria-label="online"> 💻 </span>
          <p>תהליך מקוון לחלוטין</p>
        </div>

        {/* Benefit 2: Experience with clients */}
        <div className="benefit-item">
          <span role="img" aria-label="people"> 👥 </span>
          <p>ניסיון עם אלפי לקוחות</p>
        </div>

        {/* Benefit 3: High average refund */}
        <div className="benefit-item">
          <span role="img" aria-label="money"> 💸 </span>
          <p>החזר ממוצע של 11,800 ש"ח</p>
        </div>

        {/* Benefit 4: Professional service */}
        <div className="benefit-item">
          <span role="img" aria-label="accountant"> 📊 </span>
          <p>שירות מקצועי ע"י רואי חשבון</p>
        </div>

      </div>
    </section>
  );
}

export default WhyUs; 
