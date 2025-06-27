
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import SubscriptionTiers from '@/components/SubscriptionTiers';
import ImpactDashboard from '@/components/ImpactDashboard';
import SocialProof from '@/components/SocialProof';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <SubscriptionTiers />
      <ImpactDashboard />
      <SocialProof />
      <Footer />
    </div>
  );
};

export default Index;
