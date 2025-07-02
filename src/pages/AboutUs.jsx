import { useState } from "react";

import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
      <div className="bg-white shadow-lg rounded-2xl max-w-3xl w-full p-10">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">About Us</h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to our community-driven <span className="font-semibold text-blue-600">Back2You</span> platform. We help you report and reclaim lost items efficiently. Whether you've lost or found something valuable, we're here to assist every step of the way.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our user-friendly platform offers features for reporting items, verifying ownership, and managing profiles. We ensure a safe and trustworthy environment with additional tools for overseeing site activity and user management.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          With Back2You, we aim to bring peace of mind to users by creating a system built on trust, responsibility, and efficient recovery.
        </p>

        <div className="mt-8 text-center">
          <a
            href="/contact"
            className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
