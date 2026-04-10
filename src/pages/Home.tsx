import { Link } from "react-router-dom";
import { Building2, Users, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ImageSlider from "../components/ImageSlider";
import PartnerSlider from "../components/PartnerSlider";
import heroSection1 from "../assets/heroSection1.jpg";
import heroSection2 from "../assets/heroSection2.jpg";
import heroSection3 from "../assets/heroSection3.jpg";
import heroSection4 from "../assets/heroSection4.jpg";
import heroSection5 from "../assets/heroSection5.jpg";
import heroSection6 from "../assets/herosection6.jpg";
import heroSection7 from "../assets/heroSection7.jpg";
import heroSection8 from "../assets/heroSection8.jpg";
import residential1 from "../assets/residential1.jpg";
import residential2 from "../assets/residential2.jpg";
import residential3 from "../assets/reidential3.jpg";
import residential4 from "../assets/residential4.jpg";
import residential5 from "../assets/residential5.jpg";
import investment1 from "../assets/investment1.jpg";
import investment2 from "../assets/investment2.webp";
import investment3 from "../assets/investment3.jpg";
import investment4 from "../assets/investment4.jpg";
import investment5 from "../assets/investment5.jpg";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import StatsSection from "../components/sections/StatsSection";
import VisionSection from "../components/sections/VisionSection";
import InvestmentModelSection from "../components/sections/InvestmentModelSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import ProjectsShowcaseSection from "../components/sections/ProjectsShowcaseSection";
import PartnersSection from "../components/sections/PartnersSection";
import BlogSection from "../components/sections/BlogSection";
import CTASection from "../components/sections/CTASection";
import AssetManagement from "./AssetManagement";
import heroVideo1 from "../assets/idr video.mp4";
import herovideo2 from "../assets/idr video 2.mp4";
import herovideo3 from "../assets/idr video 3.mp4";
import herovideo4 from "../assets/idr video 4.mp4";
import herovideo5 from "../assets/idr video 5.mp4";
import herovideo6 from "../assets/idr video 6.mp4";

export default function Home() {
  const heroVideos = [
    // heroVideo1,
    // herovideo2, 
    // herovideo3,
    // herovideo4,
    herovideo5,
    herovideo6,
  ];

  const residentialImages = [
    residential1,
    residential2,
    residential3,
    residential4,
    residential5,
  ];

  const investmentImages = [
    investment1,
    investment2,
    investment3,
    investment4,
    investment5,
  ];

  return (
    <div className="pt-20">
      <HeroSection heroVideos={heroVideos} />
      <AboutSection />
      <StatsSection />
      <VisionSection />
      <InvestmentModelSection />
      <WhyChooseUsSection />
      <ProjectsShowcaseSection 
        residentialImages={residentialImages} 
        investmentImages={investmentImages} 
      />
      <PartnersSection />
      <BlogSection />
      <CTASection />
      <AssetManagement />
    </div>
  );
}
