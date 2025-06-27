
import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-forest p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-display font-bold">SaveTheForest</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Restoring African forests through transparent monthly subscriptions. 
                Every tree planted supports communities and fights climate change.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold font-display mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#impact" className="text-gray-300 hover:text-white transition-colors">Impact</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold font-display mb-6">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold font-display mb-6">Stay Updated</h3>
              <p className="text-gray-300 mb-4">
                Get monthly updates on our reforestation progress and impact stories.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-forest-800 border border-forest-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-nature-400"
                />
                <button className="w-full bg-gradient-forest text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 SaveTheForest. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">🌍 Carbon Neutral Certified</span>
              <span className="text-gray-400">✓ B-Corp Verified</span>
              <span className="text-gray-400">🌳 UN Climate Action Partner</span>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-forest-800 to-nature-800 rounded-2xl p-8 -mb-8 mx-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold font-display mb-4">
              Start Your Reforestation Journey Today
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Join thousands of environmentally conscious individuals making a real difference. 
              Every tree planted counts.
            </p>
            <button className="bg-white text-forest-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all text-lg">
              Plant Trees Monthly
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
