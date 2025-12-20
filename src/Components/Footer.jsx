import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
export const ROUTE_MAP = {
  "Who We Are": "/whoweare",
  "Courses": "/courses",
  "Careers": "/careers",
  "Partners": "/partners",
  "TalentWok": "/talentwok",
};

const SERVICE_CATEGORIES = [
  "Website Development",
  "Mobile App Development",
  "Software Development",
  "IT Outsourcing & Support",
];

const DIGITAL_MENU = [
  "Branding",
  "Graphic Design",
  "Digital Marketing",
  "Content Marketing",
  "Search Engine Optimization (SEO)",
];


const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-black text-white px-6 md:px-20 py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-14">
          <div className="flex gap-4">
            <img onClick={() => navigate("/")} src={logo} alt="Tecnowok" className="w-28" />
            <div>
              <h3 className="text-xl font-semibold">Tecnowok Solution</h3>
              <p className="text-sm text-gray-300 mt-2 max-w-sm">
                Empowering brands. Accelerating growth. Delivering excellence.
              </p>
              <p className="text-xs text-red-400 mt-3 font-medium">
               Innovative IT & Digital Solutions Worldwide
              </p>
            </div>
          </div>

          <div className="text-sm text-gray-300 md:text-right">
            <div>📧 info@tecnowok.com</div>
            <div>📞 +91-89397 87678</div>
            <div className="text-xs text-gray-400 mt-1">
              Tuticorin · Chennai · Bangalore · Global 
            </div>
          </div>
        </div>

        {/* Middle */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Services */}
          <div>
            <h4 className="text-red-500 text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {SERVICE_CATEGORIES.map((item) => (
                <li
                  key={item}
                  onClick={() => navigate(`/services/${slugify(item)}`)}
                  className="footer-link"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Digital */}
          <div>
            <h4 className="text-red-500 text-sm  font-semibold mb-4">Digital</h4>
            <ul className="space-y-2 text-gray-300">
              {DIGITAL_MENU.map((item) => (
                <li
                  key={item}
                  onClick={() => navigate(`/digital/${slugify(item)}`)}
                  className="footer-link  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-red-500 text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              {Object.entries(ROUTE_MAP).map(([label, path]) => (
                <li
                  key={label}
                  onClick={() => navigate(path)}
                  className={`footer-link ${
                    label === "" ? "text-red-400 font-medium" : ""
                  }`}
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-red-500 text-sm font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4 text-gray-300">
              <a href="#" className="hover:text-white"><FaLinkedin size={22} /></a>
              <a href="#" className="hover:text-white"><FaInstagram size={22} /></a>
              <a href="https://wa.me/918939787678"
                target="_blank" className="hover:text-white"><FaWhatsapp size={22} /></a>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks — subscription registered!");
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                className="px-3 py-2 bg-transparent border border-gray-700 rounded text-sm text-gray-200"
              />
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <div>
            © {new Date().getFullYear()} Tecnowok Solution.
          </div>
          <div>All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
}
