
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import Navbar from '@/components/Navbar';
import CommunityHub from '@/components/CommunityHub';
import Footer from '@/components/Footer';

const Community = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEOHead 
          title="Community - SaveTheForest: Join Forest Protectors Worldwide"
          description="Connect with 2,847+ forest protectors, join planting challenges, and share impact stories. Be part of the global reforestation movement in Africa."
          keywords="forest community, tree planting challenges, reforestation community, environmental activism, climate action community"
          canonical="https://preview--save-the-forest-growth.lovable.app/community"
        />
        <StructuredData />
        <Navbar />
        <CommunityHub />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Community;
