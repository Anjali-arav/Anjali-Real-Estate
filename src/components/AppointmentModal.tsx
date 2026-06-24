/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, ShieldCheck, Mail, Phone, User, Landmark, MapPin, AlignLeft } from 'lucide-react';
import { SERVICES } from '../data';
import { EnquiryFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function AppointmentModal({ isOpen, onClose, preselectedService }: AppointmentModalProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    propertyRequirement: '',
    preferredLocation: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, propertyRequirement: preselectedService }));
    } else {
      setFormData(prev => ({ ...prev, propertyRequirement: '' }));
    }
    if (isOpen) {
      setIsSubmitted(false);
    }
  }, [preselectedService, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-gold-500/30 bg-navy-950 p-6 md:p-8 shadow-[0_0_50px_rgba(197,168,128,0.2)] text-white"
            id="appointment-modal-container"
          >
            {/* Header premium gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

            {/* Absolute close button */}
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-gold-405 hover:bg-slate-800 transition-colors duration-200 p-1.5 bg-navy-900 rounded-full border border-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5" id="appointment-form">
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start items-center gap-1.5 text-gold-400 text-xs uppercase tracking-widest font-bold mb-1">
                    <Landmark className="w-4 h-4 text-gold-450" />
                    <span>Exclusive Property Query</span>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-white tracking-tight">
                    Call Now Enquiry Desk
                  </h3>
                  <p className="text-xs text-slate-450 mt-1">
                    Please submit your specific luxury properties requirements below, and our senior representative will coordinate with you.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs tracking-wider text-slate-350 font-medium block">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-4 w-4 text-gold-500/60" />
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Anjali Govindavajhula"
                        className="w-full pl-10 pr-3 py-2 text-sm rounded bg-navy-900 border border-slate-800 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition duration-200 text-white placeholder-slate-600"
                        id="form-full-name"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs tracking-wider text-slate-350 font-medium block">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gold-500/60" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 8919449475"
                        className="w-full pl-10 pr-3 py-2 text-sm rounded bg-navy-900 border border-slate-800 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition duration-200 text-white placeholder-slate-600"
                        id="form-phone"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs tracking-wider text-slate-350 font-medium block">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gold-500/60" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full pl-10 pr-3 py-2 text-sm rounded bg-navy-900 border border-slate-800 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition duration-200 text-white placeholder-slate-600"
                        id="form-email"
                      />
                    </div>
                  </div>

                  {/* Property Requirement Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs tracking-wider text-slate-350 font-medium block">Property Requirement *</label>
                    <div className="relative">
                      <Landmark className="absolute left-3 top-2.5 h-4 w-4 text-gold-500/60" />
                      <select
                        name="propertyRequirement"
                        required
                        value={formData.propertyRequirement}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 text-sm rounded bg-navy-900 border border-slate-800 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition duration-200 text-white appearance-none cursor-pointer"
                        id="form-service"
                      >
                        <option value="" className="bg-navy-950">Select Requirement</option>
                        {SERVICES.map(s => (
                          <option key={s.id} value={s.name} className="bg-navy-950">
                            {s.name}
                          </option>
                        ))}
                        <option value="Other Properties" className="bg-navy-950">Other Properties / Plot</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Preferred Location */}
                <div className="space-y-1.5">
                  <label className="text-xs tracking-wider text-slate-350 font-medium block">Preferred Location *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-gold-500/60" />
                    <input
                      type="text"
                      name="preferredLocation"
                      required
                      value={formData.preferredLocation}
                      onChange={handleChange}
                      placeholder="e.g. Jubilee Hills Road No. 12, Gachibowli, Hyderabad"
                      className="w-full pl-10 pr-3 py-2 text-sm rounded bg-navy-900 border border-slate-800 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition duration-200 text-white placeholder-slate-600"
                      id="form-location"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs tracking-wider text-slate-350 font-medium block">Detailed Message</label>
                  <div className="relative">
                    <AlignLeft className="absolute left-3 top-2.5 h-4 w-4 text-gold-500/60" />
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. In need of a luxury 4 BHK villa with a pool or custom Grade-A commercial office."
                      className="w-full pl-10 pr-3 py-2 text-sm rounded bg-navy-900 border border-slate-800 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition duration-200 text-white placeholder-slate-600 resize-none"
                      id="form-message"
                    />
                  </div>
                </div>

                {/* Action button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full relative group overflow-hidden py-3 px-6 rounded font-bold text-sm transition-all duration-300 transform bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-navy-950 font-serif hover:shadow-[0_0_25px_rgba(197,168,128,0.4)] active:scale-[0.98] disabled:opacity-75 disabled:pointer-events-none"
                  id="confirm-appointment-btn"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-400 via-gold-200 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-navy-950" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Submitting Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Enquiry</span>
                      </>
                    )}
                  </span>
                </button>
              </form>
            ) : (
              /* Submission Successful Block */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-2 text-center"
                id="success-screen"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/40 text-gold-400 mb-6">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                
                <h3 className="text-3xl font-serif text-white tracking-tight font-medium mb-3">
                  Enquiry Received!
                </h3>
                
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-8">
                  Thank you for contacting Anjali Real Estate. Our team will call you soon.
                </p>

                <button
                  onClick={onClose}
                  className="px-8 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 font-bold hover:shadow-[0_0_15px_rgba(197,168,128,0.35)] rounded text-xs tracking-wider uppercase font-medium transition duration-200"
                  id="success-close-btn"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
