import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Small Business Owner",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    content:
      "These templates have completely transformed my brand's online presence! The designs are gorgeous, unique, and so easy to customize. Worth every penny!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Freelance Designer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    content:
      "As a designer myself, I appreciate the attention to detail in these products. They've saved me so much time and my clients are always impressed with the results.",
  },
  {
    id: 3,
    name: "Jessica Patel",
    role: "Content Creator",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    content:
      "I've purchased many digital products online, but these are by far the best quality. The customer service is exceptional too - quick responses and so helpful!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-peach-light py-16">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            What Customers Say
          </h2>
          <p className="text-gray-600">Real reviews from happy customers</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="rounded-full w-24 h-24 object-cover border-4 border-pink-light"
                />
              </div>
              <div>
                <p className="italic text-gray-700 mb-4">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-gray-800 hover:bg-pink-dark hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-gray-800 hover:bg-pink-dark hover:text-white transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? "bg-pink-dark" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
