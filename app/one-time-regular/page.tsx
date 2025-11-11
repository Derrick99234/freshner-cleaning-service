import React from "react";
import Image from "next/image";

// --- Constants ---
const PRIMARY_PURPLE = "#6F42C1";
const SECONDARY_BG = "#F0EBE9"; // Light beige background color from the hero image

/**
 * A reusable component for a service block (One-Time or Regular Maintenance).
 * It includes a title, description, image, and a "Book A Cleaning" button.
 */
interface ServiceBlockProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverseLayout?: boolean;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverseLayout = false,
}) => {
  const layoutClasses = reverseLayout
    ? "md:grid-cols-2 md:order-last" // Reverse on desktop (text on right, image on left)
    : "md:grid-cols-2"; // Default (text on left, image on right)

  const textClasses = reverseLayout ? "md:col-start-2" : "md:col-start-1";
  const imageWrapperClasses = reverseLayout
    ? "md:col-start-1 md:row-start-1"
    : "md:col-start-2";

  return (
    <div
      className={`grid grid-cols-1 gap-8 items-center py-10 md:py-16 ${layoutClasses}`}
    >
      {/* Text Content */}
      <div className={textClasses}>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <button className="py-3 px-6 text-gray-700 font-semibold border-2 border-gray-300 rounded-lg transition duration-300 hover:bg-gray-50 hover:border-purple-500">
          Book A Cleaning
        </button>
      </div>

      {/* Image */}
      <div className={`flex justify-center ${imageWrapperClasses}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full max-w-lg rounded-lg shadow-xl object-cover h-auto"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

// --- Estimate CTA Component ---
const EstimateCTA = () => {
  // Mock image for the "Get An Estimate" section (house with pool)
  const estimateImage =
    "https://cdn.pixabay.com/photo/2016/02/20/19/15/sponge-for-washing-1212612_640.jpg";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        {/* Left Column: Text and Button */}
        <div className="md:col-span-3">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get An Estimate
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Do you need an estimate of your full house?
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Freshner Cleaning Service will provide you an ease and affordable
            price
          </p>
          <button
            className="py-3 px-6 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:opacity-90 transform hover:scale-[1.005]"
            style={{ backgroundColor: PRIMARY_PURPLE }}
          >
            House Cleaning Estimate
          </button>
        </div>

        {/* Right Column: Image */}
        <div className="md:col-span-2 flex justify-center md:justify-end">
          <Image
            src={estimateImage}
            alt="Modern house exterior with swimming pool, illustrating luxury cleaning."
            className="w-full max-w-sm rounded-lg shadow-xl object-cover h-auto"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function CompleteHouseCleaningPage() {
  // Mock image URLs
  const oneTimeImage =
    "https://cdn.pixabay.com/photo/2014/02/17/14/03/vacuum-cleaner-268161_640.jpg";
  const maintenanceImage =
    "https://cdn.pixabay.com/photo/2016/01/27/20/24/brush-1165256_640.jpg";

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
              Complete House Cleaning
            </h1>
            <button
              className="mt-6 py-3 px-6 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:opacity-90 transform hover:scale-[1.005]"
              style={{ backgroundColor: PRIMARY_PURPLE }}
            >
              Book A Cleaning
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 2. One-Time or As-Needed Cleaning Section (Text left, Image right) */}
          <ServiceBlock
            title="One-Time or As-Needed Cleaning"
            description="Whether you need to come by before a special event, clean up your home before the holidays or you just need a break, we can help. You tell us what you would like and we will take care of it."
            imageSrc={oneTimeImage}
            imageAlt="A spotless, modern living room after a one-time cleaning service."
            reverseLayout={false}
          />

          {/* Horizontal Divider */}
          <hr className="my-8 border-gray-200" />

          {/* 3. Regular Maintenance Section (Text right, Image left - Reversed layout) */}
          {/* Note: In the uploaded image, Regular Maintenance text is on the right, and the image is on the left, which is achieved by setting reverseLayout to true here */}
          <ServiceBlock
            title="Regular Maintenance"
            description="Regular maintenance service frequency can be weekly, bi-weekly, tri-weekly or every four-weeks. Recurring service typically includes everything listed under Initial Cleaning."
            imageSrc={maintenanceImage}
            imageAlt="Clean, minimalist interior with bright light."
            reverseLayout={true}
          />
        </div>

        {/* 4. Get An Estimate CTA Section */}
        <div className="mt-8">
          <hr
            className="border-t-4 border-b-0"
            style={{ borderColor: PRIMARY_PURPLE, opacity: 0.1 }}
          />
          <EstimateCTA />
          <hr
            className="border-t-4 border-b-0"
            style={{ borderColor: PRIMARY_PURPLE, opacity: 0.1 }}
          />
        </div>
      </main>
    </div>
  );
}
