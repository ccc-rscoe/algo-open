import React from 'react';
import { ChevronRight, Code2, Cpu, FileText } from 'lucide-react';
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-primary/30 text-primary text-xs font-mono mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            REGISTER FOR FREE NOW • LIMITED SEATS AVAILABLE
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            CCC's <br className="md:hidden" />
            <span className="gradient-text">Algorithmic Open</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 font-light">
            An ICPC-style competitive programming showdown organized by the <span className="text-white font-medium">Competitive Coding Club of RSCOE</span>.
          </p>

          <Countdown />

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onRegisterClick}
              className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-background bg-white rounded-full overflow-hidden transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]"
            >
              <span className="mr-2">Register Your Team</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://drive.google.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
            >
              <FileText className="w-4 h-4 mr-2 text-gray-400 group-hover:text-white transition-colors" />
              Check Rulebook
            </a>
          </div>
        </div>

        {/* Club Logo Placeholder */}
        <div className="mt-16 flex justify-center items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 flex items-center justify-center group-hover:border-primary/50 transition-colors">
              <Code2 className="w-10 h-10 text-gray-400 group-hover:text-primary transition-colors" />
            </div>
            <span className="text-xs text-gray-500 font-mono tracking-widest">CCC RSCOE</span>
          </div>
          <div className="h-px w-10 bg-gray-700"></div>
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 flex items-center justify-center group-hover:border-secondary/50 transition-colors">
              <Cpu className="w-10 h-10 text-gray-400 group-hover:text-secondary transition-colors" />
            </div>
            <span className="text-xs text-gray-500 font-mono tracking-widest">ALGO OPEN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;