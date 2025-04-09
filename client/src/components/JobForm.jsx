import React, { useState } from "react";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../utils/SummaryApi";

const JobForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    applicationDate: new Date().toISOString().substr(0, 10),
    link: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const { company, role, status, applicationDate, link, notes } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormError(""); // Clear any previous errors
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    try {
      console.log(formData);

      const response = await Axios({ ...SummaryApi.addJob, data: formData });
      if (response.status == 201) {
        toast.success("Form Submitted Sucessfully");
      }
      setFormData({
        company: "",
        role: "",
        status: "Applied",
        applicationDate: new Date().toISOString().substr(0, 10),
        link: "",
        notes: "",
      });
    } catch (error) {
      console.error("Error adding job:", error);
      toast.error("Error adding job:", error);
      setFormError("Failed to add job application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Add New Job Application
      </h2>

      {formError && (
        <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-sm text-red-700">
          {formError}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={company}
              onChange={onChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="e.g. Google, Microsoft, etc."
              required
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Job Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={role}
              onChange={onChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="e.g. Software Engineer, Data Analyst, etc."
              required
            />
          </div>

          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Application Status
            </label>
            <select
              id="status"
              name="status"
              value={status}
              onChange={onChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="applicationDate"
              className="block text-sm font-medium text-gray-700"
            >
              Application Date
            </label>
            <input
              type="date"
              id="applicationDate"
              name="applicationDate"
              value={applicationDate}
              onChange={onChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="link"
            className="block text-sm font-medium text-gray-700"
          >
            Job Posting URL
          </label>
          <input
            type="url"
            id="link"
            name="link"
            value={link}
            onChange={onChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="https://example.com/job-posting"
          />
          <p className="mt-1 text-xs text-gray-500">
            Optional: Link to the original job posting
          </p>
        </div>

        <div>
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-gray-700"
          >
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows="3"
            value={notes}
            onChange={onChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="Any additional notes about this application..."
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </>
            ) : (
              "Add Job Application"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
