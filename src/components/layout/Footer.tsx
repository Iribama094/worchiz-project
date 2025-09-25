import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, MailIcon, FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-5">
              <img src="/worchiz-logo.png" alt="Worchiz Nigeria Limited Logo" className="h-16 mr-3" />
            </Link>
            <p className="text-gray-300 mb-6">
              Luxury real estate and building solutions in Port Harcourt,
              delivering excellence and premium quality in every project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-5 text-secondary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-secondary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-5 text-secondary">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon size={20} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Aba Road, GRA Phase II, Port Harcourt, Rivers State,
                  Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={20} className="text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-300">08033424516, 07011521816</span>
              </li>
              <li className="flex items-start">
                <MailIcon size={20} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  lawrenceworgu74@gmail.com
                  <br />
                  lawrenceworguo@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Worchiz Nigeria Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;