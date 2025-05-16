import { Instagram, Facebook, Twitter, MapPin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

const ProfileCard = () => {
  return (
    <div className="container mx-auto py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 font-playfair">
        Meet the Creator
      </h2>

      <div className="max-w-md mx-auto">
        <Card className="bg-gradient-to-br from-pink-light to-pink-dark rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Avatar className="w-32 h-32 border-4 border-white shadow-md mb-4">
              <AvatarImage
                src="https://images.unsplash.com/photo-1561406636-b80293969660?auto=format&fit=crop&w=800&q=80"
                alt="Sarah"
              />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-bold text-white mb-1">Sarah</h3>
            <div className="flex items-center justify-center mb-3 text-white text-xs">
              <MapPin size={14} className="mr-1" />
              <span>Los Angeles, CA</span>
            </div>
            <p className="text-white text-sm mb-4">
              Digital Creator & Designer
            </p>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                className="text-white hover:text-pink-100 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-white hover:text-pink-100 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-white hover:text-pink-100 transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            I'm passionate about creating beautiful and functional designs for
            creative entrepreneurs. With over 5 years of experience, I craft
            high-quality digital products that help elevate your projects. Every
            product is designed with care and attention to detail, ensuring you
            get the best quality for your creative needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
