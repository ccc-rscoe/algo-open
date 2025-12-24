import React from 'react';
import { ChevronRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Countdown from './Countdown';

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent/50 text-sm font-mono mb-8 animate-fade-in-up shadow-[0_0_15px_rgba(255,94,38,0.3)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="gradient-text font-semibold">REGISTER FOR FREE NOW</span>
            <span className="text-accent">•</span>
            <span className="text-white font-medium">LIMITED SEATS AVAILABLE</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            CCC's <br className="md:hidden" />
            <span className="gradient-text">Algorithmic Open</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 font-light">
            An ICPC-style competitive programming showdown organized by the <span className="text-white font-medium">Competitive Coding Club of RSCOE</span>.
          </p>

          {/* Prize Pool Highlight */}
          <div className="mt-8 inline-flex items-center gap-4 px-8 py-5 rounded-2xl glass-card border-accent/50 animate-pulse shadow-[0_0_30px_rgba(255,94,38,0.4)] hover:shadow-[0_0_40px_rgba(255,94,38,0.6)] transition-shadow duration-300">
            <span className="text-5xl">🏆</span>
            <div className="text-left">
              <p className="text-sm text-accent font-mono uppercase tracking-wider font-semibold">Prize Pool</p>
              <p className="text-4xl md:text-5xl font-extrabold gradient-text">₹30,000<sup className="text-sm align-super">*</sup></p>
            </div>
          </div>

          <Countdown />

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onRegisterClick}
              className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-background bg-white rounded-full overflow-hidden transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(255,94,38,0.5)]"
            >
              <span className="mr-2">Register Your Team</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/rulebook"
              className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
            >
              <FileText className="w-4 h-4 mr-2 text-gray-400 group-hover:text-white transition-colors" />
              Check Rulebook
            </Link>
          </div>
        </div>

        {/* Club Logo */}
        <div className="mt-16 flex flex-col items-center gap-4 opacity-80 hover:opacity-100 transition-all duration-500">
          <div className="flex justify-center items-center gap-8">
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 flex items-center justify-center group-hover:border-primary/50 transition-colors overflow-hidden p-3">
                <img src="./assets/ccc_logo.png" alt="CCC Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-sm text-gray-400 font-mono tracking-widest">CCC RSCOE</span>
            </div>
            <span className="text-3xl text-gray-500 font-light mb-8">×</span>
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 flex items-center justify-center group-hover:border-secondary/50 transition-colors overflow-hidden p-3">
                <img src="./assets/codechef_logo.png" alt="CodeChef Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-sm text-gray-400 font-mono tracking-widest">CODECHEF</span>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <p className="mt-8 text-xs text-gray-600 text-center">*Terms and conditions apply</p>
      </div>
    </div>
  );
};

export default Hero;