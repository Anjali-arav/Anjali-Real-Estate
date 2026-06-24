/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Phone, Mail, Clock, Send, ShieldCheck, Twitter, Building2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { ContactFormData } from '../types';

export default function ContactView() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="relative bg-stone-50 text-slate-900 min-h-screen pt-24" id="contact-view">
      
      {/* Header section */}
      <section className="relative py-24 bg-navy-950 text-white border-b border-gold-500/15 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/5 via-navy-950 to-navy-950" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-bold font-serif flex items-center gap-1.5 justify-center">
            <Sparkles className="w-4 h-4 text-gold-400" />
            Advisory Desks
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white uppercase">
            Contact Anjali Real Estate
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Our premium property acquisition team and certified financial analysts are available to streamline your purchases.
          </p>
        </div>
      </section>

      {/* Main layouts section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="contact-details-grid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Details block */}
          <div className="space-y-10" id="contact-details-panel">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs uppercase tracking-wider text-navy-900 font-bold font-serif">
                Corporate Hotlines
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-navy-950 font-bold tracking-tight">
                Our Front Office Desks
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto lg:mx-0">
                To coordinate custom physical surveys of gated high-end villas or commercial parks, please call our head quarters or drop an automated enquiry form below.
              </p>
            </div>

            {/* Custom styled contact list */}
            <div className="space-y-6">
              
              {/* Address detail */}
              <div className="flex gap-4 p-5 rounded-xl border border-stone-200 bg-white hover:border-gold-500/20 transition-all shadow-sm" id="contact-item-address">
                <div className="p-3 bg-gold-50 border border-gold-200 text-gold-600 rounded-lg shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-xs uppercase tracking-widest text-slate-450 font-serif font-bold">Main Headquarters</h4>
                  <p className="text-sm text-navy-950 leading-relaxed font-sans font-semibold">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Situated elegantly at Road No-12, Jubilee Hills. Dedicated client valet parking available.
                  </p>
                </div>
              </div>

              {/* Call detail */}
              <div className="flex gap-4 p-5 rounded-xl border border-stone-200 bg-white hover:border-gold-500/20 transition-all shadow-sm" id="contact-item-phone">
                <div className="p-3 bg-gold-50 border border-gold-200 text-gold-600 rounded-lg shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-xs uppercase tracking-widest text-slate-450 font-serif font-bold font-bold">Senior Advisory Desk</h4>
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-lg text-gold-600 font-serif font-bold hover:underline"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-[11px] text-slate-500">
                    Mon-Sat: 9:00 AM - 7:30 PM | Sun: 10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

              {/* Email detail */}
              <div className="flex gap-4 p-5 rounded-xl border border-stone-200 bg-white hover:border-gold-500/20 transition-all shadow-sm" id="contact-item-email">
                <div className="p-3 bg-gold-50 border border-gold-200 text-gold-600 rounded-lg shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-xs uppercase tracking-widest text-slate-450 font-serif font-bold">Business Email</h4>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-sm text-navy-950 hover:text-gold-600 font-sans font-bold transition-colors"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-[11px] text-slate-500">
                    We respond to global institutional briefs within 12 working hours.
                  </p>
                </div>
              </div>

              {/* Twitter detail */}
              <div className="flex gap-4 p-5 rounded-xl border border-blue-105 bg-blue-50/20 hover:border-blue-400 transition-all shadow-sm" id="contact-item-twitter">
                <div className="p-3 bg-blue-50 border border-blue-200 text-blue-500 rounded-lg shrink-0">
                  <Twitter className="w-5 h-5 fill-current" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-xs uppercase tracking-widest text-blue-500 font-serif font-bold">Twitter Integration</h4>
                  <a
                    href={BUSINESS_INFO.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-navy-950 font-sans font-bold hover:text-blue-500 flex items-center gap-1.5"
                  >
                    <span>@{BUSINESS_INFO.twitterUsername}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 font-bold uppercase">Follow</span>
                  </a>
                  <p className="text-[11px] text-slate-500">
                    Stay posted with instant pre-registrations and direct real estate market layouts via our Twitter handle.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Inquiry form panel */}
          <div className="relative p-1" id="contact-form-panel">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 via-transparent to-gold-550/5 blur-xl scale-95 opacity-50" />
            <div className="relative rounded-2xl border border-stone-200 bg-white p-6 md:p-8 self-start shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-600 via-gold-400 to-transparent rounded-t-2xl" />

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-enquiry-form">
                  <div className="space-y-1">
                    <h3 className="text-xl font-serif font-bold text-navy-950">Send Inquiry</h3>
                    <p className="text-xs text-slate-500">Leave your details below and our team will get back to you immediately.</p>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs tracking-wider text-slate-655 font-semibold block">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Anjali Govindavajhula"
                      className="w-full px-3 py-2 text-sm rounded bg-stone-50 border border-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition duration-200 text-slate-900 placeholder-slate-450"
                      id="enquiry-name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email field */}
                    <div className="space-y-1.5">
                      <label className="text-xs tracking-wider text-slate-655 font-semibold block">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full px-3 py-2 text-sm rounded bg-stone-50 border border-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition duration-200 text-slate-900 placeholder-slate-450"
                        id="enquiry-email"
                      />
                    </div>

                    {/* Phone field */}
                    <div className="space-y-1.5">
                      <label className="text-xs tracking-wider text-slate-655 font-semibold block">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 8919449475"
                        className="w-full px-3 py-2 text-sm rounded bg-stone-50 border border-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition duration-200 text-slate-900 placeholder-slate-450"
                        id="enquiry-phone"
                      />
                    </div>
                  </div>

                  {/* Property Type selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs tracking-wider text-slate-655 font-semibold block">Property Type Interested *</label>
                    <select
                      name="propertyType"
                      required
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm rounded bg-stone-50 border border-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition duration-200 text-slate-900 cursor-pointer"
                      id="enquiry-property-type"
                    >
                      <option value="">Select Property Type</option>
                      <option value="Apartments">Premium Luxury Apartments</option>
                      <option value="Villas">Modern Gated Villas</option>
                      <option value="Commercial Space">Grade-A Commercial Space</option>
                      <option value="Luxury Land">Luxury Investment Land / Plot</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label className="text-xs tracking-wider text-slate-655 font-semibold block">Detailed Message *</label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your specific real estate budget requirements, preferred layouts, or timing goals here..."
                      className="w-full p-3 text-sm rounded bg-stone-50 border border-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 outline-none transition duration-205 text-slate-900 placeholder-slate-450 resize-none"
                      id="enquiry-message"
                    />
                  </div>

                  {/* Submit CTA button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full relative group overflow-hidden py-3 px-6 rounded font-bold text-xs tracking-widest uppercase transition-all duration-300 transform bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-navy-950 font-serif hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] disabled:opacity-75 disabled:pointer-events-none cursor-pointer"
                    id="submit-enquiry-btn"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-400 via-gold-200 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-navy-950" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              ) : (
                /* Success Screen */
                <div className="py-10 text-center space-y-6" id="enquiry-success-screen">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-400/10 border border-gold-500/30 text-gold-600">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif text-navy-950 font-bold">Enquiry Sent!</h3>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                      Thank you for contacting Anjali Real Estate. Our team will call you soon.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 border border-stone-250 hover:border-gold-500/30 hover:text-gold-600 rounded text-xs tracking-wider uppercase font-semibold transition duration-200 cursor-pointer"
                    id="reset-enquiry-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Google Maps Section (Jubilee Hills Road No. 12 Area) */}
      <section className="relative h-96 w-full border-t border-stone-200 bg-white" id="google-map-section">
        {/* Real functional map pointing Road 12 Jubilee Hills Hyderabad */}
        <iframe
          src="https://maps.google.com/maps?q=Road%20No%2012%2C%20Jubilee%20Hills%2C%20Hyderabad&t=m&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full opacity-90 focus:outline-none border-0"
          allowFullScreen={false}
          loading="lazy"
          title="Anjali Real Estate Jubilee Hills Map Locator"
          referrerPolicy="no-referrer"
          id="map-iframe"
        />
        
        {/* Locator info widget overlay */}
        <div className="absolute bottom-6 left-6 right-6 md:left-12 md:right-auto bg-navy-950/95 border border-gold-500/30 rounded-xl p-5 backdrop-blur-md shadow-2xl max-w-sm hidden sm:block relative z-10 text-white">
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-2 text-gold-400 font-bold text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>Locator Coordinates</span>
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Anjali Real Estate is located on Road No-12, Jubilee Hills, Hyderabad.
            </p>
            <div className="text-[10px] text-slate-400 font-sans border-t border-slate-800 pt-2 flex justify-between">
              <span>HYDERABAD, IN</span>
              <span>PIN 500033</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
