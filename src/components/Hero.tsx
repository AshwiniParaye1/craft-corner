import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="bg-peach-light hero-pattern py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 flex justify-center relative">
            <div className="bg-white rounded-2xl p-10 border-dashed border-2 border-gray-300 shadow-sm relative">
              <div className="absolute -top-5 -right-5">
                <img
                  src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='48' height='48'%3E%3Cpath fill='%23F7ACBC' d='M12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z'/%3E%3Ccircle fill='%23F39C7D' cx='12' cy='12' r='3'/%3E%3C/svg%3E"
                  alt="Flower decoration"
                  className="w-14 h-14 animate-float"
                />
              </div>
              <div className="absolute -left-4 -bottom-4">
                <img
                  src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='40' height='40'%3E%3Cpath fill='%2381D8D0' d='M12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z'/%3E%3Ccircle fill='%23FFBB98' cx='12' cy='12' r='3'/%3E%3C/svg%3E"
                  alt="Flower decoration"
                  className="w-12 h-12 animate-float"
                />
              </div>
              <div className="text-center">
                <h2 className="text-6xl font-bold mb-3">
                  <span className="text-pink-dark">CREATIVE</span>
                  <br />
                  <span className="text-mint-dark">RESOURCES</span>
                </h2>
                <p className="text-2xl font-playfair text-accent italic mt-2 mb-6 text-yellow-600">
                  for your projects
                </p>
                <Button className="bg-pink-dark hover:bg-pink text-white px-8 py-2 rounded-md font-medium">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex justify-center">
              <img
                src="/creative-resources.jpeg"
                alt="Creative workspace"
                className="rounded-lg shadow-lg max-w-full md:max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
