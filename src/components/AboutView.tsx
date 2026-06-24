/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Target, Eye, ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, PROCESS_TIMELINE } from '../data';

interface AboutViewProps {
  onCallNowClick: () => void;
}

export default function AboutView({ onCallNowClick }: AboutViewProps) {
  return (
    <div className="relative bg-stone-50 text-slate-900 min-h-screen pt-24" id="about-view">
      
      {/* Hero Banner header */}
      <section className="relative py-24 bg-navy-950 text-white border-b border-gold-500/15 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/5 via-navy-950 to-navy-950" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-bold font-serif flex items-center gap-1.5 justify-center">
            <Sparkles className="w-4 h-4 text-gold-400" />
            Corporate Profile
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white uppercase">
            About Anjali Real Estate
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Anjali Real Estate provides reliable and professional real estate services in Hyderabad. We help clients find properties that match their lifestyle and investment goals.
          </p>
        </div>
      </section>

      {/* Main Philosophy Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="about-philosophy">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs tracking-wider text-gold-600 font-bold uppercase block font-serif">
                3+ Years of Continuous Excellence
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-navy-950 font-bold tracking-tight">
                Our Story & Corporate Journey
              </h2>
            </div>
            
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
              Founded on the pillars of transparency and rigorous market intelligence, Anjali Real Estate was established to serve a growing demand for preeminent residential and commercial spaces in Hyderabad. Over the past 3+ years, we have transitioned from a boutique advisory firm into a major local real estate authority based in Jubilee Hills.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              At Anjali Real Estate, we view property search as a sophisticated journey rather than a sterile transaction. Whether we are matching you with a smart ultra-premium penthouse, navigating corporate layout plans for an IT tech giant, or negotiating developer agreements, our certified realtors serve with ultimate discretion, clear disclosure, and water-tight title verification.
            </p>

            <div className="p-5 border border-gold-500/15 bg-gold-500/5 rounded-xl space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-gold-700 font-bold font-serif flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gold-650" />
                Jubilee Hills Central Sanctuary
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Our executive lounge is situated comprehensively at Road No-12, Jubilee Hills, Hyderabad. We welcome high-net-worth clients for private consultations in our relaxed conference chambers.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Design Collage layout */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 via-transparent to-transparent blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
                  alt="Luxury exterior elevation"
                  className="rounded-xl border border-stone-200 shadow-lg object-cover w-full h-64"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80"
                  alt="Modern apartment high-rise"
                  className="rounded-xl border border-stone-200 shadow-lg object-cover w-full h-44"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4 pt-10">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80"
                  alt="Client luxury handshake"
                  className="rounded-xl border border-stone-200 shadow-lg object-cover w-full h-44"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80"
                  alt="Bespoke villa layout"
                  className="rounded-xl border border-stone-200 shadow-lg object-cover w-full h-64"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Mission & Vision Dual Cards */}
      <section className="py-20 bg-stone-100 border-y border-stone-250" id="about-mission-vision">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="p-8 rounded-2xl border border-stone-200 bg-white flex gap-4 items-start shadow-sm" id="mission-card">
            <div className="p-3 bg-gold-50 border border-gold-200 rounded-xl text-gold-600 shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-navy-950 tracking-tight">Our Mission</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">
                "To provide transparent and customer-focused real estate services."
              </p>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                We empower home seekers and corporate directors to command premium properties with absolute piece of mind, supported by certified advisors.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-2xl border border-stone-200 bg-white flex gap-4 items-start shadow-sm" id="vision-card">
            <div className="p-3 bg-gold-50 border border-gold-200 rounded-xl text-gold-600 shrink-0">
              <Eye className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-navy-950 tracking-tight">Our Vision</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">
                "To become a trusted real estate brand in Hyderabad."
              </p>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                To capture prime real estate markers by deploying advanced property due diligence, absolute contract neutrality, and elite wealth matching services.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Our Workflow Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="about-process">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs uppercase tracking-widest text-gold-600 font-bold font-serif">
            Our Blueprint Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-navy-950">
            Our Professional Process
          </h2>
          <p className="text-xs text-slate-500">
            Every transaction is seamlessly routed through our five-step pipeline to guarantee safety, authority compliance, and structural excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PROCESS_TIMELINE.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-stone-200 bg-white flex flex-col justify-between h-72 hover:border-gold-500/35 hover:shadow-lg transition-all duration-300"
              id={`process-step-${idx}`}
            >
              <div>
                <div className="font-serif text-3xl font-extrabold text-gold-400 opacity-60 mb-4">{step.step}</div>
                <h4 className="text-base font-serif font-bold text-navy-950 tracking-wide mb-2">{step.title}</h4>
                <p className="text-[11px] text-slate-505 font-sans leading-relaxed">{step.description}</p>
              </div>
              
              <div className="h-[2.5px] bg-gradient-to-r from-gold-600 via-gold-400 to-transparent w-1/2 mt-4 rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Instant Action CTA Banner */}
      <section className="py-20 bg-navy-950 text-white text-center relative overflow-hidden px-4">
        {/* Dynamic visual light flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gold-400/5 blur-3xl rounded-full" />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-white font-medium">Ready to Acquire Your Dream Address?</h2>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Get connected with local Hyderabad experts instantly. Submit your specific request directly or place a call request now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onCallNowClick}
              className="w-full sm:w-auto py-3.5 px-10 rounded bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-navy-950 font-serif font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] cursor-pointer"
            >
              Request Call Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
