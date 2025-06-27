
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">BB</span>
            </div>
            <div>
              <span className="font-bold text-xl">Bay Bike Shop</span>
              <p className="text-sm text-gray-400">Tracy, CA</p>
            </div>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/12095552453"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <div className="text-sm text-gray-400 text-center md:text-right">
            <p>© 2024 Bay Bike Shop. All rights reserved.</p>
            <p className="text-xs">3180 Jerrold Zanzi Ln, Tracy CA 95377</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
