import {
  ChevronUp,
  HandHeart,
  MessageCircleDashed,
  MessageSquareDashed,
  MessageSquareText,
  Phone,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  const PRIMARY_PURPLE = "#6F42C1";
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-4 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Contact Info and Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-gray-700 pb-8 mb-8">
          {/* Left/Middle: Logo and Contact Info */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <HandHeart
                className="w-6 h-6"
                style={{ color: PRIMARY_PURPLE }}
              />
              <p
                className="text-2xl font-bold tracking-wider"
                style={{ color: PRIMARY_PURPLE }}
              >
                Freshner Cleaning Service
              </p>
            </div>
            <p className="text-gray-400 mb-2">
              The only cleaning services you will ever need.
            </p>

            <Link
              href="tel:+15876649766"
              className="flex items-center justify-center md:justify-start mt-4"
            >
              <Phone className="w-4 h-4 mr-2 text-gray-400" />
              <span className="text-lg font-semibold text-gray-300">
                +1 (587) 664-9766
              </span>
            </Link>
            <Link
              href="mailto:freshnercleaningservices@gmail.com"
              className="flex items-center justify-center md:justify-start mt-4"
            >
              <MessageSquareText className="w-4 h-4 mr-2 text-gray-400" />
              <span className="text-lg font-semibold text-gray-300">
                Freshnercleaningservices@gmail.com
              </span>
            </Link>
          </div>

          {/* Right: Book Service CTA */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-lg font-medium mb-4 text-gray-200">
              Interested in Our Service?
            </p>
            <Link
              href="/book-a-cleaning"
              className="py-3 px-6 text-white font-semibold rounded-lg shadow-xl transition duration-300 hover:opacity-90 transform hover:scale-[1.02]"
              style={{
                backgroundColor: PRIMARY_PURPLE,
                boxShadow: `0 4px 15px rgba(111, 66, 193, 0.5)`,
              }}
            >
              Book A Cleaning
            </Link>
          </div>
        </div>

        {/* Bottom Row: Copyright and Scroll to Top Button */}
        <div className="flex justify-between items-center pt-4">
          <p className="text-sm text-gray-500">
            Copyright &copy; {new Date().getFullYear()} FRESHNER CLEANING
            SERVICE. All Rights Reserved.
          </p>

          {/* Scroll to Top Button (matching the image reference) */}
          <button
            // onClick={scrollToTop}
            className="p-2 rounded-full transition duration-300 ease-in-out bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
            title="Scroll to Top"
          >
            <ChevronUp className="w-5 h-5 text-gray-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
