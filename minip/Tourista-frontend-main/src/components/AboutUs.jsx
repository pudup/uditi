import React from "react";
import { FaGithubAlt, FaEnvelope } from "react-icons/fa";

const AboutUs = () => {
  return (
      <div className="bg-gray-100 mt-14 space-y-3">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-700 mb-2">
              The project aims to develop a dynamic and user-friendly web
              application specifically designed for providing tourist packages
              across various destinations in India.
            </p>
            <p className="text-gray-700 mb-2">
              In today's travel-centric era, Tourista offers a seamless platform
              for travelers to explore, customize, and book travel packages that
              showcase India's rich cultural heritage, diverse landscapes, and
              unique experiences.
            </p>
            <p className="text-gray-700">
              The project addresses the growing demand for online travel
              management systems that cater to the specific needs and preferences
              of travelers exploring India.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Objective</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Create a robust online portal that allows users to browse, select,
                and book tourist packages effortlessly, focusing on destinations
                within India.
              </li>
              <li>
                Provide an interactive interface for users to explore detailed
                itineraries, pricing, and other relevant information related to
                Indian tourist destinations.
              </li>
              <li>
                Enable users to customize their travel plans based on preferences,
                including activities, accommodations, and transportation options
                within India.
              </li>
              <li>
                Enhance the overall user experience by offering a comprehensive
                platform tailored to Indian tourist destinations, thereby meeting
                the evolving needs of travelers.
              </li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Scope</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Develop front-end and back-end components for a responsive and
                efficient user experience, ensuring compatibility across devices
                and browsers.
              </li>
              <li>
                Implement features such as user registration and authentication,
                browsing and searching for tourist packages based on Indian
                destinations, and detailed itineraries with information about
                popular tourist spots and activities.
              </li>
              <li>
                Provide customization options for users to personalize their
                travel plans, including selecting add-ons, upgrading
                accommodations, and choosing transportation modes within India.
              </li>
              <li>
                Integrate secure booking and payment processing, ensuring a
                seamless and trustworthy transaction experience for users.
              </li>
              <li>
                Include user profile management, order history, and customer
                support features to enhance user satisfaction and engagement.
              </li>
            </ul>
          </section>
          <div className="bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-8">
                {/* Section 1 - Harsh */}
                <div className="bg-white shadow-md rounded-lg p-6 w-80">
                  <h2 className="text-2xl font-semibold mb-4">Harsh Mahajan</h2>
                  <p className="text-gray-700 mb-4">
                    Backend developer and project lead.
                  </p>
                  <div className="flex justify-around mt-4">
                    <a
                        href="https://github.com/harshmahajan2003"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-800 text-2xl"
                    >
                      <FaGithubAlt />
                    </a>
                    <a
                        href="mailto:hsmahajan_mc24@mc.vjti.ac.in"
                        className="text-slate-800 text-2xl"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
                {/* Section 2 - Jason */}
                <div className="bg-white shadow-md rounded-lg p-6 w-80">
                  <h2 className="text-2xl font-semibold mb-4">Jason Tauro</h2>
                  <p className="text-gray-700 mb-4">
                    Frontend developer and UI/UX designer.
                  </p>
                  <div className="flex justify-around mt-4">
                    <a
                        href="https://github.com/pudup/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-800 text-2xl"
                    >
                      <FaGithubAlt />
                    </a>
                    <a
                        href="mailto:jetauro_mc24@mc.vjti.ac.in"
                        className="text-slate-800 text-2xl"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
                {/* Section 3 - Uty */}
                <div className="bg-white shadow-md rounded-lg p-6 w-80">
                  <h2 className="text-2xl font-semibold mb-4">Utkarsh Khandelwal</h2>
                  <p className="text-gray-700 mb-4">
                    Requirement gathering and documentation lead.
                  </p>
                  <div className="flex justify-around mt-4">
                    <a
                        href="https://github.com/LughTuahDe/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-800 text-2xl"
                    >
                      <FaGithubAlt />
                    </a>
                    <a
                        href="mailto:urkhandelwal_mc24@mc.vjti.ac.in"
                        className="text-slate-800 text-2xl"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AboutUs;
