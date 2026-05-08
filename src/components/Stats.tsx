import ncsLogo from "../assets/ncs-logo.jpg";
import crffnLogo from "../assets/crffn-logo.png";

export const stats = [
   {
      label: "Countries Covered",
      value: "6+",
   },
   {
      label: "Shipments Delivered",
      value: "2400+",
   },
   {
      label: "Damage rate across all shipments",
      value: "0.8%",
   },
   {
      label: "Fleet Capacity",
      value: "260t/day",
   },
];

const Stats = () => {
   return (
      <div className="flex flex-col gap-2 py-8">
         <div className="w-full">
            <h2 className="text-xl font-suisse-intl text-center tracking-tight font-semibold">
               In <span className="text-[#f00a94] font-suisse-works">4</span>{" "}
               years of active operation,
            </h2>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:px-0 px-4 gap-2 mt-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-4 flex flex-col h-full">
               <h3 className="font-suisse-intl font-semibold text-xl tracking-tight mb-2">
                  CRFFN Certified
               </h3>
               <p className="text-sm tracking-tight text-[#1e2939]/90 border-b border-[#3a182c]/40 pb-8 font-suisse-intl">
                  Licensed by the Council for the Regulation of Freight
                  Forwarding in Nigeria, the body that governs all freight
                  forwarders operating at Nigerian ports.
               </p>
               <div className="flex items-center justify-between pt-8">
                  <div className="flex flex-col">
                     <span className="font-suisse-intl text-[10px]">
                        License no.
                     </span>
                     <p className="font-suisse-mono text-[#3a182c]/90 font-medium text-xs">
                        CRFFN/2024/00000
                     </p>
                  </div>
                  <div className="w-10">
                     <img src={crffnLogo} alt="crffn-logo" className="w-full" />
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-6 p-6 md:items-start items-center bg-white rounded-xl">
               {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                     <h3 className="text-3xl font-suisse-works font-medium tracking-tight text-[#1e2939]">
                        {stat.value}
                     </h3>
                     <p className="text-xs text-slate-600 font-suisse-intl mt-1 leading-snug">
                        {stat.label}
                     </p>
                  </div>
               ))}
            </div>
            <div className="bg-white rounded-xl p-4">
               <h3 className="font-suisse-intl font-semibold text-xl tracking-tight mb-2">
                  NCS Licensed Agent
               </h3>
               <p className="text-sm tracking-tight text-[#1e2939]/90 border-b border-[#3a182c]/40 pb-8 font-suisse-intl">
                  Registered customs agent under the Nigeria Customs Service,
                  authorized to clear imports and exports on your behalf at any
                  Nigerian port of entry.
               </p>
               <div className="flex items-center justify-between pt-8">
                  <div className="flex flex-col">
                     <span className="font-suisse-intl text-[10px]">
                        License no.
                     </span>
                     <p className="font-suisse-mono text-[#3a182c]/90 font-medium text-xs">
                        NCS/CA/LAG/00000
                     </p>
                  </div>
                  <div className="w-10">
                     <img src={ncsLogo} alt="ncs-logo" className="w-full" />
                  </div>
               </div>
            </div>
         </div>
         <span className="text-[10px] text-[#1e2939]/70 text-center font-suisse-intl">
            License numbers are publicly verifiable on the CRFFN and NCS
            portals.
         </span>
      </div>
   );
};

export default Stats;
