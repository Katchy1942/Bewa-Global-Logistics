import ceoImage from "../assets/ceo.png";
import bgImage from "../assets/blurred-pop-abstract-background-pink.jpg";
import containerImage from "../assets/container.png";
import { motion } from "framer-motion";
import { services } from "../components/Services";
import { HugeiconsIcon } from "@hugeicons/react";
import Coverage from "../components/Coverage";
import Life from "../components/Life";
import Stats from "../components/Stats";

const About = () => {
   return (
      <div className="flex flex-col w-full min-h-screen pb-16">
         <div
            className="relative w-full min-h-screen pt-24 pb-16 flex flex-col items-center justify-center px-4 bg-cover bg-center bg-fixed bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
         >
            <h1 className="absolute bottom-16 left-6 md:bottom-24 md:left-12 lg:left-20 text-3xl max-w-sm md:max-w-md font-suisse-intl text-left tracking-tighter font-semibold z-10">
               Cargo Shipping is complex, we built Bewa Global Logistics to make
               it simple.
            </h1>

            <motion.img
               initial={{ y: "-120%" }}
               animate={{ y: 0 }}
               transition={{
                  type: "spring",
                  stiffness: 20,
                  damping: 15,
                  mass: 10,
                  delay: 0.1,
               }}
               src={containerImage}
               alt="Hanging Shipping Container"
               className="absolute top-[-5%] md:top-0 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[5%] lg:right-[15%] w-[550px] sm:w-[600px] md:w-[500px] lg:w-[600px] object-contain z-0 drop-shadow-2xl"
            />
         </div>

         <div className="flex flex-col w-full items-center justify-center">
            <div className="mt-16 w-full px-4 max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
               <div className="flex flex-col justify-between">
                  <div>
                     <h2 className="text-3xl font-suisse-intl font-semibold tracking-tighter">
                        Who We Are
                     </h2>
                     <p className="mt-3 text-[#1e2939]/80 font-suisse-intl text-base tracking-tight">
                        We are a modern freight forwarding company dedicated to
                        streamlining international trade. By combining
                        cutting-edge technology with deep industry expertise, we
                        deliver transparent, reliable, and efficient shipping
                        solutions for businesses of all sizes.
                     </p>
                  </div>

                  <div>
                     <p className="text-xl md:mt-0 mt-8 font-suisse-intl font-medium tracking-tight">
                        Lateefat Ibrahim, CEO.
                     </p>
                  </div>
               </div>
               <div>
                  <img
                     src={ceoImage}
                     alt="Lateefat Ibrahim, CEO"
                     className="w-full h-[480px] object-cover rounded-md shadow-[6px_6px_0px_#f00a94]"
                  />
               </div>
            </div>
            <div className="mt-24">
               <Stats />
            </div>
            <div className="w-full md:mt-24 mt-16 mb-4 z-0 relative px-4">
               <h2 className="text-3xl font-suisse-intl font-semibold tracking-tighter text-center mb-2">
                  Our Global Network
               </h2>
               <div className="flex flex-wrap justify-center md:grid md:grid-cols-5 gap-3 md:gap-6 my-6 items-center px-4 md:px-0">
                  {services.map((service, idx) => (
                     <div
                        key={idx}
                        className="flex items-center justify-center gap-2 text-[#1e2939]/80 bg-gray-50 md:bg-transparent border border-gray-100 md:border-transparent px-4 py-2.5 md:p-0 rounded-xl md:rounded-none transition-colors"
                     >
                        <HugeiconsIcon icon={service.icon} size={22} className="shrink-0" />
                        <p className="text-xs md:text-sm font-suisse-intl font-medium tracking-tight">
                           {service.title}
                        </p>
                     </div>
                  ))}
               </div>
               <Coverage variant="mapOnly" />
            </div>
            <Life />
         </div>
      </div>
   );
};

export default About;
