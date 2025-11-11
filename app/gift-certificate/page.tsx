"use client";
import React, { useState } from "react";
import { Gift } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define the primary color used throughout the component for the theme
const PRIMARY_PURPLE = "#6B46C1"; // Tailwind's purple-700
const DARK_PURPLE = "#553C9A"; // Slightly darker for the form section
const LIGHT_GRAY_OVERLAY_COLOR = "rgba(235, 235, 235, 0.9)"; // Used to create the text backdrop in the hero

const GiftCertificatePage: React.FC = () => {
  const [formData, setFormData] = useState({
    to: "",
    recipientEmail: "",
    from: "",
    yourEmail: "",
    comments: "",
    discountCode: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Gift Card Form Submitted:", formData);
    // In a real application, this data would be sent to an API endpoint for processing.
    alert("Gift Card Form submitted! Check the console for data.");
  };

  const handleBookClick = () => {
    console.log("Book A Cleaning clicked from Hero");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* 1. HERO / BANNER SECTION - Gift Certificate */}
      <div
        className="w-full py-16 sm:py-24 px-4 sm:px-10 lg:px-20 bg-cover bg-center rounded-lg shadow-inner"
        style={{
          minHeight: "350px",
          // Applying the linear gradient and image placeholder
          backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/19/00/17/broom-1837434_640.jpg`,
        }}
        aria-label="Gift Certificate Services Banner"
      >
        <div className="max-w-7xl mx-auto text-left">
          <p className="text-xl font-medium tracking-widest text-gray-800">
            Freshner Cleaning Service
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mt-2 mb-6">
            Gift Certificate
          </h1>
          <Link
            href="/book-a-cleaning"
            className="py-3 px-8 text-white font-semibold rounded-lg shadow-lg transition duration-300 hover:opacity-90 transform hover:scale-[1.005] focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
            style={{ backgroundColor: PRIMARY_PURPLE }}
            onClick={handleBookClick}
          >
            Book A Cleaning
          </Link>
        </div>
      </div>

      {/* 2. MAIN CONTENT - Text Description */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600">
          <p>
            Everyone loves to come home to a sparkling clean house; that’s why
            Freshner Cleaning Service gift certificates are the perfect gift for
            any special occasion. Our house cleaning gift certificates give the
            recipient the gift of relaxing, dusting, and providing a welcome
            treat for any special person in your life.
          </p>
          <p className="font-semibold text-gray-700">
            Wouldn’t it be romantic to give your spouse or significant other a
            clean house and time to relax? Also, show how much you care about
            your colleagues, business associates and friends! Our house cleaning
            gift certificates leave a lasting impression on your business
            associates that lasts longer than a fruit basket with practical
            cleaning service gift certificates.
          </p>
          <p>
            With a Freshner Cleaning Service gift certificate, your friend or
            relative can book a home cleaning at their convenience. Gift cards
            can be applied to any of our home cleaning services.
          </p>
        </div>
      </section>

      {/* 3. GIFT CARD FORM AND IMAGE SECTION */}
      <section className="bg-white shadow-2xl rounded-xl mx-auto mb-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT COLUMN: Gift Card Form */}
          <div
            className="p-8 sm:p-12 lg:p-16 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
            style={{ backgroundColor: DARK_PURPLE }}
          >
            <h2 className="text-3xl font-extrabold text-white mb-8 flex items-center">
              <Gift className="w-8 h-8 mr-3" />
              Gift Card Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* TO */}
              <div>
                <label
                  htmlFor="to"
                  className="block text-sm font-medium text-purple-200 mb-1"
                >
                  To
                </label>
                <input
                  type="text"
                  id="to"
                  name="to"
                  value={formData.to}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900"
                  required
                />
              </div>

              {/* RECIPIENT EMAIL */}
              <div>
                <label
                  htmlFor="recipientEmail"
                  className="block text-sm font-medium text-purple-200 mb-1"
                >
                  Recipient Email
                </label>
                <input
                  type="email"
                  id="recipientEmail"
                  name="recipientEmail"
                  value={formData.recipientEmail}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900"
                  required
                />
              </div>

              {/* FROM */}
              <div>
                <label
                  htmlFor="from"
                  className="block text-sm font-medium text-purple-200 mb-1"
                >
                  From
                </label>
                <input
                  type="text"
                  id="from"
                  name="from"
                  value={formData.from}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900"
                  required
                />
              </div>

              {/* YOUR EMAIL */}
              <div>
                <label
                  htmlFor="yourEmail"
                  className="block text-sm font-medium text-purple-200 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="yourEmail"
                  name="yourEmail"
                  value={formData.yourEmail}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900"
                  required
                />
              </div>

              {/* COMMENTS */}
              <div>
                <label
                  htmlFor="comments"
                  className="block text-sm font-medium text-purple-200 mb-1"
                >
                  Comments
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={3}
                  value={formData.comments}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900"
                ></textarea>
              </div>

              {/* DISCOUNT CODE */}
              <div>
                <label
                  htmlFor="discountCode"
                  className="block text-sm font-medium text-purple-200 mb-1"
                >
                  Discount Code
                </label>
                <input
                  type="text"
                  id="discountCode"
                  name="discountCode"
                  value={formData.discountCode}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full py-3 mt-6 text-white font-semibold rounded-lg shadow-xl transition duration-300 hover:opacity-95 transform hover:scale-[1.005] focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50"
                style={{ backgroundColor: PRIMARY_PURPLE }}
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="overflow-hidden rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none">
            <Image
              src="https://cdn.pixabay.com/photo/2014/12/17/16/54/clean-571679_640.jpg"
              alt="A collection of beautifully wrapped gifts"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftCertificatePage;
