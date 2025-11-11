import Image from "next/image";
import {
  ShieldCheck,
  DollarSign,
  FlaskConical,
  HandHeart,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const PRIMARY_PURPLE = "#6F42C1";
  const serviceItems = [
    "Detailed cleaning of bathrooms and kitchens",
    "Washing of floors and cupboard exteriors",
    "Dusting of baseboards, pictures, lamp shades, window sills, furniture and light fixtures",
    "Complete vacuuming of every room",
    "Spot cleaning of walls... and more",
  ];

  const reasons = [
    {
      icon: ShieldCheck,
      title: "Reliable and Consistent",
      description:
        "Fresh is reliable and consistent, ensuring you get the same quality service every time.",
    },
    {
      icon: DollarSign,
      title: "Affordable",
      description:
        "Fresh is affordable, providing high-quality cleaning without breaking the bank.",
    },
    {
      icon: FlaskConical,
      title: "Green Cleaning",
      description:
        "We use green cleaning products, meaning we do not bring harsh chemicals to your home.",
    },
    {
      icon: HandHeart,
      title: "High Pride in Customer Service",
      description:
        "We take high pride in customer service and ensuring your complete satisfaction.",
    },
    {
      icon: Award,
      title: "Certified Maids",
      description:
        "Fresh screens, trains, and certifies all our maids for your peace of mind.",
    },
  ];

  return (
    <>
      <div
        style={{
          // Use a subtle background image with a strong overlay to focus on the text
          backgroundImage: `url(${"https://cdn.pixabay.com/photo/2021/06/04/17/10/broom-6310388_1280.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="fixed top-0 left-0 w-full -z-10 h-full"
      ></div>
      <section
        className="w-full overflow-hidden relative shadow-lg bg-black"
        style={{
          // Use a subtle background image with a strong overlay to focus on the text
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.7) 30%, rgba(249, 249, 251, 0.5) 100%), url(${"https://cdn.pixabay.com/photo/2021/06/04/17/10/broom-6310388_1280.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10 flex flex-col items-center text-center">
          {/* Branding/Logo Text */}
          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: PRIMARY_PURPLE }}
          >
            FRESHNER CLEANING SERVICES
          </h1>

          {/* Tagline */}
          <p className="mt-2 text-xl md:text-2xl font-light text-white">
            Sparkling home, Peaceful hearts
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* Primary Button: Our Services (Solid Purple) */}
            <Link
              href="/house-cleaning"
              className="py-3 px-8 text-white font-semibold rounded-lg shadow-xl transition duration-300 hover:opacity-90 transform hover:scale-[1.01]"
              style={{
                backgroundColor: PRIMARY_PURPLE,
                boxShadow: `0 4px 15px rgba(111, 66, 193, 0.5)`,
              }}
            >
              Our Services
            </Link>

            {/* Secondary Button: Book A Cleaning (Outline) */}
            <Link
              href="/book-a-cleaning"
              className="py-3 px-8 text-sm font-semibold rounded-lg transition duration-300 hover:bg-purple-50 transform hover:scale-[1.01] bg-white"
              style={{
                color: PRIMARY_PURPLE,
                borderColor: PRIMARY_PURPLE,
                border: "2px solid",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              Book A Cleaning
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Title */}
          <h2
            className="text-4xl font-semibold text-gray-800"
            style={{ color: PRIMARY_PURPLE }}
          >
            About Us
          </h2>

          {/* Description Text */}
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            FRESHNER CLEANING SERVICES offers a flexible and customized maid
            service at an affordable price, based on a free, no-obligation,
            in-home estimate. Professionally trained, bonded and insured staff
            work in teams of two to efficiently clean your home. They arrive in
            timely manner and bring all necessary cleaning equipment and
            supplies.
          </p>

          {/* Horizontal Divider Line */}
          <div
            className="mt-12 w-1/3 h-1 mx-auto rounded-full"
            style={{ backgroundColor: PRIMARY_PURPLE + "30" }}
          ></div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Text Content and Bullet Points */}
            <div className="space-y-6 lg:pr-12">
              {/* Title and Top Divider */}
              <div className="space-y-2">
                <h2
                  className="text-3xl sm:text-4xl font-semibold leading-tight"
                  style={{ color: PRIMARY_PURPLE }}
                >
                  Our regular professional cleaning service includes:
                </h2>
                <div
                  className="w-1/3 h-1 rounded-full"
                  style={{ backgroundColor: PRIMARY_PURPLE + "70" }}
                ></div>
              </div>

              {/* Bulleted Service List */}
              <ul className="mt-8 space-y-4 text-lg text-gray-700 list-disc pl-5">
                {serviceItems.map((item, index) => (
                  <li key={index} className="relative pl-2">
                    {/* Small purple line above the item text, mimicking the image */}
                    <div
                      className="absolute top-0 bottom-0 left-0 w-1"
                      style={{ backgroundColor: PRIMARY_PURPLE + "70" }}
                    ></div>
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Image and Divider */}
            <div className="mt-8 lg:mt-0 flex flex-col items-center">
              {/* Horizontal Line above the image, matching the image design */}
              <div
                className="w-full h-1 mb-8"
                style={{ backgroundColor: PRIMARY_PURPLE + "70" }}
              ></div>

              <Image
                src={
                  "https://cdn.pixabay.com/photo/2021/01/18/16/56/woman-5928696_1280.jpg"
                }
                alt="A smiling woman with cleaning gloves and a spray bottle, representing professional service."
                className="w-full h-auto max-w-md rounded-lg shadow-2xl object-cover transform transition duration-500 hover:scale-[1.02]"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="h-[50vh] bg-black opacity-60"></section>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Title */}
          <h2
            className="text-4xl font-semibold text-gray-800 mb-4"
            style={{ color: PRIMARY_PURPLE }}
          >
            A Team You Can Count On
          </h2>

          {/* Description Text */}
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            We train all our staff to ensure they understand proper cleaning
            techniques, equipment, and solutions. To add another level of
            protection for our customers, our cleaning teams are **bonded and
            insured**, which means that you don&apos;t have to worry if
            there&apos;s an accident at your home. This gives our customers
            peace of mind and is yet another reason to trust FRESHER CLEANING
            SERVICE with your home cleaning needs.
          </p>

          {/* Team Image */}
          <div className="mt-12 flex justify-center">
            <Image
              src={
                "https://cdn.pixabay.com/photo/2023/11/08/05/41/house-cleaning-8373938_1280.jpg"
              }
              alt="A team of uniformed, smiling professional cleaners."
              className="w-full h-auto max-w-2xl rounded-lg shadow-2xl object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title and Divider */}
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-2"
              style={{ color: PRIMARY_PURPLE }}
            >
              Top 5 Reasons People Choose Freshner Cleaning Service:
            </h2>
            <div
              className="w-1/4 h-1 mx-auto rounded-full"
              style={{ backgroundColor: PRIMARY_PURPLE + "50" }}
            ></div>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl shadow-lg transition duration-300 hover:shadow-xl hover:border-purple-300 bg-white"
              >
                <reason.icon
                  className="w-12 h-12 mb-4"
                  style={{ color: PRIMARY_PURPLE }}
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-base">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-16 flex justify-center">
            <Link
              href={"/house-cleaning"}
              className="py-3 px-8 text-sm font-semibold rounded-lg transition duration-300 hover:bg-purple-50 transform hover:scale-[1.02] bg-white border-2"
              style={{
                color: PRIMARY_PURPLE,
                borderColor: PRIMARY_PURPLE,
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              BOOK OUR SERVICES
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
