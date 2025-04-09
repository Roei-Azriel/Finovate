import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";
import EligibilityCards from "./EligibilityCards";
import WhyUs from "./WhyUs";
import Contact from "./Contact";
import FAQ from "./FAQ";

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Background />
      <EligibilityCards />
      <WhyUs />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
