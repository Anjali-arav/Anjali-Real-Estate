/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Phone, Mail, MapPin, Twitter, Facebook, Clock, Linkedin } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface FooterProps {
  setCurrentPage: (page: string) => void;
  onCallNowClick: () => void;
}

export default function Footer({ setCurrentPage, onCallNowClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-950 border-t border-gold-500/20 text-slate-300 pt-16 pb-8 overflow-hidden" id="main-footer">
      {/* Decorative Golden Ambient Accent background */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-36 bg-gradient-to-t from-gold-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Presentation */}
          <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl font-bold tracking-wider bg-gradient-to-r from-gold-100 via-gold-400 to-gold-200 bg-clip-text text-transparent uppercase">
                {BUSINESS_INFO.brandName}
              </span>
              <Shield className="w-5 h-5 text-gold-400" />
            </div>
            <p className="text-sm text-slate-450 leading-relaxed font-sans">
              Anjali Real Estate is a premium, trusted property consultancy based in Hyderabad. We assist elite corporate and residential clients in acquiring preeminent addresses.
            </p>
            {/* Experience Label badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-450/10 border border-gold-500/30 rounded text-xs font-semibold text-gold-400 uppercase tracking-wider">
              {BUSINESS_INFO.experience}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold font-serif text-gold-400 border-b border-slate-800 pb-2">
              Our Directory
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-gold-400 transition-colors duration-200 text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-gold-400 transition-colors duration-200 text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('works')} className="hover:text-gold-400 transition-colors duration-200 text-left">
                  Our Works / Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-gold-400 transition-colors duration-200 text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Scheduled Hours */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold font-serif text-gold-400 border-b border-slate-800 pb-2">
              Business Timings
            </h4>
            <ul className="space-y-3 font-sans text-sm text-slate-400">
              {BUSINESS_INFO.workingHours.map((wh, idx) => (
                <li key={idx} className="flex gap-2">
                  <Clock className="w-4 h-4 text-gold-500/85 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-200">{wh.days}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{wh.hours}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Contacts */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold font-serif text-gold-400 border-b border-slate-800 pb-2">
              Main Office Desk
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-gold-500/85 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-xs">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-gold-500/85 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-gold-500/85 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors text-xs">{BUSINESS_INFO.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider separator */}
        <div className="border-t border-slate-800 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {currentYear} {BUSINESS_INFO.brandName}. All rights reserved. Premium Property Consulting.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href={BUSINESS_INFO.twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
              <Twitter className="w-4.5 h-4.5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
              <Facebook className="w-4.5 h-4.5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <span className="text-slate-800">•</span>
            <button onClick={onCallNowClick} className="hover:text-gold-400 cursor-pointer">
              Direct Enquiry Desk
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
