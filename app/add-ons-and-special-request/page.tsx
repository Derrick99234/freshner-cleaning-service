import Image from "next/image";
import React from "react";
// The 'next/image' import has been removed to resolve the build error.

// Define the custom colors used in the original design for clarity
const PRIMARY_PURPLE = "#6B46C1";
const LIGHT_BANNER_BG = "#F8F7F2";

// Inline SVG for the checklist bullet/icon
const CheckmarkIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke={PRIMARY_PURPLE}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// Component for a checklist item, using the custom SVG
const ChecklistItem = ({ children, isBold = false }) => (
  <li
    className={`flex items-start space-x-3 text-gray-700 ${
      isBold ? "font-semibold" : "font-normal"
    }`}
  >
    <div className="pt-1">
      <CheckmarkIcon />
    </div>
    <p className="leading-relaxed">{children}</p>
  </li>
);

const AddonsPage = () => {
  // Note: Standard <img> tags are used here with explicit width/height
  // and Tailwind object-cover to maintain the desired layout performance
  // without requiring the unavailable 'next/image' component.

  return (
    <div className="bg-white min-h-screen">
      {/* Custom styles for colors and shadow using Tailwind arbitrary values for fidelity */}
      <style jsx global>{`
        .text-primary-purple {
          color: ${PRIMARY_PURPLE};
        }
        .bg-primary-purple {
          background-color: ${PRIMARY_PURPLE};
        }
        .bg-banner-light {
          background-color: ${LIGHT_BANNER_BG};
        }
        .button-shadow {
          box-shadow: 0 4px 6px -1px rgba(107, 70, 193, 0.4),
            0 2px 4px -1px rgba(107, 70, 193, 0.2);
        }
      `}</style>

      {/* Hero Banner Section (Page Title) */}
      <header className="bg-banner-light h-64 md:h-80 flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <h1 className="text-2xl sm:text-3xl font-light text-primary-purple uppercase tracking-widest">
            MAIDS PARADE
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-2">
            Add ons and Special request
          </h2>
          <button className="mt-6 px-6 py-3 bg-primary-purple text-white font-semibold rounded shadow-lg hover:opacity-90 transition button-shadow">
            Book A Cleaning
          </button>
        </div>
        {/* Background element using standard <img> */}
        <Image
          src={`https://placehold.co/800x600/${PRIMARY_PURPLE.substring(
            1
          )}/FFFFFF?text=Cleaning+Supplies`}
          alt="Cleaning products background graphic"
          width={800} // Explicit width to reserve space
          height={600} // Explicit height to reserve space
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
          className="object-cover opacity-20 mix-blend-multiply"
        />
      </header>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Text Content */}
            <div className="lg:pr-10 order-2 lg:order-1">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                Add ons and Special request
              </h3>
              <p className="text-xl font-medium text-gray-600 mb-6">
                You need something extra?
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have something we need to pay special attention to during
                your cleaning, let us know when you call or book online by
                adding special cleaning requests to your basic clean and select
                from the list below.
              </p>
            </div>
            {/* Image Placeholder using standard <img> */}
            <div className="rounded-xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image
                src={`https://placehold.co/600x400/${PRIMARY_PURPLE.substring(
                  1
                )}/FFFFFF?text=Clean+Interior`}
                alt="A clean, organized room interior."
                width={600} // Explicit width
                height={400} // Explicit height
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maids Parade Add-ons Checklist Section */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-8 md:p-12">
            <h4 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Maids Parade Add-ons Checklist
            </h4>

            <ul className="space-y-4">
              <ChecklistItem>
                Inside of oven cleaned based on your preferred method
              </ChecklistItem>
              <ChecklistItem>Inside fridge cleaned</ChecklistItem>
              <ChecklistItem>Windows inside cleaned</ChecklistItem>
              <ChecklistItem>
                Cabinets, closets and drawers inside cleaned
              </ChecklistItem>
              <ChecklistItem>Baseboards wiped</ChecklistItem>
              <ChecklistItem>Blinds washed</ChecklistItem>
              <ChecklistItem>Walls washed</ChecklistItem>
              <ChecklistItem>Dishes washed</ChecklistItem>
              <ChecklistItem>
                Inspection for damages, toiletries & supplies
              </ChecklistItem>
              <ChecklistItem isBold>
                Laundry of linens & towels - Platinum
              </ChecklistItem>
            </ul>

            <div className="mt-10 text-center">
              <button className="px-8 py-3 bg-primary-purple text-white font-semibold rounded shadow-lg hover:opacity-90 transition button-shadow">
                Book A Cleaning
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Laundry Service Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image Placeholder for Laundry (Second on mobile, first on desktop) */}
            <div className="rounded-xl overflow-hidden shadow-2xl order-first lg:order-last">
              <Image
                src={`https://placehold.co/600x400/${PRIMARY_PURPLE.substring(
                  1
                )}/FFFFFF?text=Folding+Laundry`}
                alt="A person folding laundry."
                width={600} // Explicit width
                height={400} // Explicit height
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text Content and Detail Box */}
            <div className="order-last lg:order-first">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Laundry Service Details
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                We wash, dry and fold linen and towels. We will put a load of
                laundry into wash upon our arrival and move it to the dryer and
                fold it. Washer & dryer instructions and laundry detergent must
                be provided. Maximum 1 load of laundry will be completed.
              </p>

              {/* Laundry Detail Box */}
              <div className="p-6 md:p-8 border border-gray-300 rounded-lg bg-gray-50 shadow-inner">
                <h4 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">
                  Laundry of linens & towels - Premium
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  We wash linen and towels and transfer them into a dryer.
                  Laundry will be left in the dryer. Washer & dryer instructions
                  and laundry detergent must be provided.
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  <span className="font-bold text-primary-purple">
                    Laundry folded
                  </span>{" "}
                  – We fold garments that have been washed and dried prior to
                  our arrival.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-bold text-primary-purple">
                    Additional laundry
                  </span>{" "}
                  – If laundry of various garments other than linen & towels is
                  required, please call us to discuss how we can help.
                </p>
              </div>

              <button className="mt-8 px-6 py-3 border border-primary-purple text-primary-purple font-semibold rounded hover:bg-primary-purple hover:text-white transition w-full md:w-auto">
                Book A Cleaning
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Separator */}
      <div className="h-2 bg-primary-purple max-w-7xl mx-auto mb-16 rounded-full"></div>
    </div>
  );
};

export default AddonsPage;
