import Coverage from "../components/Coverage";
import Faqs from "../components/Faqs";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Stats from "../components/Stats";
import HowItWorks from "./HowItWorks";


const Home = () => {
   return (
      <div>
         <HeroSection />
         <Stats />
         <Services />
         <Coverage />
         <HowItWorks />
         <Faqs />
      </div>
   )
}

export default Home