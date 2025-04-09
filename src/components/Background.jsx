import React from "react";
import backgroundImage from "../images/image1.png"; // Import background image

function Background() {
  return (
    <section className="background-wrapper"> {/* Outer container for background styling */}
      <div className="background-info"> {/* Content box with image and text */}
        <img 
          className="background-image" 
          src={backgroundImage} 
          alt="החזר מס"
        />
        <p>
          החזר מס הוא כסף שהמדינה מחזירה למי ששילם יותר מדי מס, לרוב בגלל טעויות
          בחישוב, שינויי עבודה או זכויות שלא נוצלו
        </p>
        <p>
          רוב השכירים זכאים להחזרי מס - והם אפילו לא מודעים לזה. מדובר בתהליך
          פשוט ודיגיטלי שיכול להחזיר אליך אלפי שקלים מהמדינה
        </p>
      </div>
    </section>
  );
}

export default Background; 
