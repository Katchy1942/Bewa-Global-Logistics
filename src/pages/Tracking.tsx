const Tracking = () => {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 w-full text-center">
         <h1 className="text-xl font-suisse-intl tracking-tight font-semibold">Access the exact location of your cargo.</h1>
         <div className="relative w-full max-w-2xl mt-6">
            <input type="text" placeholder="Enter tracking number" className="w-full border font-suisse-intl border-[#99a1af] focus:border-[#f00a94] focus:ring-1 focus:ring-[#f00a94] outline-none rounded-xl py-3.5 pl-6 pr-28 text-sm transition-all" />
            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#f00a94] cursor-pointer font-suisse-intl hover:bg-[#f00a94]/90 font-medium text-white rounded-lg px-6 py-2 transition-colors">Track</button>
         </div>
      </div>
   );
};

export default Tracking;
