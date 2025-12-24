import React from 'react';
import { QrCode, Smartphone } from 'lucide-react';

const RegisterQR: React.FC = () => {
    return (
        <section id="register" className="py-20 bg-gradient-to-b from-black/20 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-white mb-4">Register Your Team</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Scan the QR code to register your team instantly. Limited seats available!</p>
                </div>

                <div className="flex justify-center">
                    <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all max-w-md w-full">
                        <div className="flex flex-col items-center">
                            {/* QR Code Container */}
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative p-4 bg-white rounded-2xl shadow-2xl">
                                    <img
                                        src="/algo-open/assets/form_qr.png"
                                        alt="Registration QR Code"
                                        className="w-48 h-48 md:w-56 md:h-56 object-contain"
                                    />
                                </div>
                            </div>

                            {/* Instructions */}
                            <div className="mt-8 text-center">
                                <div className="flex items-center justify-center gap-2 text-primary mb-3">
                                    <Smartphone className="w-5 h-5" />
                                    <span className="font-semibold">Scan to Register</span>
                                </div>
                                <p className="text-sm text-gray-400">Open your phone camera and scan the QR code to fill out the registration form.</p>
                            </div>

                            {/* Features */}
                            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full">
                                    <QrCode className="w-3 h-3" /> Quick Registration
                                </span>
                                <span className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full">
                                    🆓 Free Entry
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default RegisterQR;
