import { useState, FormEvent } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
   Message02Icon,
   CallIcon,
   LocationIcon,
   Cancel01Icon,
} from "@hugeicons/core-free-icons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const createCustomIcon = () => {
   return L.divIcon({
      html: `
           <div style="
               background-color: #f00a94;
               width: 36px;
               height: 36px;
               border-radius: 50% 50% 50% 0;
               transform: rotate(-45deg);
               display: flex;
               align-items: center;
               justify-content: center;
               box-shadow: 2px 2px 6px rgba(0,0,0,0.3);
               border: 2px solid white;
           ">
               <div style="
                   background-color: white;
                   width: 20px;
                   height: 20px;
                   border-radius: 50%;
               "></div>
           </div>
       `,
      className: "",
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -40],
   });
};

const Contact = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [isFormVisible, setIsFormVisible] = useState(true);

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      console.log(name, email, message);
   };

   const contactInfo = [
      {
         title: "Email",
         value: "bewagloballogistics@gmail.com",
         icon: <HugeiconsIcon icon={Message02Icon} size={18} strokeWidth={2} />,
      },
      {
         title: "Phone",
         value: "07089636979",
         icon: <HugeiconsIcon icon={CallIcon} size={18} strokeWidth={2} />,
      },
      {
         title: "Location",
         value: "15b Agbado Ijaiye Rd, Ijaiye ojokoro Lagos.",
         icon: <HugeiconsIcon icon={LocationIcon} size={18} strokeWidth={2} />,
      },
   ];

   return (
      <div className="min-h-screen mt-16 flex flex-col">
         <div className="flex flex-col items-center">
            <h1 className="text-2xl font-suisse-intl text-center tracking-tight font-semibold">
               Got Enquiries or Suggestions?
            </h1>
            <div className="flex flex-wrap justify-center">
               <p className="text-sm text-[#1e2939]/80 font-suisse-intl">
                  Send us a message and we'll get back to you as soon as
                  possible.
               </p>
            </div>
         </div>
         <div className="relative flex justify-end flex-1 items-end m-4 p-4 rounded-[14px] overflow-hidden min-h-[600px] mt-8">
            <div className="absolute inset-0 z-0 rounded-[14px] overflow-hidden shadow-sm">
               <MapContainer
                  center={[6.6433, 3.3031]}
                  zoom={15}
                  scrollWheelZoom={false}
                  zoomControl={false}
                  className="w-full h-full z-0"
               >
                  <TileLayer
                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                     url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                  />
                  <Marker position={[6.6433, 3.3031]} icon={createCustomIcon()}>
                     <Popup className="custom-popup">
                        <div className="font-bebas text-lg font-bold mb-1 text-[#1e2939]">
                           BEWA GLOBAL LOGISTICS
                        </div>
                        <div className="text-xs text-[#1e2939]/80 font-suisse-intl">
                           15b Agbado Ijaiye Rd,
                           <br />
                           Ijaiye ojokoro Lagos.
                        </div>
                     </Popup>
                  </Marker>
               </MapContainer>
            </div>
            {isFormVisible && (
               <div className="relative z-10 flex flex-col gap-4 bg-[#ffffff]/95 backdrop-blur-md p-5 rounded-[12px] shadow-2xl max-w-sm w-full border border-[#ffffff]/50">
                  <button
                     type="button"
                     onClick={() => setIsFormVisible(false)}
                     title="Close Map Form"
                     className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-[#1e2939] transition-colors cursor-pointer"
                  >
                     <HugeiconsIcon icon={Cancel01Icon} size={20} />
                  </button>
                  <form
                     onSubmit={handleSubmit}
                     className="flex flex-col gap-4 max-w-sm mt-2"
                  >
                     <div className="flex flex-col gap-2">
                        <label
                           htmlFor="name"
                           className="text-sm font-suisse-intl font-medium text-[#1e2939]"
                        >
                           Name
                        </label>
                        <input
                           type="text"
                           placeholder="Your name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           className="border font-suisse-intl border-gray-200 focus:border-[#f00a94] focus:ring-1 focus:ring-[#f00a94] outline-none rounded-md p-2 text-sm transition-all"
                        />
                     </div>
                     <div className="flex flex-col gap-2">
                        <label
                           htmlFor="email"
                           className="text-sm font-suisse-intl font-medium text-[#1e2939]"
                        >
                           Email
                        </label>
                        <input
                           type="email"
                           placeholder="Your email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className="border font-suisse-intl border-gray-200 focus:border-[#f00a94] focus:ring-1 focus:ring-[#f00a94] outline-none rounded-md p-2 text-sm transition-all"
                        />
                     </div>
                     <div className="flex flex-col gap-2">
                        <label
                           htmlFor="message"
                           className="text-sm font-suisse-intl font-medium text-[#1e2939]"
                        >
                           Message
                        </label>
                        <textarea
                           placeholder="How can we help you?"
                           value={message}
                           onChange={(e) => setMessage(e.target.value)}
                           className="border font-suisse-intl border-gray-200 focus:border-[#f00a94] focus:ring-1 focus:ring-[#f00a94] outline-none rounded-md p-2 text-sm min-h-[100px] transition-all"
                        ></textarea>
                     </div>
                     <button
                        type="submit"
                        className="bg-[#f00a94] cursor-pointer font-suisse-intl hover:bg-[#f00a94]/90 font-medium text-white rounded-md p-2.5 mt-2 transition-colors"
                     >
                        Send message
                     </button>
                  </form>
                  <div className="w-full h-px bg-gray-100 my-2"></div>
                  <div className="flex flex-col gap-3">
                     {contactInfo.map((contact, index) => (
                        <div key={index} className="flex items-center gap-3">
                           <div className="bg-[#f00a94]/10 text-[#f00a94] p-2 rounded-full">
                              {contact.icon}
                           </div>
                           <p className="text-sm font-suisse-intl text-[#1e2939]">
                              {contact.value}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            )}
            {!isFormVisible && (
               <button
                  type="button"
                  onClick={() => setIsFormVisible(true)}
                  className="relative z-10 bg-[#f00a94] text-white font-suisse-intl px-5 py-3 text-sm rounded-[10px] shadow-sm font-medium hover:bg-[#f00a94]/90 transition-all cursor-pointer flex items-center gap-2 hover:scale-105"
               >
                  <HugeiconsIcon icon={Message02Icon} size={20} />
                  Contact Us
               </button>
            )}
         </div>
      </div>
   );
};

export default Contact;
