import { Link } from "react-router-dom";
import Facebook from '../assets/icons/facebook.png'
import Instagram from '../assets/icons/instagram.png'
import Mail from '../assets/icons/gmail.png'
import Maps from '../assets/icons/maps.png'
import WhatsApp from '../assets/icons/whatsapp.png'

const Footer = () => {
   const currentYear = new Date().getFullYear();

   const socialLinks = [
      {
         label: "Facebook",
         icon: Facebook,
         to: "https://web.facebook.com/shopwithbewa/?_rdc=1&_rdr#",
      },
      {
         label: "Instagram",
         icon: Instagram,
         to: "https://www.instagram.com/bewagloballogistics/",
      },
      {
         label: "Mail",
         icon: Mail,
         to: "mailto:bewagloballogistics@gmail.com",
      },
      {
         label: "Maps",
         icon: Maps,
         to: "/contact",
      },
      {
         label: "WhatsApp",
         icon: WhatsApp,
         to: "https://wa.me/+2347089636979",
      },
   ];

   return (
      <footer className="bg-[#090c10] text-[#e9e5e5] pt-16 pb-4">
         <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
               {/* Brand & Description */}
               <div className="flex flex-col gap-4">
                  <Link to="/" className="flex">
                     <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
                  </Link>
                  <p className="font-suisse-intl text-sm text-gray-400">
                     Global cargo and logistics solutions you can trust. We
                     provide seamless shipping services to any country in the
                     world, specializing in both commercial export and personal
                     effects.
                  </p>
               </div>

               {/* Quick Links */}
               <div className="flex flex-col gap-4 lg:ml-auto">
                  <h3 className="text-lg font-suisse-intl font-medium text-[#ffff] mb-2">
                     Company
                  </h3>
                  <Link
                     to="/"
                     className="font-suisse-intl text-sm text-gray-400 hover:text-[#f00a94] transition-colors"
                  >
                     About Us
                  </Link>
                  <Link
                     to="/services"
                     className="font-suisse-intl text-sm text-gray-400 hover:text-[#f00a94] transition-colors"
                  >
                     Our Services
                  </Link>
                  <Link
                     to="/tracking"
                     className="font-suisse-intl text-sm text-gray-400 hover:text-[#f00a94] transition-colors"
                  >
                     Track Shipment
                  </Link>
                  <Link
                     to="/contact"
                     className="font-suisse-intl text-sm text-gray-400 hover:text-[#f00a94] transition-colors"
                  >
                     Contact
                  </Link>
               </div>

               {/* Legal */}
               <div className="flex flex-col gap-4 lg:ml-auto">
                  <h3 className="text-lg font-suisse-intl font-medium text-[#ffff] mb-2">
                     Legal
                  </h3>
                  <Link
                     to="/privacy"
                     className="font-suisse-intl text-sm text-gray-400 hover:text-[#f00a94] transition-colors"
                  >
                     Privacy Policy
                  </Link>
                  <Link
                     to="/terms"
                     className="font-suisse-intl text-sm text-gray-400 hover:text-[#f00a94] transition-colors"
                  >
                     Terms of Service
                  </Link>
                  <Link
                     to="/faq"
                     className="font-suisse-intl text-sm text-gray-400 hover:text-[#f00a94] transition-colors"
                  >
                     FAQ
                  </Link>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-4 border-t border-[#131922] flex flex-col md:flex-row justify-between items-center gap-4">
               <p className="font-suisse-intl text-xs text-gray-500">
                  &copy; {currentYear} Bewa Global Logistics. All rights
                  reserved.
               </p>
               <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                     <a
                        key={index}
                        href={social.to}
                        className="cursor-pointer hover:-translate-y-1 transition-all duration-300"
                     >
                        <img
                           src={social.icon}
                           alt={social.label}
                           className="h-6 w-6"
                        />
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
