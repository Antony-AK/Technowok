import React from "react";
import logo from "../assets/logo.png"; // update path if needed
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-20 py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Top area: logo + tagline */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <div className="flex items-start gap-4">
            <img src={logo} alt="Tecnowok Logo" className="w-28 h-auto object-contain" />

            <div className="leading-tight">
              <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                Tecnowok Solution
              </h3>
              <p className="text-sm text-gray-300 max-w-xl mt-1">
                Empowering brands. Accelerating growth. Delivering excellence.
              </p>

              <p className="text-xs text-red-400 mt-3 font-medium">
                Innovative IT & Digital Solutions for Businesses Worldwide
              </p>
            </div>
          </div>

          {/* Quick contact block */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <a href="mailto:info@tecnowok.com" className="text-sm text-gray-200 hover:text-white">info@tecnowok.com</a>
            <a href="tel:+918939787678" className="text-sm text-gray-200 hover:text-white">+91-89397-87678</a>
            <div className="text-xs text-gray-400 mt-2 text-left md:text-right">
              <div>Tuticorin · Chennai · Bangalore</div>
            </div>
          </div>
        </div>

        {/* Middle area: columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          {/* Services */}
          <div>
            <h4 className="text-red-500 text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">IT Automation</li>
              <li className="hover:text-white cursor-pointer">Mobile & Web Apps</li>
              <li className="hover:text-white cursor-pointer">E-commerce</li>
              <li className="hover:text-white cursor-pointer">Digital Marketing</li>
              <li className="hover:text-white cursor-pointer">Branding</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-red-500 text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Team</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Our Work</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-red-500 text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">SLA & Support</li>
            </ul>
          </div>

          {/* Connect & subscribe */}
          <div>
            <h4 className="text-red-500 text-sm font-semibold mb-4">Connect</h4>
      <div className="flex gap-4 mb-4">

  {/* LinkedIn */}
  <a
    href="#"
    aria-label="LinkedIn"
    className="text-gray-300 hover:text-white transition"
  >
    <FaLinkedin className="w-6 h-6" />
  </a>

  {/* Instagram */}
  <a
    href="#"
    aria-label="Instagram"
    className="text-gray-300 hover:text-white transition"
  >
    <FaInstagram className="w-6 h-6" />
  </a>

  {/* WhatsApp */}
  <a
    href="#"
    aria-label="WhatsApp"
    className="text-gray-300 hover:text-white transition"
  >
    <FaWhatsapp className="w-6 h-6" />
  </a>

</div>


            <form
              onSubmit={(e) => {
                e.preventDefault();
                // you can hook this up to your API or newsletter provider
                alert("Thanks — subscription registered!");
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="px-3 py-2 bg-transparent border border-gray-700 rounded outline-none text-gray-200 placeholder-gray-500"
                required
              />
              <button type="submit" className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider with glowing border look */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-700/30 to-transparent mb-8" />

        {/* Bottom row: contact, address, copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-gray-400 text-sm">
          <div className="space-y-1">
            <div className="font-medium text-white">Tecnowok Solution - Your Go-To For IT Solutions</div>
            <div>Innovative IT & Digital Solutions for Businesses Worldwide</div>
          </div>

          <div className="space-y-1 text-gray-300 md:text-right">
            <div>📧 info@tecnowok.com</div>
            <div>📞 +91-89397-87678</div>
            <div>📍 Tuticorin · Chennai · Bangalore</div>
          </div>

          <div className="text-gray-500 text-xs md:text-right">
            <div>© {new Date().getFullYear()} Tecnowok Solution</div>
            <div>All Rights Reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
