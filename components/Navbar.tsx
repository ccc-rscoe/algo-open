import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onRegisterClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/algo-open/assets/ccc_logo.png" alt="CCC Logo" className="h-16 w-16 rounded" />
            <span className="font-mono font-bold text-lg tracking-tighter text-white">
              CCC_ALGO_OPEN
            </span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#prizes" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Prizes</a>
              <a href="#details" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Details</a>
              <a href="#sponsors" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Sponsor</a>
              <button
                onClick={onRegisterClick}
                className="bg-primary hover:bg-primary/90 text-background font-bold px-4 py-2 rounded-full transition-all transform hover:scale-105"
              >
                Register Now
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-card">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              onClick={handleMobileLinkClick}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#prizes"
              onClick={handleMobileLinkClick}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Prizes
            </a>
            <a
              href="#details"
              onClick={handleMobileLinkClick}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Details
            </a>
            <button
              onClick={() => {
                onRegisterClick();
                setIsOpen(false);
              }}
              className="w-full text-left bg-primary/20 text-primary font-bold block px-3 py-2 rounded-md text-base mt-4"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;