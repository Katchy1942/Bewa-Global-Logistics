import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

export const culture = [
   {
      title: "Gallery",
      description: "Check out photos from our office and warehouse.",
      link: "/gallery",
   },
   {
      title: "Careers",
      description: "Join our team of passionate logistics professionals.",
      link: "/careers",
   },
   {
      title: "Blog",
      description:
         "Read articles about shipping, logistics, and industry trends.",
      link: "/blog",
   },
];

const Life = () => {
   return (
      <div className="md:py-12 pt-12 md:px-0 px-4">
         <h2 className="text-3xl text-center font-suisse-intl font-semibold tracking-tighter mb-4">
            Life at Bewa Global Logistics
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto gap-2">
            {culture.map((item, idx) => (
               <div
                  key={idx}
                  className="flex flex-col justify-between bg-white rounded-xl p-4"
               >
                  <div>
                     <h3 className="text-xl font-suisse-intl font-semibold tracking-tight text-[#1e2939]">
                        {item.title}
                     </h3>
                     <p className="text-sm text-slate-600 font-suisse-intl mt-2 leading-snug">
                        {item.description}
                     </p>
                  </div>
                  <div className="flex items-end justify-end mt-4">
                     <Link
                        to={item.link}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f00a94]/10 text-[#f00a94] hover:bg-[#f00a94] hover:text-white transition-colors"
                     >
                        <HugeiconsIcon icon={ArrowUpRight01Icon} size={20} />
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Life;
