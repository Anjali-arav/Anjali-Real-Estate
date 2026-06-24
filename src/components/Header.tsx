/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onCallNowClick: () => void;
}

export default function Header({ currentPage, setCurrentPage, onCallNowClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'About Us', value: 'about' },
    { label: 'Our Works', value: 'works' },
    { label: 'Contact Us', value: 'contact' }
  ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/95 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-lg'
          : 'bg-navy-950/80 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 focus:outline-none group text-left"
            id="brand-logo-btn"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider bg-gradient-to-r from-gold-100 via-gold-400 to-gold-200 bg-clip-text text-transparent uppercase">
                {BUSINESS_INFO.brandName}
              </span>
            </div>
            <ShieldCheck className="w-4 h-4 text-gold-400/80 group-hover:rotate-6 transition-transform duration-300" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = currentPage === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`relative text-xs tracking-widest uppercase font-semibold transition-colors duration-200 ${
                    isActive ? 'text-gold-400' : 'text-slate-300 hover:text-white'
                  }`}
                  id={`nav-link-${item.value}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons (Call Now CTA) */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-gold-400 transition-colors py-1.5 px-3 border border-gold-500/20 bg-gold-500/5 rounded"
              id="header-phone-text-link"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onCallNowClick}
              className="relative group overflow-hidden py-2 px-5 rounded text-xs tracking-widest uppercase font-bold transition-all duration-300 transform bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-navy-950 hover:shadow-[0_0_15px_rgba(197,168,128,0.4)] hover:scale-[1.02]"
              id="header-call-now-btn"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-400 via-gold-200 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Call Now</span>
            </button>
          </div>

          {/* Burger menu triggering button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={onCallNowClick}
              className="p-2 text-gold-400 bg-gold-500/10 hover:bg-gold-500/20 rounded border border-gold-500/20 transition-colors"
              title="Call Anjali Real Estate"
              id="header-call-mobile-btn"
            >
              <Phone className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-gold-400 bg-navy-900 border border-slate-800 rounded outline-none transition-colors"
              id="mobile-drawer-toggle-btn"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Slideout Overlay / Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-[60px] p-6 bg-navy-950 border-b border-gold-500/20 shadow-2xl backdrop-blur-lg flex flex-col space-y-5"
          id="mobile-navigation-drawer"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = currentPage === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`text-left py-2 text-sm tracking-widest uppercase font-semibold transition-colors ${
                    isActive ? 'text-gold-400 pl-2 border-l-2 border-gold-500' : 'text-slate-400 hover:text-white'
                  }`}
                  id={`mobile-nav-link-${item.value}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="h-[1px] bg-slate-800" />

          <div className="flex flex-col gap-3 pt-1">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded text-xs tracking-wider uppercase font-semibold text-slate-300 border border-slate-800 bg-navy-900 hover:bg-slate-800 text-center"
              id="mobile-phone-call-btn"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onCallNowClick();
              }}
              className="py-2.5 px-4 rounded text-xs tracking-widest uppercase font-bold text-center bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-navy-950"
              id="mobile-booking-drawer-btn"
            >
              Send Call Request
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
