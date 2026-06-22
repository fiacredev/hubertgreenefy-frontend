import Header from "./components/shared/Header";
import Hero from "./components/shared/ui/Hero";
import About from "./components/shared/About";
import Services from "./components/shared/Services";
import FQAs from "./components/shared/FAQs";
import FacilitiesWeClean from "./components/shared/Places";
import Promotion from "./components/shared/Promotion";
import Contact from "./components/shared/Contact";
import Footer from "./components/shared/Footer";
import GoToPromo from "./components/shared/GoToPromo";


export default function Home() {
  
  return (
    <div className="min-h-screen bg-gray-50 text-foreground">
      <Header />
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <GoToPromo />
          <About />
          <Services />
          <FacilitiesWeClean />
          <Promotion />
          <FQAs />
          <Contact />
          <Footer />
      </div>
      {/* Final CTA Section of air flow*/}
      {/* <Footer />
      <BackToTop /> */}
    </div>
  );
}