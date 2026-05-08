import React from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const origin: { name: string; coords: [number, number] } = {
   name: "Nigeria (HQ)",
   coords: [9.082, 8.6753],
};

const destinations: { name: string; coords: [number, number] }[] = [
   { name: "United Kingdom", coords: [52.3555, -1.1743] },
   { name: "USA", coords: [39.0902, -95.7129] },
   { name: "Canada", coords: [56.1304, -106.3468] },
   { name: "Germany", coords: [51.1657, 10.4515] },
   { name: "France", coords: [46.2276, 2.2137] },
   { name: "Italy", coords: [41.8719, 12.5674] },
];

const createLabelIcon = (name: string, isOrigin = false) => {
   return new L.DivIcon({
      className: "bg-transparent border-0",
      html: `
         <div class="relative flex justify-center items-center" style="transform: translate(-50%, -50%);">
            ${
               isOrigin
                  ? `<span class="animate-ping absolute inline-flex h-full w-full rounded-md bg-[#2dd4bf] opacity-40"></span>`
                  : ""
            }
            <div class="bg-white/90 backdrop-blur-sm text-slate-800 font-suisse-intl font-semibold px-3 py-1 rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.08)] text-xs whitespace-nowrap border ${
               isOrigin ? "border-[#2dd4bf]" : "border-[#818cf8]/40"
            }">
               ${name}
            </div>
         </div>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0],
   });
};

// Generate curved points for polylines using a quadratic bezier curve approximation
const generateCurve = (start: [number, number], end: [number, number]) => {
   const points: [number, number][] = [];
   const midLat = (start[0] + end[0]) / 2 + 15; // Arc upwards
   const midLng = (start[1] + end[1]) / 2;

   for (let i = 0; i <= 30; i++) {
      const t = i / 30;
      const lat =
         (1 - t) * (1 - t) * start[0] +
         2 * (1 - t) * t * midLat +
         t * t * end[0];
      const lng =
         (1 - t) * (1 - t) * start[1] +
         2 * (1 - t) * t * midLng +
         t * t * end[1];
      points.push([lat, lng]);
   }
   return points;
};

const Coverage = ({ variant = "full" }: { variant?: "full" | "mapOnly" }) => {
   return (
      <div className={variant === "full" ? "h-screen flex flex-col items-center gap-4 md:mb-12 pt-16 px-2" : "w-full h-[600px] rounded-[14px] overflow-hidden"}>
         {variant === "full" && (
            <div className="flex flex-col items-center gap-1 max-w-2xl shrink-0">
               <h2 className="text-2xl font-suisse-intl text-center tracking-tight font-semibold">
                  We operate where it matters most
               </h2>
               <p className="text-[#1e2939]/80 font-suisse-intl text-sm">
                  Experience premium logistics services across the globe. Sea cargo
                  to Uk, air cargo to the rest.
               </p>
            </div>
         )}

         <div className={`w-full relative z-10 ${variant === "full" ? "flex-1 min-h-[600px] mt-2 rounded-[14px] overflow-hidden p-2" : "h-full"}`}>
            <div className="w-full h-full rounded-[14px] overflow-hidden relative">
               <MapContainer
                  center={[35, -30]}
                  zoom={3}
                  minZoom={2}
                  scrollWheelZoom={false}
                  style={{
                     height: "100%",
                     width: "100%",
                     backgroundColor: "#f7eaf2",
                     zIndex: 0,
                  }}
               >
                  {/* Premium sleek Map layer tinted by the background color */}
                  <TileLayer
                     url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                     attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                     className="opacity-70"
                  />

                  {/* Origin Marker */}
                  <Marker
                     position={origin.coords}
                     icon={createLabelIcon(origin.name, true)}
                  />

                  {/* Destination Markers and Lines */}
                  {destinations.map((dest, i) => (
                     <React.Fragment key={i}>
                        <Marker
                           position={dest.coords}
                           icon={createLabelIcon(dest.name, false)}
                        />
                        <Polyline
                           positions={generateCurve(origin.coords, dest.coords)}
                           pathOptions={{
                              color: "#f00a94",
                              weight: 2,
                              opacity: 0.6,
                              dashArray: "6, 8",
                              lineCap: "round",
                              lineJoin: "round",
                           }}
                        />
                     </React.Fragment>
                  ))}
               </MapContainer>

               {/* Floating Tracking Input Overlay */}
               {variant === "full" && (
                  <div className="absolute bottom-4 right-4 left-4 md:left-auto z-1000 w-auto md:w-[400px]">
                     <div className="relative w-full">
                        <input
                           type="text"
                           placeholder="Enter tracking number"
                           className="w-full h-[54px] bg-white/95 backdrop-blur-sm border font-suisse-intl border-[#99a1af] focus:border-[#f00a94] focus:ring-1 focus:ring-[#f00a94] outline-none rounded-xl pl-6 pr-28 text-sm transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        />
                        <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#f00a94] cursor-pointer font-suisse-intl hover:bg-[#f00a94]/90 font-medium text-white rounded-lg px-6 py-2 transition-colors">
                           Track
                        </button>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Coverage;
