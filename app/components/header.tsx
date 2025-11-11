"use client";
import Link from "next/link";
import React, { useState } from "react";

// --- Placeholder for a generic menu/close icon (since react-icons can't be imported) ---
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);
const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
// --- End Placeholder Icons ---

// Define the purple color based on the image provided
const PRIMARY_PURPLE = "#6F42C1"; // Approximation of the logo color

// Navigation data structure
interface NavItem {
  name: string;
  href: string;
  dropdown?: NavItem[];
}

const NAV_LINKS: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Our Services",
    href: "#services",
    dropdown: [
      { name: "House Cleaning", href: "/house-cleaning" },
      { name: "Move In/Move Out", href: "/move-in-move-out" },
      { name: "One Time/Regular", href: "/one-time-regular" },
      { name: "Vacation Rental", href: "/vacation-rental" },
      {
        name: "Add Ons and Special Request",
        href: "/add-ons-and-special-request",
      },
      { name: "Maid Services", href: "/maid-services" },
      { name: "Carpet Cleaning", href: "/carpet-cleaning" },
      { name: "Gift Certificate", href: "/gift-certificate" },
    ],
  },
  { name: "Book A Cleaning", href: "/book-a-cleaning" },
  { name: "Get a Quote", href: "/get-a-quote" },
  { name: "Contact", href: "/contact" },
];

// Dropdown Menu Component
const ServiceDropdown: React.FC<{ items: NavItem[] }> = ({ items }) => (
  <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-2xl rounded-md border border-gray-100 z-50">
    {items.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-700 transition duration-150 text-sm font-medium border-b border-gray-50 last:border-b-0"
      >
        {item.name}
      </a>
    ))}
  </div>
);

// Main Header Component
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceHovered, setIsServiceHovered] = useState(false);

  const logoStyle = { color: PRIMARY_PURPLE };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand Area - Updated for Freshner Cleaning Service */}
          <Link
            href="/"
            className="flex flex-col items-start font-serif leading-none"
          >
            <span
              className="text-3xl font-bold tracking-tight"
              style={logoStyle}
            >
              FRESHER
            </span>
            <span
              className="text-xl font-medium tracking-wide -mt-1"
              style={logoStyle}
            >
              CLEANING SERVICE
            </span>
            <span
              className="text-xs italic font-normal tracking-wider mt-1"
              style={logoStyle}
            >
              Experience the Fresh Difference
            </span>
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden lg:flex space-x-8 h-full items-center text-gray-700 font-medium">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative flex items-center h-full"
                onMouseEnter={() => link.dropdown && setIsServiceHovered(true)}
                onMouseLeave={() => link.dropdown && setIsServiceHovered(false)}
              >
                <a
                  href={link.href}
                  className={`py-6 px-1 transition duration-150 hover:text-purple-700 `}
                >
                  {link.name}
                </a>
                {link.dropdown && isServiceHovered && (
                  <ServiceDropdown items={link.dropdown} />
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button (Hidden on Desktop) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-purple-700 transition duration-150"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content (Appears below the header) */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3 border-t border-gray-100">
          {NAV_LINKS.map((link) => (
            <div key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-700"
              >
                {link.name}
              </a>
              {/* Mobile Services Dropdown (if needed) */}
              {link.dropdown && link.name === "Our Services" && (
                <div className="ml-4 space-y-1 border-l-2 border-purple-200 pl-4">
                  {link.dropdown.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-purple-700 rounded-md"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
