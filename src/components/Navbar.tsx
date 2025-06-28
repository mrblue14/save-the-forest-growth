
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-forest-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-gradient-forest p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-display font-bold text-forest-800">
              SaveTheForest
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-forest-700 hover:text-forest-900 transition-colors font-medium hover:underline decoration-2 underline-offset-4"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-forest-700 hover:text-forest-900 transition-colors font-medium hover:underline decoration-2 underline-offset-4"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('impact')}
              className="text-forest-700 hover:text-forest-900 transition-colors font-medium hover:underline decoration-2 underline-offset-4"
            >
              Impact
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-forest-700 hover:text-forest-900 transition-colors font-medium hover:underline decoration-2 underline-offset-4"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-forest-700 hover:text-forest-900 transition-colors font-medium hover:underline decoration-2 underline-offset-4"
            >
              Plant Trees Monthly
            </button>
            
            {/* Enhanced CTA Button */}
            <Button 
              onClick={() => scrollToSection('pricing')}
              className="bg-gradient-forest hover:opacity-90 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[48px]"
            >
              Start Planting Trees
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="min-h-[48px] min-w-[48px]">
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-forest-700" />
              ) : (
                <Menu className="h-6 w-6 text-forest-700" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-forest-100 py-4 space-y-4 shadow-lg">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-3 text-forest-700 hover:text-forest-900 hover:bg-forest-50 transition-colors font-medium min-h-[48px]"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-4 py-3 text-forest-700 hover:text-forest-900 hover:bg-forest-50 transition-colors font-medium min-h-[48px]"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('impact')}
              className="block w-full text-left px-4 py-3 text-forest-700 hover:text-forest-900 hover:bg-forest-50 transition-colors font-medium min-h-[48px]"
            >
              Impact
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-forest-700 hover:text-forest-900 hover:bg-forest-50 transition-colors font-medium min-h-[48px]"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-4 py-3 text-forest-700 hover:text-forest-900 hover:bg-forest-50 transition-colors font-medium min-h-[48px]"
            >
              Plant Trees Monthly
            </button>
            <div className="px-4">
              <Button 
                onClick={() => scrollToSection('pricing')}
                className="w-full bg-gradient-forest hover:opacity-90 text-white font-semibold py-4 rounded-xl shadow-lg min-h-[48px]"
              >
                Start Planting Trees
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
