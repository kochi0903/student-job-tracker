import React from "react";
import {
  FaFileAlt,
  FaChartBar,
  FaCheckCircle,
  FaCalendarAlt,
  FaBell,
  FaPlus,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <main className="space-y-8">
        {/* Hero Section */}
        <div className="bg-indigo-600 text-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-10 sm:p-12 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-indigo-700 opacity-10 pointer-events-none" />
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h1 className="text-4xl font-bold mb-6">
                Land Your Dream Job, Effortlessly.
              </h1>
              <p className="text-lg text-indigo-100 mb-8">
                Organize your job search, track your progress, and stay ahead of
                the competition with JobTrack.
              </p>
              <button
                onClick={() => navigate("add-job")}
                className="bg-white text-indigo-600 rounded-md py-3 px-6 font-semibold hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Get Started for Free
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-200">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-3 mb-3">
                <FaFileAlt className="text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Centralized Application Tracking
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Keep all your job applications in one organized place. Easily
                add new applications and track their status.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-200">
              <div className="bg-green-100 text-green-600 rounded-full p-3 mb-3">
                <FaChartBar className="text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Visual Progress Dashboard
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Get a clear overview of your job search progress with intuitive
                charts and summaries.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-200">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3 mb-3">
                <FaCalendarAlt className="text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Interview Scheduling
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Schedule and manage your interviews effectively. Set reminders
                and keep track of important details.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-200">
              <div className="bg-yellow-100 text-yellow-600 rounded-full p-3 mb-3">
                <FaBell className="text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Smart Notifications
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Receive timely notifications for upcoming interviews,
                application deadlines, and follow-ups.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-200">
              <div className="bg-red-100 text-red-600 rounded-full p-3 mb-3">
                <FaCheckCircle className="text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Offer Management
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Track job offers, compare benefits, and make informed decisions
                about your future.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-200">
              <div className="bg-purple-100 text-purple-600 rounded-full p-3 mb-3">
                <FaPlus className="text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Easy Application Input
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Quickly add new job applications with all the necessary details.
                Streamline your data entry process.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
