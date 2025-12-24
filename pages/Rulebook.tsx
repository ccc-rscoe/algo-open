import React from 'react';
import { Terminal, MapPin, Calendar, Mail, AlertTriangle, ChevronDown, CheckCircle, Code, Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Rulebook: React.FC = () => {
    return (
        <div className="min-h-screen font-mono flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface via-background to-black text-gray-200 selection:bg-accent selection:text-white">

            {/* Navbar / Top Info */}
            <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center text-xs md:text-sm text-gray-500">
                <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <ArrowLeft size={16} />
                    <span className="hidden sm:inline">Back to Home</span>
                </Link>
                <div className="tracking-wider uppercase opacity-80 hover:opacity-100 transition-opacity">Algorithmic Open — Rulebook</div>
            </header>

            {/* Main Content Area */}
            <main className="flex-grow flex flex-col items-center w-full max-w-5xl mx-auto pt-20 pb-20 px-6 md:px-12 gap-24">

                {/* HERO SECTION */}
                <section className="min-h-[85vh] flex flex-col justify-center items-center text-center w-full animate-fade-in-up">

                    {/* Logo */}
                    <div className="mb-10 relative group">
                        <div className="w-32 h-32 md:w-40 md:h-40 border-2 border-dashed border-accent/40 rounded-full flex items-center justify-center bg-white/5 shadow-[0_0_40px_rgba(255,94,38,0.1)] group-hover:shadow-[0_0_60px_rgba(255,94,38,0.3)] group-hover:border-accent transition-all duration-500 backdrop-blur-sm overflow-hidden p-4">
                            <img src="./assets/ccc_logo.png" alt="CCC Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-accent/5 blur-xl -z-10 group-hover:bg-accent/10 transition-all duration-500"></div>
                    </div>

                    <div className="space-y-2 flex flex-col items-center">
                        <p className="text-gray-500 italic text-lg md:text-xl font-light tracking-widest mb-2">presents</p>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text tracking-tighter leading-tight pb-2">
                            CCC's<br className="md:hidden" /> Algorithmic Open
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 tracking-[0.2em] uppercase border-y border-white/5 py-3 mt-6 inline-block">
                            Official Rulebook
                        </p>

                        <div className="mt-16 flex flex-col items-center gap-4 opacity-90">
                            <span className="text-accent font-semibold tracking-widest text-xs uppercase">Code. Conquer.</span>

                            <div className="flex flex-col items-center gap-3">
                                <div className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase">Powered By</div>

                                <div className="group relative">
                                    <div className="w-25 h-20 md:w-30 md:h-20 border border-white/20 rounded-xl flex items-center justify-center bg-white/5 hover:border-accent/40 hover:bg-white/10 transition-all duration-300 overflow-hidden p-2">
                                        <img src="./assets/codechef_logo.png" alt="CodeChef Logo" className="w-full h-full object-contain" />
                                    </div>
                                </div>

                                <span className="text-white text-sm font-bold tracking-wide">CodeChef</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 animate-bounce">
                        <ChevronDown className="text-accent opacity-50 hover:opacity-100 transition-opacity" size={32} />
                    </div>
                </section>

                {/* CONTEST STRUCTURE */}
                <section className="w-full space-y-8 scroll-mt-24" id="structure">
                    <SectionHeader icon={<Code />} title="Contest Structure" />

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-sm hover:border-accent/30 transition-colors duration-300 shadow-lg">
                        <ul className="space-y-5 text-base md:text-lg text-gray-300">
                            <ListItem text="The contest will have algorithmic problems." />
                            <ListItem text="The contest will consist of a single ICPC style coding round." />
                            <ListItem text="The contest will last for 3 hours (Subject to change)." />
                            <ListItem text="Any standard programming language is preferred." />
                            <ListItem text="The PCs in the lab are subject to availability." />
                            <ListItem text="The Organizing Committee and judges have the right to change the flow at any given moment." />
                        </ul>
                    </div>
                </section>

                {/* RULES & REGULATIONS */}
                <section className="w-full space-y-8 scroll-mt-24" id="rules">
                    <SectionHeader icon={<Shield />} title="Rules & Regulations" />

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-colors shadow-lg">
                            <h3 className="text-accent mb-6 text-sm font-bold uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-2">
                                <AlertTriangle size={16} /> Prerequisites
                            </h3>
                            <ul className="space-y-4">
                                <ListItem text="Each participant must carry a valid College ID card." />
                                <ListItem text="Be present 10 minutes before the round starts." />
                                <ListItem text="The participants must have a CodeChef account." />
                            </ul>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-colors shadow-lg">
                            <h3 className="text-accent mb-6 text-sm font-bold uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-2">
                                <AlertTriangle size={16} /> Conduct
                            </h3>
                            <ul className="space-y-4">
                                <ListItem text="Plagiarism, external help, or use of unfair means count as unethical practices." highlight />
                                <ListItem text="Unethical practices will result in instant termination of participation." highlight />
                                <ListItem text="Contest arbiters have the right to report suspicious behavior." />
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-4">
                        <ul className="space-y-3 text-sm md:text-base text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1 opacity-70">•</span>
                                <span>Contest will follow standard ICPC format.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1 opacity-70">•</span>
                                <span>The Organizing Committee has the right to change the flow of the contest, if the need arises.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1 opacity-70">•</span>
                                <span className="text-white font-semibold">Judges' decision is final and binding.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* SCHEDULE & CONTACT */}
                <section className="w-full space-y-8 scroll-mt-24 mb-20" id="schedule">
                    <SectionHeader icon={<Calendar />} title="Schedule & Contact" />

                    <div className="grid gap-6 lg:grid-cols-2">

                        {/* Date & Venue Card */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-6 relative overflow-hidden group shadow-lg">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl transition-transform group-hover:scale-150"></div>
                                <div className="flex items-start gap-5 relative z-10">
                                    <div className="p-3 bg-accent/10 rounded-xl text-accent ring-1 ring-accent/20">
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold text-gray-500 uppercase mb-1 tracking-widest">Date & Time</h3>
                                        <p className="text-xl text-white font-semibold">30th December 2025</p>
                                        <p className="text-accent font-medium mt-1">Tuesday @ 10:00 AM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-6 relative overflow-hidden group shadow-lg">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl transition-transform group-hover:scale-150"></div>
                                <div className="flex items-start gap-5 relative z-10">
                                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 ring-1 ring-blue-500/20">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold text-gray-500 uppercase mb-1 tracking-widest">Venue</h3>
                                        <p className="text-lg text-white leading-snug">Department of Computer Science and Business Systems</p>
                                        <p className="text-gray-400 text-sm mt-2 font-light">RSCOE</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact & Footer Info */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col justify-between shadow-lg">
                            <div>
                                <h3 className="text-accent text-lg font-bold mb-6 flex items-center gap-3">
                                    <Mail size={20} /> Contact Us
                                </h3>
                                <div className="space-y-6 text-sm">
                                    <div>
                                        <p className="text-gray-500 text-[10px] uppercase mb-1 tracking-widest">Organizing Committee</p>
                                        <a href="mailto:competitivecodingclub@gmail.com" className="text-white hover:text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent transition-all">
                                            competitivecodingclub@gmail.com
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-[10px] uppercase mb-1 tracking-widest">Community Coordinators</p>
                                        <a href="mailto:ccclub_csbs@jspmrscoe.edu.in" className="text-white hover:text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent transition-all">
                                            ccclub_csbs@jspmrscoe.edu.in
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5">
                                        <CheckCircle size={16} className="text-green-500" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">No Registration Fee</p>
                                        <p className="text-xs text-gray-500 mt-1">Slots are limited.</p>
                                    </div>
                                </div>
                                <p className="text-red-400 text-xs mt-5 font-bold flex items-center gap-2 bg-red-500/10 py-2 px-3 rounded-lg border border-red-500/20">
                                    <AlertTriangle size={12} /> Usage of unfair means is strictly prohibited.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-xs text-gray-500 pt-8 pb-4">
                        Further details will be shared on the Participant WhatsApp group.
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="w-full bg-black/40 border-t border-white/5 py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4 backdrop-blur-sm">
                <div className="text-center md:text-left">
                    <p className="font-bold text-gray-200 mb-1">CCC's Algorithmic Open</p>
                    <p className="opacity-70">Organized by Competitive Coding Club of RSCOE</p>
                </div>
                <div className="flex gap-4 opacity-50">
                    <span>&copy; 2025 Competitive Coding Club of RSCOE</span>
                </div>
            </footer>
        </div>
    );
};

// --- Helper Components ---

const SectionHeader: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
    <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
        <div className="text-accent bg-accent/10 p-2.5 rounded-xl ring-1 ring-accent/20">
            {icon}
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
    </div>
);

const ListItem: React.FC<{ text: string; highlight?: boolean }> = ({ text, highlight }) => (
    <li className={`flex items-start gap-3 ${highlight ? 'text-red-300' : ''}`}>
        <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 shadow-[0_0_8px_currentColor] ${highlight ? 'bg-red-500 text-red-500' : 'bg-accent text-accent'}`} />
        <span className="leading-relaxed">{text}</span>
    </li>
);

export default Rulebook;
