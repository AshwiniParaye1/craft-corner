import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "FEATURED",
    subTitle: "designs",
    bgColor: "bg-pink-light",
    textColor: "text-gray-800",
  },
  {
    id: 2,
    title: "BESTSELLERS",
    subTitle: "products",
    bgColor: "bg-mint-light",
    textColor: "text-gray-800",
  },
  {
    id: 3,
    title: "PREMIUM",
    subTitle: "collections",
    bgColor: "bg-peach-light",
    textColor: "text-gray-800",
  },
  {
    id: 4,
    title: "EXCLUSIVE",
    subTitle: "bundles",
    bgColor: "bg-purple-100",
    textColor: "text-gray-800",
  },
];

const Categories = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card group relative overflow-hidden rounded-xl"
          >
            <div
              className={`${category.bgColor} h-60 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 duration-300`}
            >
              <div className="text-center">
                <h3 className={`text-2xl font-bold ${category.textColor}`}>
                  {category.title}
                </h3>
                {category.subTitle && (
                  <p
                    className={`text-xl italic font-playfair ${category.textColor}`}
                  >
                    {category.subTitle}
                  </p>
                )}
              </div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
              <button className="px-6 py-2 bg-white text-gray-800 rounded-full hover:bg-pink-dark hover:text-white transition-colors flex items-center">
                Explore
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
