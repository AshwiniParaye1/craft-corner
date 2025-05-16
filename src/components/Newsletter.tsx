import { Button } from "./ui/button";

const Newsletter = () => {
  return (
    <div className="bg-mint-light newsletter-bg py-16">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 uppercase">
            Subscribe
          </h2>
          <p className="text-xl font-playfair text-gray-600 italic mb-6">
            we send cute emails
          </p>

          <div className="relative mb-6 max-w-md mx-auto">
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='60' height='60'%3E%3Cpath fill='%23FFFFFF' d='M12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z'/%3E%3Ccircle fill='%23F7ACBC' cx='12' cy='12' r='2'/%3E%3C/svg%3E"
              alt="Flower decoration"
              className="absolute -top-12 -left-12 animate-float"
            />
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='40' height='40'%3E%3Cpath fill='%23FFBB98' d='M12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z'/%3E%3Ccircle fill='%23FFFFFF' cx='12' cy='12' r='2'/%3E%3C/svg%3E"
              alt="Flower decoration"
              className="absolute -bottom-8 -right-8 animate-float"
            />
          </div>

          <p className="text-gray-600 mb-6">
            Be the first to know about new collections and exclusive offers.
          </p>

          <div className="flex flex-col sm:flex-row w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="flex-grow px-4 py-2 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-dark mb-2 sm:mb-0"
            />
            <Button className="bg-pink-dark hover:bg-pink text-white px-6 py-2 rounded-r">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
