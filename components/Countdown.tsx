import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  // Set target date to December 30, 2025 10:00:00
  const targetDate = new Date('2025-12-29T23:59:59').getTime();

  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(255,94,38,0.1)]">
        <span className="text-2xl md:text-3xl font-mono font-bold text-white">
          {value > 0 ? value.toString().padStart(2, '0') : '00'}
        </span>
      </div>
      <span className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <div className="mt-12 mb-8 animate-fade-in-up">
      <p className="text-center text-primary font-mono text-sm mb-4 tracking-widest uppercase">Registration Closes In</p>
      <div className="flex gap-4 md:gap-6 justify-center">
        <TimeBox value={days > 0 ? days : 0} label="Days" />
        <TimeBox value={hours > 0 ? hours : 0} label="Hours" />
        <TimeBox value={minutes > 0 ? minutes : 0} label="Mins" />
        <TimeBox value={seconds > 0 ? seconds : 0} label="Secs" />
      </div>
    </div>
  );
};

export default Countdown;