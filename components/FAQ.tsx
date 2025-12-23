import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who is eligible to participate?",
      answer: "The contest is open to all students of RSCOE, from First Year to Final Year, across all branches. Beginners are especially encouraged to join!"
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in CCC's Algorithmic Open is completely FREE for all teams."
    },
    {
      question: "Can I participate individually?",
      answer: "Yes! While we encourage teams of 2-3 for the best experience, solo participation is allowed. You will compete in the same pool."
    },
    {
      question: "What language can I use?",
      answer: "The contest platform supports C, C++, Java, Python and almost every programming language. We recommend C++ for its execution speed in competitive programming."
    },
    {
      question: "Do I need to bring my own laptop?",
      answer: "It is recommended to bring your own laptop. However, college lab PCs will be available for teams who request them during registration (subject to availability)."
    }
  ];

  return (
    <section className="py-20 bg-surface/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden transition-all duration-300">
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;