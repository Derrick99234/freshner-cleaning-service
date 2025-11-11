// import Image from "next/image";
// import React from "react";

// // --- Constants ---
// const PRIMARY_PURPLE = "#6F42C1";
// const SECONDARY_BG = "#F0EBE9"; // Light beige background color from the hero image
// const TEXT_COLOR = "#333333";

// // --- Cleaning Area Details Component ---
// interface CleaningAreaProps {
//   title: string;
//   items: string[];
// }

// const CleaningArea: React.FC<CleaningAreaProps> = ({ title, items }) => (
//   <div className="border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col h-full bg-white">
//     <h3
//       className="text-xl font-bold mb-4 border-b pb-2"
//       style={{ color: PRIMARY_PURPLE }}
//     >
//       {title}
//     </h3>
//     <ul className="space-y-2 text-sm text-gray-700 flex-grow">
//       {items.map((item, index) => (
//         <li key={index} className="flex items-start">
//           <span className="text-green-500 mr-2 mt-1">&#10003;</span>
//           {item}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// // --- Estimate CTA Component ---
// const EstimateCTA = () => {
//   // Mock image for the "Get An Estimate" section
//   const estimateImage =
//     "https://cdn.pixabay.com/photo/2014/02/17/14/03/vacuum-cleaner-268161_640.jpg";
//   const IMG_WIDTH = 400;
//   const IMG_HEIGHT = 250;

//   return (
//     <div className="py-12 md:py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
//           {/* Left Column: Text and Button */}
//           <div className="md:col-span-3">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">
//               Get An Estimate
//             </h2>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               Do you need an estimate of your full house?
//             </p>
//             <p className="text-gray-600 mb-8 leading-relaxed">
//               MAIDS PARADE will provide you an ease and affordable price
//             </p>
//             <button
//               className="py-3 px-6 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:opacity-90 transform hover:scale-[1.005]"
//               style={{ backgroundColor: PRIMARY_PURPLE }}
//             >
//               House Cleaning Estimate
//             </button>
//           </div>

//           {/* Right Column: Image (using simulated Next.js Image component) */}
//           <div className="md:col-span-2 flex justify-center md:justify-end">
//             <Image
//               src={estimateImage}
//               alt="Modern rental house exterior with swimming pool."
//               width={IMG_WIDTH}
//               height={IMG_HEIGHT}
//               className="max-w-sm w-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Main Page Component ---
// export default function VacationRentalCleaningPage() {
//   // Mock image for the Vacation Rental hero section
//   const vacationImage =
//     "https://cdn.pixabay.com/photo/2017/09/22/07/28/home-2774669_640.jpg";
//   const IMG_WIDTH = 500;
//   const IMG_HEIGHT = 300;

//   const kitchenItems = [
//     "Cabinet fronts cleaned",
//     "Appliances exterior cleaned (microwave, coffee maker)",
//     "Small appliances wiped (in toaster, coffee maker)",
//     "All surfaces dusted",
//     "Countertops and backsplashes cleaned",
//     "Sinks cleaned and sanitized",
//     "Disposals, doorknobs and doors wiped",
//     "Floors vacuumed and washed",
//     "Tables and chairs cleaned and/or washed",
//     "Garbage emptied",
//     "Patio furniture cleaned (if applicable)",
//   ];

//   const bathroomsItems = [
//     "Sinks, showers and glass doors cleaned and sanitized",
//     "Tubs, toilets, and towel racks wiped",
//     "Mirrors cleaned",
//     "Cabinets fronts cleaned",
//     "Countertops wiped",
//     "Wastebaskets and window tracks cleaned",
//     "Baseboards wiped",
//     "Light switches wiped",
//     "Garbage emptied",
//     "Towels changed (if left out)",
//   ];

//   const bedroomsItems = [
//     "All surfaces dusted",
//     "Carpets and area rugs vacuumed",
//     "Hard surfaces floors vacuumed and damp-mopped",
//     "Mirrors cleaned",
//     "Beds remade",
//     "Window sills, pictures, lamp shades wiped",
//     "Baseboards and window tracks cleaned (in/out)",
//     "Doorknobs and doors wiped",
//     "Light switches wiped",
//     "Garbage emptied",
//   ];

//   const otherLivingItems = [
//     "All surfaces dusted",
//     "Carpet and area rugs vacuumed",
//     "Hard surfaces floors vacuumed and damp-mopped",
//     "Baseboards and window tracks cleaned (in/out)",
//     "Glass tables cleaned and polished",
//     "Mirrors cleaned",
//     "Doorknobs and doors wiped",
//     "Light switches wiped",
//     "Garbage emptied",
//   ];

//   return (
//     <div
//       className="bg-white min-h-screen font-sans"
//       style={{ color: TEXT_COLOR }}
//     >
//       <main>
//         {/* 1. Hero Banner */}
//         <div
//           className="w-full py-16 sm:py-24 px-4 bg-cover bg-center"
//           style={{
//             backgroundColor: SECONDARY_BG,
//             backgroundImage: `url('https://placehold.co/1200x300/${SECONDARY_BG.substring(
//               1
//             )}/888?text=Vacation+Cleaning+Products+Background')`,
//           }}
//         >
//           <div className="max-w-7xl mx-auto text-center sm:text-left">
//             <p
//               className="text-xl font-medium"
//               style={{ color: PRIMARY_PURPLE }}
//             >
//               MAIDS PARADE
//             </p>
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mt-2">
//               Vacation Rental
//             </h1>
//             <button
//               className="mt-6 py-3 px-6 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:opacity-90 transform hover:scale-[1.005]"
//               style={{ backgroundColor: PRIMARY_PURPLE }}
//             >
//               Book A Cleaning
//             </button>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
//           {/* 2. Vacation Rental Introduction */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             {/* Text Content */}
//             <div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-4">
//                 Vacation Rental
//               </h2>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 Maids Parade teams will clean your rental property thoroughly.
//                 Our service is based on your specific needs, and we do not use
//                 any cleaning products. We’ll clean, sanitize, and prepare your
//                 place for your next guest. Let us help you keep your place
//                 beautiful and functional. Our staff work in teams of two to
//                 efficiently deliver cleaning services and maid services for your
//                 vacation rental cleaning services.
//               </p>
//               <button className="py-3 px-6 text-gray-700 font-semibold border-2 border-gray-300 rounded-lg transition duration-300 hover:bg-gray-50 hover:border-purple-500">
//                 Book A Cleaning
//               </button>
//             </div>

//             {/* Image (using simulated Next.js Image component) */}
//             <div className="flex justify-center md:justify-end">
//               <Image
//                 src={vacationImage}
//                 alt="A person relaxing in a lounge chair by a pool, symbolizing a clean vacation rental."
//                 width={IMG_WIDTH}
//                 height={IMG_HEIGHT}
//                 className="max-w-lg w-full"
//               />
//             </div>
//           </div>

//           {/* 3. Detailed Cleaning Checklist */}
//           <div className="mt-16">
//             <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//               What We Clean
//             </h2>

//             {/* Kitchen and Bathrooms */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//               <CleaningArea title="Kitchen" items={kitchenItems} />
//               <CleaningArea title="Bathrooms" items={bathroomsItems} />
//             </div>

//             {/* Bedrooms and Other Living Areas */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               <CleaningArea title="Bedrooms" items={bedroomsItems} />
//               <CleaningArea
//                 title="Other Living Areas"
//                 items={otherLivingItems}
//               />
//             </div>
//           </div>
//         </div>

//         {/* 4. Get An Estimate CTA Section */}
//         <EstimateCTA />
//       </main>
//     </div>
//   );
// }
