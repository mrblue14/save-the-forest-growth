
import React from 'react';
import { FileText, MapPin, Users, BarChart3, ExternalLink, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TransparencySection = () => {
  const transparencyFeatures = [
    {
      icon: BarChart3,
      title: "Open Impact Reporting",
      description: "Access detailed reports showing exactly where your donations go and the impact they create.",
      action: "View Impact Dashboard"
    },
    {
      icon: MapPin,
      title: "Verified Planting Locations",
      description: "Interactive maps with GPS coordinates and photos of every active planting site.",
      action: "Explore Locations"
    },
    {
      icon: Users,
      title: "Partner Organization Standards",
      description: "Detailed information about our vetting process and partnership requirements.",
      action: "See Our Partners"
    },
    {
      icon: FileText,
      title: "Regular Impact Audits",
      description: "Third-party verification of our planting claims and environmental impact.",
      action: "Read Audit Reports"
    }
  ];

  const impactData = [
    { label: "Trees Planted", value: "15,247", period: "This Year" },
    { label: "CO2 Removed", value: "304,940 lbs", period: "Annually" },
    { label: "Countries Active", value: "15", period: "Worldwide" },
    { label: "Partner Organizations", value: "23", period: "Verified" },
    { label: "Satisfaction Rate", value: "98.2%", period: "Customer Rating" },
    { label: "GPS Verification", value: "100%", period: "Success Rate" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 bg-[#2D7D32]/5 border-[#2D7D32] text-[#2D7D32] font-semibold px-4 py-2">
            <FileText className="w-4 h-4 mr-2" />
            Transparency
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D7D32] mb-4">
            Full Transparency
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in complete openness. Every donation, every tree, every impact metric is tracked, verified, and reported.
          </p>
        </div>

        {/* Transparency Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {transparencyFeatures.map((feature, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="bg-[#2D7D32] rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-[#2D7D32]">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <Button variant="outline" className="border-[#2D7D32] text-[#2D7D32] hover:bg-[#2D7D32]/10">
                  {feature.action}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Data Grid */}
        <div className="bg-gradient-to-br from-[#2D7D32]/5 to-[#4CAF50]/10 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#2D7D32] mb-8 text-center">
            Live Impact Data
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {impactData.map((data, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#2D7D32] mb-1">
                  {data.value}
                </div>
                <div className="font-semibold text-gray-800 mb-1">
                  {data.label}
                </div>
                <div className="text-sm text-gray-600">
                  {data.period}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                No Hidden Fees Guarantee
              </h3>
              <p className="text-blue-800 mb-6">
                100% of your tree donation goes directly to planting. Zero administrative fees, zero overhead charges.
              </p>
              <Badge className="bg-blue-600 text-white">
                100% Direct Impact
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
            <CardContent className="p-8 text-center">
              <div className="bg-emerald-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                Public Transparency Report
              </h3>
              <p className="text-emerald-800 mb-6">
                Quarterly reports detailing every aspect of our operations, financials, and environmental impact.
              </p>
              <Badge className="bg-emerald-600 text-white">
                Publicly Available
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#2D7D32] to-[#4CAF50] rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            See Our Full Transparency in Action
          </h3>
          <p className="text-green-100 max-w-2xl mx-auto mb-8">
            Access our complete transparency dashboard with real-time data, partner information, and detailed impact reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#2D7D32] hover:bg-gray-100">
              <FileText className="w-5 h-5 mr-2" />
              View Transparency Report
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <BarChart3 className="w-5 h-5 mr-2" />
              Access Impact Dashboard
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
