import React from 'react';

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-8">Supported By</h3>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {/* CodeChef Logo */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-6 group-hover:border-primary/50 transition-all group-hover:bg-white/10">
              <img src="./assets/codechef_logo.png" alt="CodeChef Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xs text-gray-500 font-mono tracking-widest group-hover:text-white transition-colors">CODECHEF</span>
          </div>
        </div>

        <p className="mt-12 text-xs text-gray-600">Want to sponsor us? Contact ccclub_csbs@jspmrscoe.edu.in</p>
      </div>
    </section>
  );
};

export default Sponsors;