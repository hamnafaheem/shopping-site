'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setSuccessMessage('Your message has been sent successfully!');
      // Clear the message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col  bg-blue-100">
      <Navbar />
      <div className="flex-grow container mx-auto px-8 py-8 bg-blue-100"> {/* Add your desired background color */}
        <h1 className="text-4xl font-bold text-center mb-8 gradient-text">Contact Us</h1>
        {successMessage && (
          <div className="max-w-xl mx-auto mb-4 p-4 bg-blue-100 text-black-700 border border-blue-300 rounded-lg">
            {successMessage}
          </div>
        )}
        <form className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="6" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300">Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
