import { useState, useRef } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
   PackageIcon,
   Money04Icon,
   Location01Icon,
   TaskDone01Icon,
   LookTopIcon,
   ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import stepsVideo from "../assets/steps-to-booking-us.mp4";

const HowItWorks = () => {
   const [isMuted, setIsMuted] = useState(true);
   const videoRef = useRef<HTMLVideoElement>(null);

   const toggleMute = () => {
      if (videoRef.current) {
         videoRef.current.muted = !isMuted;
         setIsMuted(!isMuted);
      }
   };

   const steps = [
      {
         title: "Tell us what you're sending",
         description:
            "Share the details — what's in the box, where it's going, and how heavy it is. That's all we need to get started.",
         icon: PackageIcon,
      },
      {
         title: "We give you a price",
         description:
            "You get a clear quote upfront. No hidden charges added after your goods are already on a plane.",
         icon: Money04Icon,
      },
      {
         title: "Drop it off or we pick it up",
         description:
            "Bring it to us or we come to you. We inspect and package everything properly so nothing gets flagged or damaged in transit.",
         icon: Location01Icon,
      },
      {
         title: "We handle customs on both ends",
         description:
            "Nigeria export clearance, destination country import clearance — we manage the paperwork so your shipment doesn't get stuck at any border.",
         icon: TaskDone01Icon,
      },
      {
         title: "Your customer/recipient receives it",
         description:
            "Delivered to the door with proof of delivery. You get confirmation, they get their order, everyone's happy.",
         icon: LookTopIcon,
      },
   ];

   return (
      <div className="md:py-8 md:mt-24 py-16 px-4">
         <h1 className="text-2xl font-suisse-intl text-center tracking-tight font-semibold">
            Get Started in{" "}
            <span className="text-[#f00a94] font-suisse-works">5</span> simple
            steps.
         </h1>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-6xl mx-auto">
            <div className="relative w-full md:max-w-[390px] mx-auto aspect-9/16">
               <video
                  ref={videoRef}
                  src={stepsVideo}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full rounded-xl object-cover shadow-lg"
               />
               <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white p-2.5 rounded-full transition-all flex items-center justify-center cursor-pointer shadow-md"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
               >
                  {isMuted ? (
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <line x1="23" y1="9" x2="17" y2="15"></line>
                        <line x1="17" y1="9" x2="23" y2="15"></line>
                     </svg>
                  ) : (
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                     </svg>
                  )}
               </button>
            </div>
            <div className="flex flex-col h-full py-4">
               {steps.map((step, index) => (
                  <div key={index} className="flex items-stretch gap-6 flex-1">
                     {/* Icon and Line Column */}
                     <div className="flex flex-col items-center shrink-0 w-10">
                        <div className="relative shrink-0 w-10 h-10">
                           <HugeiconsIcon
                              icon={step.icon}
                              size={32}
                              strokeWidth={0}
                              fill={index % 2 === 0 ? "#2dd4bf" : "#818cf8"}
                              className="absolute top-1.5 left-1.5 opacity-90"
                           />
                           <HugeiconsIcon
                              icon={step.icon}
                              size={32}
                              strokeWidth={1.5}
                              className="absolute top-0 left-0 text-slate-900"
                           />
                        </div>
                        {index !== steps.length - 1 && (
                           <div className="w-px bg-[#1e2939] flex-1 my-2"></div>
                        )}
                     </div>
                     {/* Text Column */}
                     <div className="pt-1">
                        <h2 className="text-lg font-suisse-intl tracking-tight font-semibold">
                           {step.title}
                        </h2>
                        <p className="text-sm font-suisse-intl tracking-tight text-gray-600 max-w-sm">
                           {step.description}
                        </p>
                     </div>
                  </div>
               ))}

               <div className="mt-2 md:pr-16 flex justify-end">
                  <a
                     href="https://wa.me/2349122454898?text=*WELCOME%20TO%20BEWA%20GLOBAL%20LOGISTICS*%0A%0A*Pickup%20Location%3A*%20%0A*Dropoff%20Location%3A*%20%0A*Cargo%20Weight%3A*%20%0A*Width%3A*%20%0A*Height%3A*%20%0A*Length%3A*%20%0A*Time%20to%20pickup%3A*%20"
                     target="_blank"
                     rel="noreferrer"
                     className="group bg-[#f00a94] text-white rounded-md pl-4 hover:pr-2 pr-1 py-1 flex items-center gap-2 transition-all hover:bg-[#f00a94]/80 hover:-translate-y-0.5 shadow-sm hover:shadow-lg active:translate-y-0 w-max"
                  >
                     <span className="font-suisse-intl font-medium text-xs">
                        Ship with us
                     </span>
                     <div className="bg-white rounded-sm w-6 h-6 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shadow-sm">
                        <HugeiconsIcon
                           icon={ArrowRight01Icon}
                           size={14}
                           className="text-[#f00a94]"
                           strokeWidth={2}
                        />
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HowItWorks;
