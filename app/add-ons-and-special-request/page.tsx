import React from "react";
import Image from "next/image";
import Link from "next/link";
// The 'next/image' import has been removed to resolve the build error.

// Define the custom colors used in the original design for clarity
const PRIMARY_PURPLE = "#6B46C1";
const SECONDARY_BG = "#F0EBE9";

interface ChecklistItemProps {
  children: React.ReactNode; // Defines children as valid React content
  isBold?: boolean;
}

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
const ChecklistItem: React.FC<ChecklistItemProps> = ({
  children,
  isBold = false,
}) => (
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

export default function AddonsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner Section (Page Title) */}
      <div
        className="w-full py-16 sm:py-24 px-4 bg-cover bg-center"
        style={{
          backgroundColor: SECONDARY_BG,
          backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/19/00/17/broom-1837434_640.jpg')`,
        }}
      >
        <div className="max-w-7xl mx-auto text-center sm:text-left">
          <p className="text-xl font-medium" style={{ color: PRIMARY_PURPLE }}>
            Freshner Cleaning Service
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mt-2">
            Add ons and Special request
          </h1>
          <Link
            href="/book-a-cleaning"
            className="mt-6 inline-block py-3 px-6 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:opacity-90 transform hover:scale-[1.005]"
            style={{ backgroundColor: PRIMARY_PURPLE }}
          >
            Book A Cleaning
          </Link>
        </div>
      </div>

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
                src={`https://cdn.pixabay.com/photo/2016/11/19/00/17/broom-1837434_640.jpg`}
                alt="A clean, organized room interior."
                width={600} // Explicit width
                height={400} // Explicit height
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Freshner Cleaning Service Add-ons Checklist Section */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-8 md:p-12">
            <h4 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Freshner Cleaning Service Add-ons Checklist
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
              <Link
                href="/book-a-cleaning"
                className="px-8 py-3 bg-primary-purple text-black border font-semibold rounded shadow-lg hover:opacity-90 transition button-shadow"
              >
                Book A Cleaning
              </Link>
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
                src={`https://cdn.pixabay.com/photo/2017/09/22/07/28/home-2774669_640.jpg`}
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

              <Link
                href="/book-a-cleaning"
                className="mt-8 inline-block px-6 py-3 border border-primary-purple text-black font-semibold rounded hover:bg-black hover:text-white transition w-full md:w-auto"
              >
                Book A Cleaning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Separator */}
      {/* <div className="h-2 bg-primary-purple max-w-7xl mx-auto mb-16 rounded-full"></div> */}
    </div>
  );
}
