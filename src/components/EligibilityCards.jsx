import React from "react"; 

function EligibilityCards() {
  return (
    <section className="eligibility-section"> 
      <div className="eligibility-grid"> 
        
        {/* Card 1: Employees */}
        <div className="eligibility-card">
          <h3>שכירים</h3>
          <p>
            שכירים ומרוויחים משכורת חודשית של מעל 8,000 ש"ח? ייתכן ואתם זכאים
            להחזר מס.
          </p>
        </div>

        {/* Card 2: Laid off or on unpaid leave */}
        <div className="eligibility-card">
          <h3>מפוטרים / יצאתם לחל"ת</h3>
          <p>
            פוטרתם או הוצאתם לחל"ת, וההכנסות משתנות? ייתכן ואתם זכאים להחזר מס.
          </p>
        </div>

        {/* Card 3: Pension fund withdrawal */}
        <div className="eligibility-card">
          <h3>משכתם קופת גמל / קרן השתלמות</h3>
          <p>
            משכתם קופה גמל או קרן השתלמות לפני המועד ושילמתם מס? גם אתם עשויים
            להיות זכאים להחזר.
          </p>
        </div>

      </div>
    </section>
  );
}

export default EligibilityCards;
