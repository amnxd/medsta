"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [showModal, setShowModal] = useState(true);
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-teal-100 min-h-[80vh] flex flex-col justify-center items-center text-center p-6">
      <div className="z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-blue-800 tracking-tight leading-tight">
          Healthcare, <span className="text-teal-600">Your Way.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-blue-900">
          Healthcare in India is fragmented, inconvenient, and expensive. <span className="font-semibold text-teal-700">Medsta</span> solves this by unifying doctors, labs, medicines, physiotherapists, and transport services into one seamless platform.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-full shadow-lg hover:from-blue-700 hover:to-teal-600 transition-all font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-300">Pre-Register Now</button>
          <button className="bg-white border border-blue-600 text-blue-700 px-8 py-3 rounded-full shadow hover:bg-blue-50 transition-all font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-200">Join as Provider</button>
          <button className="bg-gray-100 text-blue-700 px-8 py-3 rounded-full shadow hover:bg-gray-200 transition-all font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-100">Learn More</button>
        </div>
        {/* Demo Search Bar */}
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center max-w-xl mx-auto mb-6">
          <input disabled className="w-full md:w-72 px-4 py-2 rounded-full border border-blue-200 bg-white text-blue-700 placeholder:text-blue-300 focus:outline-none" placeholder="Search: Doctors | Tests | Medicines | Services (Demo)" />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full disabled:opacity-60 font-semibold" disabled>Search</button>
        </div>
        <div className="text-sm text-blue-500 mb-2">Geo-location-based availability preview (Demo)</div>
      </div>
      {/* Pre-Login Modal */}
      {showModal && (
        <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full relative border border-blue-100">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-blue-600 text-2xl font-bold" onClick={() => setShowModal(false)}>&times;</button>
            <h2 className="text-2xl font-bold mb-3 text-blue-800">Pre-Register for Early Access</h2>
            <form className="flex flex-col gap-4">
              <input type="email" placeholder="Email" className="border border-blue-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" required />
              <input type="tel" placeholder="Phone Number" className="border border-blue-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" required />
              <select className="border border-blue-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option>Preferred Language</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Bengali</option>
                <option>Tamil</option>
                <option>Telugu</option>
                <option>Marathi</option>
                <option>Other</option>
              </select>
              <button type="submit" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 rounded-full hover:from-blue-700 hover:to-teal-600 transition-all font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-300">Pre-Register</button>
            </form>
            <div className="text-xs text-blue-400 mt-3">We’ll notify you when Medsta launches!</div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
