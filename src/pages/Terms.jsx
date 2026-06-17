import React from "react";
import { useSiteContent } from "../config/contentStore";

function Terms() {
  const content = useSiteContent();

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="mb-4 text-white">Terms & Conditions</h1>
          <p className="text-blue-50">Last updated: June 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 prose prose-lg">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Terms of Service</h2>
              <p className="text-gray-700">
                Welcome to {content.companyName}. These Terms & Conditions govern your access to and use of the website, mobile applications, and services made available by {content.companyName}. By using the Services, you agree to be bound by these terms.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">License and Use</h2>
              <p className="text-gray-700 mb-4">You may access our materials for personal, non-commercial use. You may not:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Reproduce or redistribute our content without permission</li>
                <li>Use the content for commercial purposes without prior approval</li>
                <li>Attempt to reverse engineer or exploit protected systems</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
              <p className="text-gray-700">If you have questions about these terms, please contact us through the details below.</p>
              <div className="mt-4 space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-gray-700"><strong>Email:</strong> {content.contactEmail}</p>
                <p className="text-gray-700"><strong>Phone:</strong> {content.phoneNumber}</p>
                <p className="text-gray-700"><strong>Address:</strong> {content.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Terms;
