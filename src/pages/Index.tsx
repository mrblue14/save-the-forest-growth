
import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import UrgencySection from '@/components/UrgencySection';
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
import AnalyticsTracker, { trackEvent } from '@/components/AnalyticsTracker';
import GPSTrackingSection from '@/components/GPSTrackingSection';
import ImpactPromiseSection from '@/components/ImpactPromiseSection';

const Index = () => {
  useEffect(() => {
    // Track page view
    trackEvent('page_view', 'Navigation', 'Home');
  }, []);

  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <AnalyticsTracker />
        <SEOHead />
        <StructuredData />
        <Navbar />
        <HeroSection />
        <UrgencySection />
        <GPSTrackingSection />
        <ImpactPromiseSection />
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
    </HelmetProvider>
  );
};

export default Index;
