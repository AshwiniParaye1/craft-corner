import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import {
  CloudSun,
  ShoppingCart,
  BookIcon,
  ImageIcon,
  Paintbrush,
  LayoutIcon,
  FileIcon,
  PackageIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

const products = [
  {
    id: 1,
    name: "Digital Planner",
    price: 15.0,
    image: "/digital-planner.jpeg",
    category: "Digital Tools",
    icon: <CloudSun size={16} className="text-blue-500" />,
    color: "bg-gradient-to-br from-blue-200 to-blue-300",
  },
  {
    id: 2,
    name: "Design Templates",
    price: 10.0,
    image: "/design-template.jpeg",
    category: "Templates",
    icon: <LayoutIcon size={16} className="text-orange-500" />,
    color: "bg-gradient-to-br from-peach-light to-peach-DEFAULT",
  },
  {
    id: 3,
    name: "Website Kit",
    price: 89.0,
    image: "/website-kit.png",
    category: "Digital Tools",
    icon: <CloudSun size={16} className="text-purple-500" />,
    color: "bg-gradient-to-br from-purple-200 to-purple-300",
  },
  {
    id: 4,
    name: "Brand Package",
    price: 29.0,
    image: "/brand-pkg.jpeg",
    category: "Templates",
    icon: <FileIcon size={16} className="text-mint-dark" />,
    color: "bg-gradient-to-br from-mint-light to-mint-DEFAULT",
  },
  {
    id: 5,
    name: "Social Media Kit",
    price: 19.99,
    image: "/media-kit.jpeg",
    category: "Social Media",
    icon: <CloudSun size={16} className="text-pink-500" />,
    color: "bg-gradient-to-br from-pink-200 to-pink-300",
  },
  {
    id: 6,
    name: "Printable Art",
    price: 7.99,
    image: "/printable-art.jpeg",
    category: "Printables",
    icon: <ImageIcon size={16} className="text-yellow-500" />,
    color: "bg-gradient-to-br from-yellow-100 to-yellow-200",
  },
  {
    id: 7,
    name: "eBook Template",
    price: 12.99,
    image: "/ebook-template.jpeg",
    category: "Templates",
    icon: <BookIcon size={16} className="text-blue-400" />,
    color: "bg-gradient-to-br from-blue-100 to-blue-200",
  },
  {
    id: 8,
    name: "Logo Kit",
    price: 24.99,
    image: "/logo-kit.jpeg",
    category: "Digital Tools",
    icon: <Paintbrush size={16} className="text-green-500" />,
    color: "bg-gradient-to-br from-green-100 to-green-200",
  },
  {
    id: 9,
    name: "Font Collection",
    price: 18.5,
    image: "/font.jpeg",
    category: "Digital Tools",
    icon: <FileIcon size={16} className="text-purple-400" />,
    color: "bg-gradient-to-br from-purple-100 to-purple-200",
  },
  {
    id: 10,
    name: "Planner Bundle",
    price: 32.0,
    image: "/planner.jpeg",
    category: "Printables",
    icon: <PackageIcon size={16} className="text-pink-400" />,
    color: "bg-gradient-to-br from-pink-100 to-pink-200",
  },
];

const Products = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  // Extract unique categories
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ] as string[];

  // Filter products based on active tab
  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((product) => product.category === activeTab);

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Creative Digital Products
          </h2>
          <p className="text-sm text-gray-600">
            Beautiful resources for your creative projects
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100 p-1 rounded-full">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-6 py-2 rounded-full data-[state=active]:bg-pink-dark data-[state=active]:text-white"
                >
                  {category === "all" ? "All Products" : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden rounded-xl shadow-md border-none bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="h-48 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                          />
                        </div>
                        <div className="absolute top-3 left-3">
                          <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                            {product.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-5">
                        <h3 className="font-semibold text-gray-800 text-lg mb-1">
                          {product.name}
                        </h3>
                        <p className="text-pink-dark font-medium text-lg mb-4">
                          ${product.price.toFixed(2)}
                        </p>

                        <Button className="w-full bg-pink-dark hover:bg-pink-dark/90 text-white rounded-full py-2 transition-colors">
                          <ShoppingCart size={16} className="mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-2 border-pink-dark text-pink-dark hover:bg-pink-100/50 px-8 py-2 rounded-full"
          >
            View All Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
