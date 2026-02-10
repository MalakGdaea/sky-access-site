import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { cities } from "../../constants/index.js";

const GlobalSection = () => {

    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8 px-6 border-t border-slate-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Column 1: Brand & Bio */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tighter text-sky-400">
                        SKYLINE<span className="text-white">ACCESS</span>
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Professional high-rise window cleaning and building maintenance.
                        Reaching new heights in safety and clarity since 2024.
                    </p>
                    <div className="flex gap-4">
                        <Instagram className="w-5 h-5 cursor-pointer hover:text-sky-400 transition-colors" />
                        <Linkedin className="w-5 h-5 cursor-pointer hover:text-sky-400 transition-colors" />
                    </div>
                </div>

                {/* Column 2: Service Locations */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Our Locations</h3>
                    <ul className="space-y-3">
                        {cities.map((city) => (
                            <li key={city} className="flex items-center gap-2 text-slate-400 hover:text-sky-300 cursor-default">
                                <MapPin className="w-4 h-4 text-sky-500" />
                                {city}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Services</h3>
                    <ul className="space-y-3 text-slate-400">
                        <li>Residential Cleaning</li>
                        <li>Commercial High-Rise</li>
                        <li>Glass Restoration</li>
                        <li>Safety Consulting</li>
                    </ul>
                </div>

                {/* Column 4: Contact & CTA */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Get a Quote</h3>
                    <div className="space-y-4 text-sm">
                        <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-sky-500" />
                            <span className="text-slate-400">+1 (555) 123-667</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-sky-500" />
                            <span className="text-slate-400">contact@skyaccess.co.il</span>
                        </div>
                        <a href="#quote">
                            Request Service
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
                <p>© 2026 SkyLine Access Ltd. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default GlobalSection;

