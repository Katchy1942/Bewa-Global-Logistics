import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, ArrowRight01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import Sidebar from "./Sidebar";

const Header = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isVisible, setIsVisible] = useState(true);
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   useEffect(() => {
      let lastScrollY = window.scrollY;
      const handleScroll = () => {
         const currentScrollY = window.scrollY;
         setIsScrolled(currentScrollY > 20);
         if (currentScrollY > lastScrollY && currentScrollY > 20) {
            setIsVisible(false);
         } else {
            setIsVisible(true);
         }
         lastScrollY = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const services = [
      {
         label: "Air Freight",
         to: "/air-freight",
      },
      {
         label: "Sea Freight",
         to: "/sea-freight",
      },
      {
         label: "Cold Chain Logistics",
         to: "/cold-chain-logistics",
      },
      {
         label: "Import Shipping",
         to: "/import-shipping",
      },
      {
         label: "Express & Last-Mile Delivery",
         to: "/last-mile-delivery",
      },
   ];

   const company = [
      {
         label: "About",
         to: "/about",
      },
      {
         label: "Careers",
         to: "/careers",
      },
      {
         label: "Blog",
         to: "/blog",
      },
      {
         label: "Contact",
         to: "/contact",
      },
      {
         label: "Gallery",
         to: "/gallery",
      },
   ];

   const navItems: {
      label: string;
      to?: string;
      icon?: any;
      items?: { label: string; to: string }[];
   }[] = [
      {
         label: "home",
         to: "/",
      },
      {
         label: "services",
         icon: ArrowDown01Icon,
         items: services,
      },
      {
         label: "company",
         icon: ArrowDown01Icon,
         items: company,
      },
      {
         label: "tracking",
         to: "/tracking",
      },
   ];

   return (
      <>
      <header
         className={`fixed top-0 left-0 w-full px-4 flex justify-center z-50 transition-all duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
         } ${isScrolled ? "backdrop-blur-md py-2" : "bg-transparent py-4"}`}
      >
         <div className="w-full max-w-7xl flex items-center justify-between">
            <Link to="/" className="flex items-center">
               <img src="/logo.png" alt="Logo" className="h-9 w-auto" />
            </Link>

            <nav className="hidden md:flex items-center gap-1">
               {navItems.map(({ label, to, icon: Icon, items }) => (
                  <div key={label} className="relative group/nav">
                     {to ? (
                        <NavLink
                           to={to}
                           className={({ isActive }) =>
                              `bg-transparent capitalize text-[#1e2939] font-suisse-intl px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-all hover:bg-black/5 ${isActive ? "font-bold" : ""}`
                           }
                        >
                           {({ isActive }) => (
                              <>
                                 {isActive && (
                                    <div className="w-1 h-1 rounded-full bg-current" />
                                 )}
                                 {label}
                                 {Icon && (
                                    <HugeiconsIcon
                                       icon={Icon}
                                       size={12}
                                       strokeWidth={1.5}
                                    />
                                 )}
                              </>
                           )}
                        </NavLink>
                     ) : (
                        <button
                           type="button"
                           className="bg-transparent capitalize text-[#1e2939] font-suisse-intl px-4 py-2 rounded-md text-sm font-medium flex items-center cursor-pointer gap-1 transition-all hover:bg-black/5"
                        >
                           {label}
                           {Icon && (
                              <HugeiconsIcon
                                 icon={Icon}
                                 size={12}
                                 strokeWidth={1.5}
                              />
                           )}
                        </button>
                     )}

                     {/* Dropdown Menu */}
                     {items && (
                        <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 min-w-56">
                           <div className="bg-[#ffffff] rounded-md shadow-xl border border-[#f3f4f6] p-2 flex flex-col gap-1">
                              {items.map((item) => (
                                 <Link
                                    key={item.to}
                                    to={item.to}
                                    className="px-3 py-2.5 text-sm text-[#1e2939] font-suisse-intl font-medium hover:bg-[#f00a94]/10 hover:text-[#f00a94] rounded-md transition-colors"
                                 >
                                    {item.label}
                                 </Link>
                              ))}
                           </div>
                        </div>
                     )}
                  </div>
               ))}
            </nav>

            <div className="flex items-center">
               <a
                  href="https://wa.me/2347089636979?text=*WELCOME%20TO%20BEWA%20GLOBAL%20LOGISTICS*%0A%0A*Pickup%20Location%3A*%20%0A*Dropoff%20Location%3A*%20%0A*Cargo%20Weight%3A*%20%0A*Width%3A*%20%0A*Height%3A*%20%0A*Length%3A*%20%0A*Time%20to%20pickup%3A*%20"
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-[#f00a94] rounded-md pl-4 hover:pr-2 pr-1 py-1 flex items-center gap-2 transition-all hover:bg-[#f00a94]/80 hover:-translate-y-0.5 shadow-sm hover:shadow-lg active:translate-y-0"
               >
                  <span className="font-suisse-intl font-medium text-sm text-white">
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
               <button 
                  onClick={() => setIsSidebarOpen(true)}
                  className="md:hidden ml-3 p-2 text-gray-700 hover:text-black hover:bg-black/5 rounded-md transition-colors cursor-pointer"
               >
                  <HugeiconsIcon icon={Menu01Icon} size={24} />
               </button>
            </div>
         </div>
      </header>
      
      <Sidebar 
         isOpen={isSidebarOpen} 
         onClose={() => setIsSidebarOpen(false)} 
         navItems={navItems} 
      />
      </>
   );
};

export default Header;
