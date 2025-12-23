import React from 'react';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-white font-bold text-lg mb-1">CCC RSCOE</p>
          <p className="text-gray-500 text-sm">© 2025 Competitive Coding Club. All rights reserved.</p>
        </div>

        <div className="flex space-x-6">
          <a href="https://github.com/ccc-rscoe" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;