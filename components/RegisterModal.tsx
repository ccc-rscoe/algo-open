import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Placeholder submission logic
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-surface border border-white/10 rounded-2xl w-full max-w-md p-8 shadow-2xl animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-white mb-2">Team Registration</h2>
            <p className="text-gray-400 text-sm mb-6">Secure your spot in the Algorithmic Open. Limited seats available.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Team Name</label>
                <input type="text" required placeholder="e.g. Runtime Terror" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Team Leader Email</label>
                <input type="email" required placeholder="leader@rscoe.ac.in" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
                  <input type="tel" required placeholder="+91 9999999999" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Members Count</label>
                  <select className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors">
                    <option>1 (Solo)</option>
                    <option>2</option>
                    <option>3 (Full Team)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-background font-bold py-3 rounded-lg transition-colors">
                  Submit Registration
                </button>
                <p className="text-center text-xs text-gray-500 mt-3">By registering, you agree to the contest rules.</p>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-white">Registration Received!</h3>
            <p className="text-gray-400 mt-2">Check your email for confirmation.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;