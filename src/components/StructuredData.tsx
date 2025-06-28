
import React from 'react';

const StructuredData = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SaveTheForest",
    "description": "African reforestation through transparent monthly subscriptions, supporting local communities and fighting climate change with GPS-verified tree planting.",
    "url": "https://preview--save-the-forest-growth.lovable.app",
    "logo": "https://preview--save-the-forest-growth.lovable.app/logo.png",
    "foundingDate": "2020",
    "slogan": "Planting Hope, Growing Change",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Multiple African Countries"
    },
    "sameAs": [
      "https://twitter.com/savetheforest",
      "https://facebook.com/savetheforest"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@savetheforest.org"
    }
  };

  const nonprofitData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "SaveTheForest",
    "alternateName": "Save The Forest Foundation",
    "description": "We plant trees in Africa through transparent monthly subscriptions, creating jobs for local communities while fighting climate change.",
    "foundingDate": "2020",
    "area": "Environmental Conservation",
    "slogan": "Planting Hope, Growing Change"
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many trees will actually be planted with my subscription?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every dollar of your subscription goes directly to tree planting. We plant exactly the number of trees promised in your tier, with GPS verification and photo documentation sent to you monthly."
        }
      },
      {
        "@type": "Question", 
        "name": "Where exactly are the trees planted in Africa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with local partners in Kenya, Tanzania, Ghana, and the Democratic Republic of Congo. Each tree is GPS-tagged and you receive the exact coordinates and photos of your trees within 30 days of planting."
        }
      },
      {
        "@type": "Question",
        "name": "When do the trees get planted after I subscribe?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Your first trees are planted within 48 hours of subscription during planting season (March-May and September-November). During off-season, funds are held in escrow until optimal planting conditions."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nonprofitData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
};

export default StructuredData;
