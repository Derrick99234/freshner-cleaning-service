import Image from "next/image";

export default function ContentBlock() {
  // Placeholder image for the maid/cleaning setup
  const maidImageUrl =
    "https://cdn.pixabay.com/photo/2021/01/18/16/56/woman-5928694_1280.jpg";
  const PRIMARY_PURPLE = "#6F42C1";
  const PRIMARY_PURPLE_STYLE = { color: PRIMARY_PURPLE };
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Text Content and Button */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">
              Maid Services
            </h2>

            <p className="text-gray-600 leading-relaxed">
              After a long day of work, running errands and maybe dealing with
              rambunctious kids, there&apos;s not always enough time to maintain
              that sparkling level of clean you&apos;d like. The housekeepers at{" "}
              <strong style={PRIMARY_PURPLE_STYLE}>
                Freshner Cleaning Service
              </strong>{" "}
              are your solution.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We are your own go-to cleaning professionals that you can trust
              time and time again. We also offer maid services throughout
              Calgary and other surrounding areas.
            </p>

            {/* Call to Action Button - White/Outline style as seen in the image */}
            <button
              className="py-3 px-6 text-sm font-semibold rounded-lg transition duration-200 mt-6"
              style={{
                color: PRIMARY_PURPLE,
                borderColor: PRIMARY_PURPLE,
                border: "1px solid",
                backgroundColor: "white",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
              }}
            >
              Book A Cleaning
            </button>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <Image
              src={maidImageUrl}
              alt="Professional Maid sitting next to cleaning equipment"
              className="w-full h-auto max-w-lg rounded-lg shadow-xl object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
