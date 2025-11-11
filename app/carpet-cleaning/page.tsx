"use client";
import React from "react";
import { Mail, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define the primary color used throughout the component for the theme
const PRIMARY_PURPLE = "#6B46C1"; // Tailwind's purple-700 is close to the theme color
const LIGHT_GRAY_OVERLAY_COLOR = "rgba(235, 235, 235, 0.9)"; // Used to create the text backdrop in the hero

const CarpetCleaningPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* 1. HERO / BANNER SECTION - Using the requested code format */}
      <div
        className="w-full py-16 sm:py-24 px-4 sm:px-10 lg:px-20 bg-cover bg-center rounded-lg shadow-inner"
        style={{
          minHeight: "350px",
          // Applying the linear gradient and image placeholder
          backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/19/00/17/broom-1837434_640.jpg`,
        }}
        aria-label="Carpet Cleaning Services Banner"
      >
        <div className="max-w-7xl mx-auto text-left">
          <p className="text-xl font-medium tracking-widest text-gray-800">
            Freshner Cleaning Service
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mt-2 mb-6">
            Carpet Cleaning
          </h1>
          <Link
            href="/book-a-cleaning"
            className="py-3 px-8 text-white font-semibold inline-block rounded-lg shadow-lg transition duration-300 hover:opacity-90 transform hover:scale-[1.005] focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
            style={{ backgroundColor: PRIMARY_PURPLE }}
            onClick={() => console.log("Book A Cleaning clicked from Hero")}
          >
            Book A Cleaning
          </Link>
        </div>
      </div>

      {/* 2. MAIN CONTENT - CARPET CLEANING DETAILS */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 border-b-2 border-purple-500 pb-2">
          Carpet Cleaning
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text Content Column */}
          <div className="space-y-8 text-lg text-gray-600">
            {/* Paragraph 1: Pre-spray and Hot Water Extraction */}
            <p>
              We pre-spray your carpet and pre-condition high traffic areas and
              spots. We use a hot water extraction method (a crystal) to rinse
              out the pre-spray solution, while extracting dirt and moisture.
            </p>
            <p>
              Our state-of-the-art system offers powerful and deep clean suction
              to remove dirt. Combined with our natural cleaning products, the
              **hot water extraction method** allows us to clean your carpets in
              the most non-toxic and effective manner possible.
            </p>

            {/* Paragraph 2: Drying Time and Caution */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <p className="font-semibold text-gray-700 flex items-start">
                <Zap className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                <span>
                  Minimal moisture remains in the material thanks to our modern
                  cleaning equipment. Typically, drying time is between four and
                  eight hours. During this time, we recommend keeping small
                  children, pets, and shoes off the carpet to prevent immediate
                  soiling.
                </span>
              </p>
            </div>

            {/* Bottom Button */}
            <Link
              href="/book-a-cleaning"
              className="mt-6 border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
              onClick={() =>
                console.log("Book A Cleaning clicked from Content")
              }
            >
              Book A Cleaning
            </Link>
          </div>

          {/* Image Column */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="https://cdn.pixabay.com/photo/2017/05/23/16/23/soap-dispenser-2337697_640.jpg"
              alt="Close-up of a clean, intricately woven carpet"
              className="w-full max-w-lg h-auto object-cover rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION (CTA) SECTION - LIGHT GREEN */}
      <section className="bg-green-50 py-16 mt-16 shadow-inner rounded-t-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
            If you require anything else – Just ask!
          </h3>
          <Link
            href="/contact"
            className="border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50"
            onClick={() => console.log("Contact Us clicked")}
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer content removed as requested. */}
    </div>
  );
};

export default CarpetCleaningPage;
