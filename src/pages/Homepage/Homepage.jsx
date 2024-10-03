import Connect from "./Connect";
import Faq from "./Faq";
import Feature from "./Feature";
import FooterHome from "./FooterHome";
import Header from "./Header";
import Nav from "./Nav";
import PricingPlan from "./PricingPlan";
import ProductivitySection from "./ProductivitySection";
import Rings from "./Rings";

const Homepage = () => {
  return (
    <div className="bg-[#F8FAFC]  ">
      <Nav />
      <Header />
      <Rings />
      <ProductivitySection />
      <Feature />
      <PricingPlan />
      <Connect />
      <Faq />
      
      <FooterHome />
    </div>
  );
};

export default Homepage;
