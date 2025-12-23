import React from 'react';

const Sponsors: React.FC = () => {
  return (
    <section id="sponsor" className="py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-8">Supported By</h3>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
          {/* Sponsor Placeholders */}
          <div className="w-32 h-12 bg-white/10 rounded animate-pulse"></div>
          <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center">
            <span className="text-gray-600 font-bold text-xs">Codechef</span>
          </div>
          <div className="w-40 h-8 bg-white/10 rounded"></div>
          <div className="w-16 h-16 bg-white/5 rotate-45 rounded flex items-center justify-center">
            <span className="text-gray-600 font-bold text-xs -rotate-45">Codechef</span>
          </div>
          <div className="w-32 h-12 bg-white/10 rounded"></div>
        </div>

        <p className="mt-12 text-xs text-gray-600">Want to sponsor us? Contact ccclub_csbs@jspmrscoe.edu.in</p>
      </div>
    </section>
  );
};

export default Sponsors;