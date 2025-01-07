'use client';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

export default function InfoPage() {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => setShowContactForm(!showContactForm);

  return (
    <main className="p-6 max-w-screen-lg mx-auto">
        <br />
        <br />
        <hr style={{ height: "8px", visibility: "hidden" }} />
      <h1 className="text-3xl font-bold text-center mb-8">Stadium Booking Information</h1>

      {/* Flex container for side-by-side layout */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Business Hours Section */}
        <section className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
          <ul className="space-y-2">
            <li>Monday - Friday: 4:00 PM - 9:00 PM</li>
            <li>Saturday: 8:00 AM - 9:00 PM</li>
            <li>Sunday: 10:00 AM - 6:00 PM</li>
          </ul>
        </section>

        {/* Contact Us Section */}
        <section className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="space-y-4">
            <p>
              <FaPhone className="inline mr-2" />
              <a href="tel:+1636-733-4100" className="text-blue-500 hover:underline">
                +1 (636) 733-4100
              </a>
            </p>
            <p>
              <FaEnvelope className="inline mr-2" />
              <a href="mailto:sumnerjonathan@rsdmo.org" className="text-blue-500 hover:underline">
                sumnerjonathan@rsdmo.org
              </a>
            </p>
            <p>
              <FaGlobe className="inline mr-2" />
              <a
                href="https://lafayette.rsdmo.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                https://lafayette.rsdmo.org/
              </a>
            </p>
          </div>

          <button
            onClick={toggleContactForm}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 mt-4"
          >
            {showContactForm ? 'Hide Contact Form' : 'Show Contact Form'}
          </button>

          {showContactForm && (
            <form className="mt-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
                required
              />
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
              >
                Send Message
              </button>
            </form>
          )}
        </section>
      </div>

      {/* Location Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Location</h2>
        <p>Our stadium is located at:</p>
        <p className="font-bold">17050 Clayton Rd, Wildwood, MO, USA</p>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2037.6582369322114!2d-90.638122146671!3d38.596213338995604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88603e3cd46c2c85%3A0x5426222ae71dcbd2!2sLafayette%20High%20School!5e0!3m2!1sen!2sus!4v1736146807470!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
  