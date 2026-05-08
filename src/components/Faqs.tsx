import { HugeiconsIcon } from "@hugeicons/react";
import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons"
import { useState } from "react";
import { Link } from "react-router-dom";

const faqsData = [
   {
      question: "How long does it typically take for sea freight to arrive?",
      answer:
         "Transit times vary based on the destination and route, but generally, sea freight takes anywhere from fourteen to forty five days. We provide estimated arrival dates with every quote and real-time tracking once shipped.",
   },
   {
      question: "What items are prohibited from being shipped internationally?",
      answer:
         "Commonly prohibited items include hazardous materials, flammables, explosives, live animals, perishable foods without permits, and certain electronics. Always consult our restricted items list before packing.",
   },
   {
      question:
         "Do you handle customs clearance, or is that my responsibility?",
      answer:
         "We offer comprehensive door-to-door services, which means our team handles all necessary export and import customs clearance paperwork on your behalf to prevent delays and hidden fees.",
   },
   {
      question: "How is freight pricing calculated?",
      answer:
         "Freight pricing is based on the 'chargeable weight' of your cargo, which considers both the actual gross weight and the volumetric (dimensional) weight. The larger of the two determines the cost.",
   },
   {
      question: "Is insurance included in my shipping quote?",
      answer:
         "Basic liability coverage is typically included by carriers, but it is highly limited. We strongly recommend purchasing comprehensive cargo insurance, which we can seamlessly add to your quote.",
   },
   {
      question: "How can I track my shipment?",
      answer:
         "Once your cargo is processed, you will receive a unique tracking number. You can enter this number directly on our website's tracking portal to see real-time updates on your shipment's journey.",
   },
   {
      question: "What happens if my cargo is delayed?",
      answer:
         "While we strive for on-time delivery, weather, port congestion, or customs holds can cause delays. Our team proactively monitors all shipments and will notify you immediately with updated timelines and contingency plans if delays occur.",
   },
   {
      question: "Can you handle temperature-sensitive or fragile cargo?",
      answer:
         "Yes, we specialize in cold chain logistics and secure packaging. We offer refrigerated containers (reefers) and custom crating solutions to ensure delicate and perishable items arrive safely.",
   },
];

const Faqs = () => {
   const [openIndex, setOpenIndex] = useState<number | null>();

   const toggleFaq = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
   };

   return (
      <div className="py-24 px-4 md:px-8 lg:px-16 bg-[#f5dbeb]">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column (Sticky) */}
            <div className="lg:col-span-5">
               <div className="lg:sticky lg:top-32 flex flex-col gap-10 lg:gap-32">
                  <h2 className="text-3xl font-suisse-intl font-semibold tracking-tight text-[#1e2939] leading-[1.05]">
                     Your Questions
                     <br className="hidden lg:block" /> resolved in one place.
                  </h2>

                  <div className="space-y-6">
                     <p className="text-[#1e2939]/80 font-suisse-intl text-sm max-w-sm">
                        Our friendly team is always here to help you with quick,
                        clear, and reliable answers whenever needed.
                     </p>
                     <Link
                        to="/contact"
                        className="inline-flex items-center justify-center bg-[#000000] text-white px-7 py-3.5 rounded-lg font-suisse-intl font-medium text-sm transition-all hover:bg-black/80 shadow-md"
                     >
                        Contact Sales
                     </Link>
                  </div>
               </div>
            </div>

            {/* Right Column (Accordion List) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
               {faqsData.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                     <div
                        key={index}
                        onClick={() => toggleFaq(index)}
                        className="cursor-pointer"
                     >
                        <div className="flex justify-between items-start gap-6">
                           <h3
                              className={`text-lg font-suisse-intl tracking-tight font-semibold transition-colors pr-4 ${isOpen ? "text-[#1e2939]" : "text-[#1e2939]/90"}`}
                           >
                              {faq.question}
                           </h3>
                           <button className="shrink-0 mt-0.5 cursor-pointer">
                              {isOpen ? (
                                 <HugeiconsIcon icon={MinusSignIcon} size={24} />
                              ) : (
                                 <HugeiconsIcon icon={PlusSignIcon} size={24} />
                              )}
                           </button>
                        </div>
                        <div
                           className={`grid transition-all duration-300 ease-in-out ${
                              isOpen
                                 ? "grid-rows-[1fr] opacity-100 mt-5"
                                 : "grid-rows-[0fr] opacity-0 mt-0"
                           }`}
                        >
                           <div className="overflow-hidden">
                              <p className="text-md tracking-tight font-suisse-intl text-[#1e2939]/90 pr-8 lg:pr-12">
                                 {faq.answer}
                              </p>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Faqs;
