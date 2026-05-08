import { HugeiconsIcon } from "@hugeicons/react";
import {
   Airplane02Icon,
   CargoShipIcon,
   MapsSquare02Icon,
   OrganicFoodIcon,
   PackageIcon,
} from "@hugeicons/core-free-icons";

export const services = [
   {
      title: "Air Freight",
      description:
         "When ground and sea simply cannot keep up, we put your cargo in the air. Time-critical shipments handled with precision — from booking to landing, every hour is accounted for.",
      icon: Airplane02Icon,
   },
   {
      title: "Sea Freight",
      description:
         "Built for volume, designed for reliability. Whether it is a full container or shared space, we move bulk cargo across international waters on schedules that hold.",
      icon: CargoShipIcon,
   },
   {
      title: "Cold Chain Logistics",
      description:
         "Pharmaceuticals, perishables, and temperature-sensitive cargo demand more than a truck. We maintain the cold chain from origin to final delivery — no breaks, no compromises.",
      icon: OrganicFoodIcon,
   },
   {
      title: "Import Shipping",
      description:
         "Sourcing from the UK, China, Dubai, or anywhere in between — we coordinate the entire inbound journey. Customs, clearance, documentation, and delivery handled so you focus on the business.",
      icon: PackageIcon,
   },
   {
      title: "Express & Last-Mile Delivery",
      description:
         "The last leg is where reputations are made or broken. We close the distance between your hub and your customer fast, with proof of delivery and full visibility at every stop.",
      icon: MapsSquare02Icon,
   },
];

const Services = () => {
   return (
      <div className="min-h-screen bg-[#edc3dc] flex flex-col gap-2 pb-8 pt-16">
         <h2 className="text-2xl font-suisse-intl text-center tracking-tight font-semibold">
            From factory floor, to our customer's door.
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-4">
            {services.map((service, index) => (
               <div key={index} className="flex flex-col gap-2 p-4 rounded-md">
                  <div className="relative inline-block mb-2 w-10 h-10">
                     {/* The offset fill layer */}
                     <HugeiconsIcon
                        icon={service.icon}
                        size={32}
                        strokeWidth={0}
                        fill={index % 2 === 0 ? "#2dd4bf" : "#818cf8"}
                        className="absolute top-1.5 left-1.5 opacity-90"
                     />
                     {/* The outline stroke layer */}
                     <HugeiconsIcon
                        icon={service.icon}
                        size={32}
                        strokeWidth={1.5}
                        className="absolute top-0 left-0 text-slate-900"
                     />
                  </div>
                  <h3 className="text-lg font-suisse-intl tracking-tight font-semibold">
                     {service.title}
                  </h3>
                  <p className="text-base font-suisse-intl tracking-tight text-gray-600">
                     {service.description}
                  </p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Services;
