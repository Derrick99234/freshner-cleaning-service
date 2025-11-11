import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define the custom primary color for the Freshner Cleaning Service brand
const PRIMARY_PURPLE = "#6B46C1"; // Used for buttons and accents
const LIGHT_BANNER_BG = "#EBE3DB"; // Approximate light beige background color

// 1. Define Props type for the ServiceButton
interface ServiceButtonProps {
  children: React.ReactNode;
  isPrimary?: boolean;
}

// A reusable button component with different styles
const ServiceButton: React.FC<ServiceButtonProps> = ({
  children,
  isPrimary = true,
}) => {
  const baseClasses =
    "rounded-lg font-semibold transition duration-300 transform hover:scale-[1.02] active:scale-[0.98]";

  // Conditional styling based on the 'isPrimary' prop
  const styleClasses = isPrimary
    ? `bg-[${PRIMARY_PURPLE}] text-white px-8 py-3 shadow-lg hover:shadow-xl`
    : `border-2 border-[${PRIMARY_PURPLE}] text-[${PRIMARY_PURPLE}] px-6 py-3 hover:bg-gray-50`;

  return (
    <Link href="/book-a-cleaning" className={`${baseClasses} ${styleClasses}`}>
      {children}
    </Link>
  );
};

// Main Component for the Maid Services Page
const MaidServices: React.FC = () => {
  return (
    // Note: The parent div acts as the main body content, fitting within your existing layout.
    <div className="bg-white min-h-screen antialiased">
      {/* 1. Hero Banner Section */}

      <div
        className="w-full py-16 sm:py-24 px-4 bg-cover bg-center"
        style={{
          backgroundColor: LIGHT_BANNER_BG,
          backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/19/00/17/broom-1837434_640.jpg`,
        }}
      >
        <div className="max-w-7xl mx-auto text-center sm:text-left">
          <p className="text-xl font-medium" style={{ color: PRIMARY_PURPLE }}>
            Freshner Cleaning Service
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mt-2">
            Maid Services
          </h1>
          <Link
            href="/book-a-cleaning"
            className="mt-6 py-3 px-6 inline-block text-white font-semibold rounded-lg shadow-md transition duration-300 hover:opacity-90 transform hover:scale-[1.005]"
            style={{ backgroundColor: PRIMARY_PURPLE }}
          >
            Book A Cleaning
          </Link>
        </div>
      </div>

      {/* 2. Main Services Content Block */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                Maid Services
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                After a long day of work, running errands and maybe dealing with
                rambunctious kids, there’s not always enough time to maintain
                that sparkling level of clean you’d like. The housekeepers at
                **Freshner Cleaning Service are your solution**.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are your own go-to cleaning professionals that you can trust
                time and time again. We also offer maid services throughout
                Calgary and other surrounding areas.
              </p>
              <div className="pt-4">
                <ServiceButton isPrimary={false}>Book A Cleaning</ServiceButton>
              </div>
            </div>

            {/* Right Column: Image Placeholder */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={`https://cdn.pixabay.com/photo/2016/11/19/00/17/broom-1837434_640.jpg`}
                alt="A maid sitting next to a vacuum cleaner in a clean room."
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA Banner Section */}
      <section className="my-12 md:my-16">
        <div className="bg-green-100/50 py-16 md:py-24 border-t-8 border-b-8 border-green-200/50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h4 className="text-3xl font-bold text-gray-800 mb-6">
              If you require anything else – just ask!
            </h4>
            <ServiceButton isPrimary={false}>Contact Us</ServiceButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaidServices;
