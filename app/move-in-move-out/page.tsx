import Image from "next/image";
import React from "react";

// --- Constants ---
const PRIMARY_PURPLE = "#6F42C1";
const SECONDARY_BG = "#F0EBE9"; // Light beige background color from the hero image

// --- Utility Components ---

/** Renders a single list item for the cleaning checklist. */
const ServiceListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start mb-2 text-base text-gray-700">
    <svg
      className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
      style={{ color: PRIMARY_PURPLE }}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      ></path>
    </svg>
    {children}
  </li>
);

// --- Main Service Page Component ---

export default function MoveInMoveOutPage() {
  // Mock image URL to simulate the look of the uploaded image (clean empty room)
  const movingImage =
    "https://cdn.pixabay.com/photo/2016/02/20/19/15/sponge-for-washing-1212612_640.jpg";

  // List of extra services for Move In/Out cleaning
  const extraServices = [
    "Clean interior and exterior of fridge, stove and microwave oven.",
    "Move the stove and fridge to clean their back.",
    "Clean interior and exterior of cupboards and cabinets.",
    "Clean windows and window sills.",
    "Wash walls.",
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <main>
        {/* 1. Hero Banner */}
        <div
          className="w-full py-16 sm:py-24 px-4 bg-cover bg-center"
          style={{
            backgroundColor: SECONDARY_BG,
            backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/19/00/17/broom-1837434_640.jpg')`,
          }}
        >
          <div className="max-w-7xl mx-auto text-center sm:text-left">
            <p
              className="text-xl font-medium"
              style={{ color: PRIMARY_PURPLE }}
            >
              MAIDS PARADE
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mt-2">
              Move out and Move in Cleaning Service
            </h1>
            <button
              className="mt-6 py-3 px-6 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:opacity-90 transform hover:scale-[1.005]"
              style={{ backgroundColor: PRIMARY_PURPLE }}
            >
              Book A Cleaning
            </button>
          </div>
        </div>

        {/* 2. Service Detail, Image, and Extra Services List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
            {/* Left Column: Text Content and List */}
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Moving In or Out of your Home?
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Moving can be very hectic and time consuming. Let us take care
                of all your cleaning needs, so you can focus on other moving
                tasks.
              </p>
              <p className="text-gray-600 mb-6 font-semibold leading-relaxed">
                In addition to our Basic Cleaning Services these are some of the
                more common extra services that we provide for Move In/Out
                Service:
              </p>

              {/* Bulleted List */}
              <ul className="list-none p-0 mb-8">
                {extraServices.map((item, index) => (
                  <ServiceListItem key={index}>{item}</ServiceListItem>
                ))}
              </ul>

              <p className="text-gray-600 mb-8 leading-relaxed">
                To ensure the thoroughness of your move-out clean, we require
                that you remove all furniture and moving materials prior to your
                cleaning.
              </p>

              <button className="py-3 px-6 text-gray-700 font-semibold border-2 border-gray-300 rounded-lg transition duration-300 hover:bg-gray-50 hover:border-purple-500">
                Book A Cleaning
              </button>
            </div>

            {/* Right Column: Image */}
            <div className="md:col-span-2 flex justify-center md:justify-end">
              <Image
                src={movingImage}
                alt="A clean, organized, and empty room ready for moving"
                className="w-full max-w-sm rounded-lg shadow-xl object-cover h-auto"
                width={400}
                height={250}
              />
            </div>
          </div>
        </div>

        {/* 3. General Inquiry CTA Section */}
        <div
          className="w-full py-16 text-center"
          style={{ backgroundColor: SECONDARY_BG }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            If you require anything else – Just ask!
          </h2>
          <button
            className="py-3 px-8 text-gray-800 font-semibold rounded-lg shadow-md transition duration-300 hover:opacity-90 transform hover:scale-[1.005] border-2 border-gray-400"
            style={{ backgroundColor: "#F9F9F9" }} // Light color for contrast
          >
            Contact Us
          </button>
        </div>
      </main>
    </div>
  );
}
