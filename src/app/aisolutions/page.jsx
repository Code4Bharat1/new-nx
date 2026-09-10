import AISolutions from "@/components/Aisolutions/Aisolutions";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";
import Hero from "@/app/components/Hero";

export const metadata = {
  title: "AI Solutions | NEXCORE ALLIANCE LLP",
  description: "Next-generation AI solutions and bionics technology.",
};

const Page = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />  
      {/* Hero section with background visual */}
      <Hero />
      {/* Full AI Solutions page content */}
      <AISolutions />
      <Footer />
    </div>
  );
};

export default Page;