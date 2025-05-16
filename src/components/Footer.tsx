const Footer = () => {
  return (
    <footer>
      <div className="bg-mint-light py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-bold text-gray-800 mb-4">About Us</h3>
            <p className="text-sm text-gray-600 mb-4">
              CraftCorner creates beautiful digital products to help you grow
              your business and stand out online.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-dark">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-dark">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-dark">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-dark">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-dark">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-dark">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-dark">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-dark">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-pink-dark">
                Instagram
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-dark">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-dark">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-4">
        <div className="container mx-auto text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} CraftCorner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
