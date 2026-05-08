import heroVideo from "../assets/hero-video.mp4";
// import { HugeiconsIcon } from "@hugeicons/react";
// import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

const HeroSection = () => {
   return (
      <div className="relative min-h-screen w-full bg-[#f00a94] overflow-hidden">
         <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
         >
            <source src={heroVideo} type="video/mp4" />
         </video>
         
         {/* Dark overlay for better text readability */}
         <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>

         <div className="relative z-10 w-full min-h-screen flex flex-col">
            <div className="flex-1 flex flex-col lg:flex-row justify-between items-stretch p-4 md:p-8 w-full max-w-7xl mx-auto gap-12 pt-24 lg:pt-20 pb-12">
               <div className="flex flex-col justify-end items-start w-full">
                  {/* <a 
                     href="https://wa.me/2347089636979?text=*WELCOME%20TO%20BEWA%20GLOBAL%20LOGISTICS*%0A%0A*Pickup%20Location%3A*%20%0A*Dropoff%20Location%3A*%20%0A*Cargo%20Weight%3A*%20%0A*Width%3A*%20%0A*Height%3A*%20%0A*Length%3A*%20%0A*Time%20to%20pickup%3A*%20"
                     target="_blank"
                     rel="noreferrer"
                     className="flex items-center bg-[#f00a94] rounded-full pl-6 pr-2 py-2 gap-6 mb-6 hover:scale-105 transition-all duration-300 group shadow-2xl cursor-pointer">
                     <span className="text-[#ffff] font-suisse-intl font-medium text-sm md:text-base">
                        Ship with us
                     </span>
                     <div className="bg-[#ffff] rounded-full w-12 h-12 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                        <HugeiconsIcon icon={ArrowRight01Icon} size={20} className="text-black" strokeWidth={2.5} />
                     </div>
                  </a> */}
                  <h1 className="text-[#e9e5e5] text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl font-bebas uppercase">
                     Cargo Services to any country in the world. Exportation of
                     food items & other personal effects.
                  </h1>
               </div>

               {/* Right Side: Quote Form */}
               <div className="bg-[#ffffff]/95 backdrop-blur-md p-6 lg:p-4 rounded-[14px] shadow-2xl w-full lg:max-w-[420px] border border-[#ffffff]/50 flex flex-col">
                  <h3 className="text-xl font-suisse-intl tracking-tight font-semibold mb-2">
                     Request an Estimate
                  </h3>
                  <form className="flex flex-col gap-5 flex-1 justify-center">
                     <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-suisse-intl font-medium text-[#1e2939]">
                           Locations
                        </label>
                        <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-[#ffff] focus-within:ring-1 focus-within:ring-[#f00a94] focus-within:border-[#f00a94] transition-all">
                           <input
                              type="text"
                              placeholder="Pickup Country (e.g. Nigeria)"
                              className="w-full font-suisse-intl outline-none p-3 text-sm text-[#1e2939] placeholder:text-gray-400 bg-transparent border-b border-gray-100"
                           />
                           <input
                              type="text"
                              placeholder="Drop-off Country (e.g. United Kingdom)"
                              className="w-full font-suisse-intl outline-none p-3 text-sm text-[#1e2939] placeholder:text-gray-400 bg-transparent"
                           />
                        </div>
                     </div>

                     <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-suisse-intl font-medium text-[#1e2939]">
                           Time to Pickup
                        </label>
                        <input
                           type="datetime-local"
                           className="border font-suisse-intl border-gray-200 focus:border-[#f00a94] focus:ring-1 focus:ring-[#f00a94] outline-none rounded-md p-3 text-sm transition-all bg-[#ffff]"
                        />
                     </div>

                     <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-suisse-intl font-medium text-[#1e2939]">
                           Cargo Weight (kg)
                        </label>
                        <input
                           type="number"
                           placeholder="0.00"
                           className="border font-suisse-intl border-gray-200 focus:border-[#f00a94] focus:ring-1 focus:ring-[#f00a94] outline-none rounded-md p-3 text-sm transition-all bg-[#ffff]"
                        />
                     </div>

                     <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-suisse-intl font-medium text-[#1e2939]">
                           Cargo Dimensions (L x W x H)
                        </label>
                        <div className="flex gap-2">
                           <input
                              type="number"
                              placeholder="L"
                              className="w-1/3 border font-suisse-intl border-gray-200 focus:border-[#f00a94] focus:ring-1 focus:ring-[#f00a94] outline-none rounded-md p-3 text-sm transition-all bg-[#ffff]"
                           />
                           <input
                              type="number"
                              placeholder="W"
                              className="w-1/3 border font-suisse-intl border-gray-200 focus:border-[#f00a94] focus:ring-1 focus:ring-[#f00a94] outline-none rounded-md p-3 text-sm transition-all bg-[#ffff]"
                           />
                           <input
                              type="number"
                              placeholder="H"
                              className="w-1/3 border font-suisse-intl border-gray-200 focus:border-[#f00a94] focus:ring-1 focus:ring-[#f00a94] outline-none rounded-md p-3 text-sm transition-all bg-[#ffff]"
                           />
                        </div>
                     </div>

                     <button
                        type="button"
                        className="bg-[#f00a94] cursor-pointer font-suisse-intl hover:bg-[#f00a94]/90 font-medium text-[#ffff] rounded-[12px] p-3 mt-4 transition-colors"
                     >
                        Calculate Cost
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HeroSection;
