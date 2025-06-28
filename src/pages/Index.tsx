
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ImpactStories from '@/components/ImpactStories';
import SubscriptionTiers from '@/components/SubscriptionTiers';
import ImpactDashboard from '@/components/ImpactDashboard';
import EducationalContent from '@/components/EducationalContent';
import CallToActionSection from '@/components/CallToActionSection';
import SocialProof from '@/components/SocialProof';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <ImpactStories />
      <SubscriptionTiers />
      <ImpactDashboard />
      <EducationalContent />
      <CallToActionSection />
      <SocialProof />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
