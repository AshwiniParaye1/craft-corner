import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <ProfileCard />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
