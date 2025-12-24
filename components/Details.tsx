import React from 'react';
import { MapPin, Calendar, Clock, AlertTriangle, Laptop } from 'lucide-react';

const Details: React.FC = () => {
    return (
        <section id="details" className="py-20 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Event Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Location */}
                    <div className="glass-card p-6 rounded-xl hover:bg-surface/50 transition-colors border-l-4 border-secondary">
                        <MapPin className="w-8 h-8 text-secondary mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Venue</h3>
                        <p className="text-gray-400">CSBS Dept</p>
                        <p className="text-sm text-gray-500">JSPM's RSCOE, Tathawade</p>
                        <div className="mt-4 h-32 w-full bg-gray-800 rounded-lg overflow-hidden">
                            <img src="/algo-open/assets/csbs_dept.png" alt="CSBS Department" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                        </div>
                    </div>

                    {/* Time */}
                    <div className="glass-card p-6 rounded-xl hover:bg-surface/50 transition-colors border-l-4 border-primary">
                        <Calendar className="w-8 h-8 text-primary mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Date & Time</h3>
                        <p className="text-gray-400">30th December</p>
                        <div className="flex items-center gap-2 mt-2 text-primary">
                            <Clock className="w-4 h-4" />
                            <span className="font-mono">10:00 AM - 01:00 PM</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">* Reporting time: 09:30 AM</p>
                    </div>

                    {/* Logistics */}
                    <div className="glass-card p-6 rounded-xl hover:bg-surface/50 transition-colors border-l-4 border-accent">
                        <Laptop className="w-8 h-8 text-accent mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Requirements</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>• You can bring your own laptops.</li>
                            <li>• We will provide PCs subject to Availability.</li>
                            <li>• Preferably bring your own internet.</li>
                            <li>• We will provide the internet subject to availability.</li>
                        </ul>
                        <div className="mt-4">
                            <span className="inline-block bg-accent/10 text-accent text-xs px-2 py-1 rounded">Limited Seats</span>
                        </div>
                    </div>
                </div>

                {/* Plagiarism Warning */}
                <div className="mt-8 max-w-3xl mx-auto">
                    <div className="glass-card border-red-500/30 bg-red-500/5 p-4 rounded-lg flex items-center gap-4">
                        <AlertTriangle className="w-10 h-10 text-red-500 flex-shrink-0" />
                        <div>
                            <h4 className="text-red-400 font-bold uppercase tracking-wider text-sm">Strict Warning</h4>
                            <p className="text-gray-300 text-sm mt-1">NO Plagiarism will be tolerated.<br></br>Teams found copying code or using unauthorized AI tools will be immediately disqualified.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Details;