"use client";
import { MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const PRIMARY_PURPLE = "#6F42C1";
const PRIMARY_BLUE = "#00BFFF"; // A bright blue for the Submit button

// --- Types ---
interface ContactFormData {
  firstName: string;
  email: string;
  phone: string;
  message: string;
}

// --- 1. Generic Input Field Component (Reused/Updated from previous step) ---

interface InputFieldProps {
  label: string;
  name: keyof ContactFormData;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  required?: boolean;
  isTextArea?: boolean;
}

const InputField = ({
  label,
  name,
  type = "text",
  required = false,
  isTextArea = false,
  value,
  onChange,
}: InputFieldProps) => (
  <div className="mb-6">
    <label
      htmlFor={name}
      className="block text-gray-700 text-sm font-medium mb-2"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {isTextArea ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={
          onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void
        }
        required={required}
        rows={4}
        placeholder="Type your message here..."
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-300 transition duration-150 resize-none"
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
        required={required}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-300 transition duration-150"
      />
    )}
  </div>
);

// --- 2. Contact Form Component ---

const initialFormData: ContactFormData = {
  firstName: "",
  email: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name as keyof ContactFormData]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    alert("Thank you for contacting us! We will be in touch shortly.");
    setFormData(initialFormData); // Clear form after submission
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-xl shadow-2xl max-w-lg mx-auto my-12 border border-gray-100">
      {/* Contact Details Header, based on image provided */}
      <div className="text-center mb-8">
        <MapPin
          className="w-6 h-6 mx-auto mb-1"
          style={{ color: PRIMARY_PURPLE }}
        />
        <p className="text-sm font-medium text-gray-700 mb-2">
          101-B, 1026 16 AVE NW, CALGARY AB
        </p>
        <p className="text-xs text-gray-500 mb-4">T2M 0K6</p>

        <Phone
          className="w-6 h-6 mx-auto mb-1"
          style={{ color: PRIMARY_PURPLE }}
        />
        <p
          className="text-xl font-semibold mb-4"
          style={{ color: PRIMARY_PURPLE }}
        >
          587 664 9766
        </p>
        <h1 className="text-3xl font-bold text-gray-800 mt-6">Get In Touch</h1>
        <p className="text-gray-500 text-sm mt-2">
          We&apos;d love to hear from you. Send us a message!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Name */}
        <InputField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required={false}
        />

        {/* Email (Required as per image) */}
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />

        {/* Phone */}
        <InputField
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required={false}
        />

        {/* Message (Textarea) */}
        <InputField
          label="Let us know what you need help with..."
          name="message"
          isTextArea={true}
          value={formData.message}
          onChange={handleChange}
          required={false}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-8 text-white font-semibold rounded-lg shadow-md transition duration-300 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transform hover:scale-[1.005] flex items-center justify-center space-x-2"
          style={{
            backgroundColor: PRIMARY_BLUE,
            boxShadow: `0 4px 10px rgba(0, 191, 255, 0.4)`,
          }}
        >
          <Send className="w-5 h-5" />
          <span>SUBMIT</span>
        </button>
      </form>
    </div>
  );
}
