import React, { useState } from "react"; 
function FAQ() {
  
  const [openIndex, setOpenIndex] = useState(null); // State to track which question is open

  // Toggle visibility of the selected answer
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Collapse if already open, or open new
  };

  // Array of questions and answers
  const questions = [
    {
      question: "כמה זמן זה לוקח?",
      answer:
        "התהליך הראשוני אורך מספר דקות בלבד. לאחר שליחת הפרטים, נעדכן אותך תוך כמה ימי עסקים לגבי המשך התהליך.",
    },
    {
      question: "כמה זה עולה?",
      answer:
        "בדיקת הזכאות היא חינם וללא התחייבות. תשלום יתבצע רק אם תבחר להמשיך בתהליך ולקבל החזר.",
    },
    {
      question: "מה צריך להכין?",
      answer:
        "מספר תעודת זהות, תלושי שכר, טפסים רלוונטיים (כמו 106), ולעיתים גם פרטים על קופות גמל או תרומות.",
    },
  ];

  return (
    <section className="faq-section"> {/* Section container for the FAQ */}
      <h2>שאלות נפוצות</h2>
      <div className="faq-list"> {/* List of FAQ items */}
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleAnswer(index)} // Toggle current question
            >
              <span className="question-text">{item.question}</span>
              <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <p className="faq-answer">{item.answer}</p> // Show answer only if this is the open one
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ; 
