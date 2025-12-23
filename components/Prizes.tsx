import React from 'react';
import { Crown, Medal, Award, Star } from 'lucide-react';

const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prizes & <span className="text-primary">Incentives</span>
          </h2>
          <p className="text-gray-400">Compete for glory, trophies, and the title of Algorithmic Champion.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
          {/* Winner */}
          <div className="glass-card p-8 rounded-2xl border-t-4 border-yellow-500 bg-yellow-500/5 flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300 relative z-10 shadow-2xl shadow-yellow-500/10 md:w-1/3">
            <div className="absolute -top-6">
              <Crown className="w-12 h-12 text-yellow-400 fill-yellow-400/20 animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-white mt-4">Winner Team</h3>
            <p className="text-lg text-center text-gray-300 mt-4 mb-2">The Ultimate Champions</p>
            <ul className="text-sm text-center text-gray-400 space-y-2">
              <li>📜 Winner Certificates</li>
              <li>🎁 Exclusive Prizes</li>
              <li>🧠 Opportunity to showcase their skills</li>
            </ul>
          </div>

          {/* Runner Up */}
          <div className="glass-card p-8 rounded-2xl border-t-4 border-gray-400 flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300 md:w-1/3">
            <div className="bg-gray-400/20 p-4 rounded-full mb-6">
              <Medal className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-white">Runner Up Team</h3>
            <p className="text-lg text-center text-gray-300 mt-2 mb-2">Close Contenders</p>
            <ul className="text-sm text-center text-gray-400 space-y-2">
              <li>📜 Runner-up Certificates</li>
              <li>🎁 Exciting Prizes</li>
            </ul>
          </div>
        </div>

        <div className="glass-card p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="bg-primary/20 p-3 rounded-lg">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-white">For All Participants</h4>
              <p className="text-sm text-gray-400">Official Participation Certificates & Valuable ICPC/IOI Contest Experience.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-accent/80 text-sm font-medium">
            <Star className="w-4 h-4" />
            <span>Boost your resume</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;