/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Twitter, Clock, Phone, MapPin } from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import WorksView from './components/WorksView';
import ContactView from './components/ContactView';

import { BUSINESS_INFO } from './data';

export default function App() {
  // Navigation State
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Enquiry Modal State
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  // Scroll to top indicator visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open the appointment modal with a pre-selected service if desired
  const openBookingModal = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setIsBookModalOpen(true);
  };

  // Render correct view based on navigation selection state
  const renderView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView setCurrentPage={setCurrentPage} onCallNowClick={openBookingModal} />;
      case 'about':
        return <AboutView onCallNowClick={() => openBookingModal()} />;
      case 'services':
        return <ServicesView onCallNowClick={openBookingModal} />;
      case 'works':
        return <WorksView onCallNowClick={openBookingModal} />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setCurrentPage={setCurrentPage} onCallNowClick={openBookingModal} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-gold-500 selection:text-navy-950 flex flex-col justify-between" id="app-root">
      
      {/* Top thin notification bar with contact details */}
      <div className="bg-navy-950 py-2.5 px-4 shadow text-[10px] sm:text-xs border-b border-gold-550/15">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-300">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span className="font-semibold">{BUSINESS_INFO.phone}</span>
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-slate-200">Road No-12, Jubilee Hills, Hyderabad</span>
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[10px] text-slate-400">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>9:00 AM - 7:30 PM</span>
            </span>
            <span className="text-slate-700">|</span>
            <a
              href={BUSINESS_INFO.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-bold transition-colors"
              id="top-bar-instagram-link"
            >
              <Twitter className="w-3.5 h-3.5 fill-current" />
              <span>@{BUSINESS_INFO.twitterUsername}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onCallNowClick={() => openBookingModal()}
      />

      {/* Main Page Area wrapped with smooth fade-in animations */}
      <main className="flex-grow" id="main-content-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.35 }}
            id="page-animated-wrapper"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Unified Luxury Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        onCallNowClick={() => openBookingModal()}
      />

      {/* Global Interactive Booking Popup Modal */}
      <AppointmentModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        preselectedService={preselectedService}
      />

      {/* Floating Scroll to Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-navy-950 border border-gold-550/20 text-gold-400 hover:text-white hover:bg-navy-900 shadow-lg transition-all duration-200 cursor-pointer shadow-xl focus:outline-none"
            id="scroll-to-top-btn"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
