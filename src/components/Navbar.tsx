
import React from 'react';
import { Button } from '@/components/ui/button';
import { Leaf, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-forest-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-forest p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-display font-bold text-forest-800">
              SaveTheForest
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-forest-700 hover:text-forest-900 transition-colors font-medium">
              Home
            </a>
            <a href="#how-it-works" className="text-forest-700 hover:text-forest-900 transition-colors font-medium">
              How It Works
            </a>
            <a href="#impact" className="text-forest-700 hover:text-forest-900 transition-colors font-medium">
              Impact
            </a>
            <a href="#about" className="text-forest-700 hover:text-forest-900 transition-colors font-medium">
              About
            </a>
            <Button className="bg-gradient-forest hover:opacity-90 text-white font-semibold px-6">
              Plant Trees Monthly
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-6 w-6 text-forest-700" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
