import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full bg-pink-100 py-2">
        <div className="container mx-auto text-center text-sm font-medium text-pink-dark">
          FREE SHIPPING ON ALL DIGITAL PRODUCTS
        </div>
      </div>

      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Search size={20} />
            </button>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center">
              <h1 className="text-4xl font-playfair font-bold">
                <span className="text-pink-dark">Craft</span>
                <span className="text-mint-dark">Corner</span>
              </h1>
            </div>
            <p className="text-sm text-gray-500 mt-1 tracking-widest">
              CREATIVE DESIGNS & TEMPLATES
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-pink-100 rounded-full transition">
              <User size={20} />
            </button>
            <button className="p-2 hover:bg-pink-100 rounded-full transition relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-pink-dark text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button
              className="p-2 hover:bg-pink-100 rounded-full transition md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-b border-gray-100 shadow-sm">
        <div className="container mx-auto">
          <nav
            className={`${
              mobileMenuOpen ? "flex flex-col py-4" : "hidden md:flex"
            } md:items-center md:justify-center md:space-x-10 md:py-3`}
          >
            <a
              href="#"
              className="text-gray-700 hover:text-pink-dark font-medium text-sm py-2 md:py-0 border-b-2 border-transparent hover:border-pink-dark transition-all duration-200"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-dark font-medium text-sm py-2 md:py-0 border-b-2 border-transparent hover:border-pink-dark transition-all duration-200"
            >
              SHOP
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-dark font-medium text-sm py-2 md:py-0 border-b-2 border-transparent hover:border-pink-dark transition-all duration-200"
            >
              COLLECTIONS
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-dark font-medium text-sm py-2 md:py-0 border-b-2 border-transparent hover:border-pink-dark transition-all duration-200"
            >
              ABOUT
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-pink-dark font-medium text-sm py-2 md:py-0 border-b-2 border-transparent hover:border-pink-dark transition-all duration-200"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-dark font-medium text-sm py-2 md:py-0 border-b-2 border-transparent hover:border-pink-dark transition-all duration-200"
            >
              CONTACT
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
