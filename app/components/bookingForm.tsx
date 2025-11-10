"use client";
import { Calendar } from "lucide-react";
import React, { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  cleaningType: string;
  bedrooms: string;
  hardFloors: string;
  bathroom: string;
  pets: string;
  size: string;
  levels: string;
  scheduleCleaning: string;
}

// Define the shape of the generic change handler
type ChangeHandler = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => void;

// --- 1a. Input Field Component (Moved Outside BookingForm) ---

interface InputFieldProps {
  label: string;
  name: keyof FormData;
  value: string;
  onChange: ChangeHandler;
  type?: string;
  required?: boolean;
  children?: React.ReactNode;
}

const InputField = ({
  label,
  name,
  type = "text",
  required = false,
  children,
  value,
  onChange,
}: InputFieldProps) => (
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-medium mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children ? (
      children
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-300 transition duration-150"
      />
    )}
  </div>
);

// --- 1b. Select Field Component (Moved Outside BookingForm) ---

interface SelectFieldProps {
  label: string;
  name: keyof FormData;
  options: string[];
  value: string;
  onChange: ChangeHandler;
}

const SelectField = ({
  label,
  name,
  options,
  value,
  onChange,
}: SelectFieldProps) => (
  // Use InputField as a wrapper for the label and layout
  <InputField label={label} name={name} value={value} onChange={onChange}>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-300 transition duration-150 cursor-pointer"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </InputField>
);

// --- 2. Booking Form Component (Main Component) ---

const initialFormData: FormData = {
  fullName: "",
  email: "",
  cleaningType: "One-Time",
  bedrooms: "1",
  hardFloors: "no",
  bathroom: "1",
  pets: "no",
  size: "upto 600",
  levels: "1",
  scheduleCleaning: "",
};

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const PRIMARY_PURPLE = "#6F42C1";
  const PRIMARY_BLUE = "#36A2EB";

  const cleaningTypes = [
    "One-Time",
    "Regular Maintenance",
    "Move in/Move out",
    "Vacation Rental",
    "Post Construction",
  ];

  const bedroomOptions = ["1", "2", "3", "4", "5+"];
  const bathroomOptions = ["1", "1.5", "2", "2.5", "3", "3.5", "4+"];
  const yesNoOptions = ["no", "yes"];
  const sizeOptions = [
    "upto 600",
    "601 - 1000",
    "1001 - 1500",
    "1501 - 2000",
    "2001 - 3000",
    "3001+",
  ];
  const levelOptions = ["1", "2", "3+"];

  // Generic change handler for all inputs (text and select)
  const handleChange: ChangeHandler = (e) => {
    const { name, value } = e.target;
    // The type assertion 'as keyof FormData' is safe here because we defined name in the JSX to match FormData keys
    setFormData((prev) => ({ ...prev, [name as keyof FormData]: value }));
  };

  // Specific change handler for radio buttons (for cleaningType)
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, cleaningType: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Booking request simulated. Check the console for data!");
    // setFormData(initialFormData); // Uncomment to clear form after submission
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-xl shadow-2xl max-w-xl mx-auto my-12 border border-gray-100">
      <h2
        className="text-3xl font-bold text-center mb-8"
        style={{ color: PRIMARY_PURPLE }}
      >
        Book Your Cleaning Estimate
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name and Email */}
        <InputField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required={true}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />

        {/* Type of Cleaning Required (Radio Group) */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-4">
            Type of cleaning required
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {cleaningTypes.map((type) => (
              <div key={type} className="flex items-center">
                <input
                  type="radio"
                  id={type.replace(/\s/g, "-")}
                  name="cleaningType"
                  value={type}
                  checked={formData.cleaningType === type}
                  onChange={handleRadioChange}
                  className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  style={{ color: PRIMARY_PURPLE }}
                />
                <label
                  htmlFor={type.replace(/\s/g, "-")}
                  className="ml-2 block text-sm font-normal text-gray-700 cursor-pointer"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Bedrooms and Bathrooms (2-column layout on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <SelectField
            label="Bedrooms"
            name="bedrooms"
            options={bedroomOptions}
            value={formData.bedrooms}
            onChange={handleChange}
          />
          <SelectField
            label="Bathroom"
            name="bathroom"
            options={bathroomOptions}
            value={formData.bathroom}
            onChange={handleChange}
          />
        </div>

        {/* Hard Surface Floors and Pets (2-column layout on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <SelectField
            label="Hard surface floors in bedrooms"
            name="hardFloors"
            options={yesNoOptions}
            value={formData.hardFloors}
            onChange={handleChange}
          />
          <SelectField
            label="Pets"
            name="pets"
            options={yesNoOptions}
            value={formData.pets}
            onChange={handleChange}
          />
        </div>

        {/* Size and Levels (2-column layout on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <SelectField
            label="Size (sq ft)"
            name="size"
            options={sizeOptions}
            value={formData.size}
            onChange={handleChange}
          />
          <SelectField
            label="Levels"
            name="levels"
            options={levelOptions}
            value={formData.levels}
            onChange={handleChange}
          />
        </div>

        {/* Schedule Cleaning (Date Input) */}
        <InputField
          label="Schedule Cleaning"
          name="scheduleCleaning"
          type="date"
          value={formData.scheduleCleaning}
          onChange={handleChange}
          required={true}
        >
          <div className="relative">
            <input
              type="date"
              name="scheduleCleaning"
              value={formData.scheduleCleaning}
              onChange={handleChange}
              required={true}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-300 transition duration-150 pr-10"
            />
            {/* Calendar icon added for aesthetic appeal on platforms that don't show a native date picker */}
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </InputField>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-8 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:opacity-90 transform hover:scale-[1.005]"
          style={{
            backgroundColor: PRIMARY_BLUE,
            boxShadow: "0 4px 10px rgba(54, 162, 235, 0.4)",
          }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
