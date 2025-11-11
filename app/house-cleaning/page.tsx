import Image from "next/image";
import React from "react";

// --- Constants ---
const PRIMARY_PURPLE = "#6F42C1";
const SECONDARY_BG = "#F0EBE9"; // Light beige background color from the hero image

// --- Utility Components ---

/** Renders a single list item in the service checklist. */
const ChecklistItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start mb-2 text-sm text-gray-700">
    <svg
      className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
      style={{ color: PRIMARY_PURPLE }}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
    {children}
  </li>
);

/** Renders a full column of the checklist. */
const ChecklistColumn = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div className="p-4 border border-gray-200 rounded-lg h-full">
    <h3 className="text-lg font-bold mb-4" style={{ color: PRIMARY_PURPLE }}>
      {title}
    </h3>
    <ul className="list-none p-0">
      {items.map((item, index) => (
        <ChecklistItem key={index}>{item}</ChecklistItem>
      ))}
    </ul>
  </div>
);

// --- Main Service Page Component ---

export default function HouseCleaningPage() {
  // Mock image URL to simulate the look of the uploaded image
  const houseImage =
    "https://cdn.pixabay.com/photo/2014/02/17/13/18/cleaning-268107_640.jpg";
  const estimateImage =
    "https://cdn.pixabay.com/photo/2022/08/17/05/50/plate-7391607_640.jpg";

  // Service details for the three columns
  const bathroomItems = [
    "Tub and shower cleaned and sanitized",
    "Sinks and counter tops cleaned and sanitized",
    "Mirror cleaned and shined",
    "Toilet bowl, seat and tank sanitized",
    "Countertops and back splash cleaned and sanitized",
    "Countertop items moved and cleaned",
    "Vanity cabinet exteriors cleaned",
    "Floors cleaned",
    "Light fixtures cleaned",
    "Floors vacuumed and washed",
    "Garbage removed",
  ];

  const kitchenItems = [
    "Appliances exteriors cleaned",
    "Microwave interior and exterior cleaned",
    "Stove features removed and polished",
    "Sinks and counter tops cleaned and sanitized",
    "Counter top items moved and cleaned",
    "Cabinet doors cleaned",
    "Table and chairs cleaned",
    "Floors vacuumed and washed",
    "Garbage removed",
    "Dusting and removal of cobwebs",
  ];

  const throughoutHomeItems = [
    "Furniture and shelves dusted (excluding art and fragile items)",
    "Picture frames/Glass dusted and cleaned",
    "Remove cob webs in corners/ceiling",
    "Floors vacuumed",
    "Window sills/ledges dusted",
    "Lamps and ornaments dusted",
    "Baseboards and Chair rails dusted",
    "Wall marks removed",
    "Stairs/hallways cleaned and shined",
    "Furniture vacuumed (including under cushions)",
    "Empty/fill garbage containers",
    "Wood/Vinyl/Tile floors washed",
    "Garbage removed",
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
              Freshner Cleaning Service
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mt-2">
              House Cleaning
            </h1>
          </div>
        </div>

        {/* 2. Service Detail and Image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
            {/* Left Column: Text Content */}
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                House Cleaning
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our staff provides a flexible home cleaning service program to
                suit your specific needs. Our office staff can help create a
                great deal in creating a customized program for you. The entire
                crew is trained to provide a level of quality work that can be
                customized to your home, cleaning all or some of it. This will
                ensure great detail in cleaning your house. We will provide our
                customers with a quote on pricing, as we are very exact.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We usually require an initial deep cleaning in order to
                establish recurring service. Our initial cleaning is a thorough
                deep clean to get your home to the level where we can easily and
                efficiently maintain our high-quality cleaning standards.
              </p>
              <button
                className="py-3 px-6 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:opacity-90 transform hover:scale-[1.005]"
                style={{ backgroundColor: PRIMARY_PURPLE }}
              >
                Book A Cleaning
              </button>
            </div>

            {/* Right Column: Image */}
            <div className="md:col-span-2 flex justify-center md:justify-end">
              <Image
                src={houseImage}
                alt="A clean, modern house"
                className="w-full max-w-sm rounded-lg shadow-xl object-cover h-auto"
                width={400}
                height={250}
              />
            </div>
          </div>
        </div>

        {/* 3. The Detailed Checklist (3 Columns) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ChecklistColumn title="Bathrooms" items={bathroomItems} />
            <ChecklistColumn title="Kitchen" items={kitchenItems} />
            <ChecklistColumn
              title="Throughout the home"
              items={throughoutHomeItems}
            />
          </div>

          {/* Disclaimer text below the checklist */}
          <div className="mt-10 max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-500 italic">
              Freshner Cleaning Service uses scrub brushes on faucets, shower
              backs, drains, window sills, baseboards and cabinet doors (on
              request).
            </p>
            <p className="text-sm text-gray-500 italic mt-2">
              Kitchen, bathroom and entrance floor areas are mopped. All other
              hard areas are vacuumed or hand-washed depending on size. Specific
              arrangements can be made to hand wash all areas regardless of the
              size. We are always happy to use your floor-safe and preferred
              cleaning product if you prefer than ours for your floors (please
              let us know).
            </p>
            <button className="mt-6 py-2 px-6 text-gray-700 font-semibold border-2 border-gray-300 rounded-lg transition duration-300 hover:bg-gray-50 hover:border-purple-500">
              Book A Cleaning
            </button>
          </div>
        </div>

        {/* 4. Get An Estimate CTA Section */}
        <div className="bg-gray-100 mt-12 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
              {/* Left Column: Text and CTA */}
              <div className="md:col-span-3 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Get An Estimate
                </h2>
                <p className="text-gray-600 mb-6">
                  Want to receive an estimate of your full house?
                  <br />
                  Choose the service that will provide you an easy and
                  affordable price.
                </p>
                <button
                  className="py-3 px-6 text-white font-semibold rounded-lg shadow-lg transition duration-300 hover:opacity-90 transform hover:scale-[1.005]"
                  style={{ backgroundColor: PRIMARY_PURPLE }}
                >
                  House Cleaning Estimate
                </button>
              </div>

              {/* Right Column: Image */}
              <div className="md:col-span-2 flex justify-center md:justify-end">
                <Image
                  src={estimateImage}
                  alt="Cleaning supplies and calendar"
                  className="w-full max-w-xs rounded-lg shadow-xl object-cover h-auto"
                  width={300}
                  height={180}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
