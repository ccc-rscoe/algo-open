import React from 'react';
import { Zap, Brain, Rocket, Network } from 'lucide-react';

const WhyParticipate: React.FC = () => {
  const reasons = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Sharpen Your Skills",
      description: "Tackle real-world algorithmic challenges that push your logical thinking and problem-solving abilities to the limit."
    },
    {
      icon: <Rocket className="w-8 h-8 text-secondary" />,
      title: "Career Boost",
      description: "Competitive programming achievements are highly valued by top tech companies. Add a prestigious contest to your resume."
    },
    {
      icon: <Network className="w-8 h-8 text-accent" />,
      title: "Network & Connect",
      description: "Meet fellow coding enthusiasts, potential teammates, and mentors from the RSCOE tech community."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Win Glory",
      description: "Earn recognition, trophies, and exclusive swag. Challenge yourself against the best coders in the college."
    }
  ];

  return (
    <section className="py-20 bg-black/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Why Participate?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">It's more than just a contest. It's an opportunity to grow, compete, and excel.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
              <div className="bg-white/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;