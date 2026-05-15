import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
   Cancel01Icon,
   ArrowRight01Icon,
   ArrowDown01Icon,
} from "@hugeicons/core-free-icons";
import { useState } from "react";

interface SidebarProps {
   isOpen: boolean;
   onClose: () => void;
   navItems: any[];
}

const Sidebar = ({ isOpen, onClose, navItems }: SidebarProps) => {
   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

   return (
      <>
         {/* Overlay */}
         <div
            className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            style={{ zIndex: 90 }}
            onClick={onClose}
         />

         {/* Sidebar panel */}
         <div
            className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            style={{ zIndex: 100 }}
         >
            <div className="p-4 flex items-center justify-between border-b border-gray-100">
               <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
               <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
               >
                  <HugeiconsIcon icon={Cancel01Icon} size={24} />
               </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-4 flex flex-col gap-2">
               {navItems.map((item) => (
                  <div key={item.label} className="flex flex-col">
                     {item.to ? (
                        <Link
                           to={item.to}
                           onClick={onClose}
                           className="py-3 px-2 text-[#1e2939] font-suisse-intl font-medium capitalize flex items-center justify-between border-b border-gray-50"
                        >
                           {item.label}
                        </Link>
                     ) : (
                        <>
                           <button
                              onClick={() =>
                                 setOpenDropdown(
                                    openDropdown === item.label
                                       ? null
                                       : item.label,
                                 )
                              }
                              className="py-3 px-2 text-[#1e2939] font-suisse-intl font-medium capitalize flex items-center justify-between border-b border-gray-50 w-full text-left"
                           >
                              {item.label}
                              <HugeiconsIcon
                                 icon={item.icon || ArrowDown01Icon}
                                 size={16}
                                 className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                              />
                           </button>
                           {/* Sub-items */}
                           <div
                              className={`overflow-hidden transition-all duration-300 ${openDropdown === item.label ? "max-h-[500px] mt-2 mb-2 opacity-100" : "max-h-0 opacity-0"}`}
                           >
                              <div className="flex flex-col pl-4 gap-2 border-l-2 border-[#f00a94]/20 ml-2">
                                 {item.items?.map((subItem: any) => (
                                    <Link
                                       key={subItem.to}
                                       to={subItem.to}
                                       onClick={onClose}
                                       className="py-2 px-2 text-sm text-[#1e2939]/80 font-suisse-intl hover:text-[#f00a94] transition-colors"
                                    >
                                       {subItem.label}
                                    </Link>
                                 ))}
                              </div>
                           </div>
                        </>
                     )}
                  </div>
               ))}
            </div>

            <div className="p-6 border-t border-gray-100">
               <a
                  href="https://wa.me/2349122454898?text=*WELCOME%20TO%20BEWA%20GLOBAL%20LOGISTICS*%0A%0A*Pickup%20Location%3A*%20%0A*Dropoff%20Location%3A*%20%0A*Cargo%20Weight%3A*%20%0A*Width%3A*%20%0A*Height%3A*%20%0A*Length%3A*%20%0A*Time%20to%20pickup%3A*%20"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#f00a94] text-white rounded-md py-3 flex items-center justify-center gap-2 transition-all hover:bg-[#f00a94]/90 shadow-md"
               >
                  <span className="font-suisse-intl font-medium">
                     Ship with us
                  </span>
                  <HugeiconsIcon
                     icon={ArrowRight01Icon}
                     size={18}
                     strokeWidth={2}
                  />
               </a>
            </div>
         </div>
      </>
   );
};

export default Sidebar;
