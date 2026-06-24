/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Home,
  Building2,
  Briefcase,
  ShieldCheck,
  Trees,
  TrendingUp,
  Twitter,
  ArrowRight,
  MapPin,
  Clock,
  Landmark,
  UserCheck,
  HeartHandshake
} from 'lucide-react';
import { HERO_SLIDES, SERVICES, BRAND_PERKS, WORK_PROJECTS, BUSINESS_INFO } from '../data';

interface HomeViewProps {
  setCurrentPage: (page: string) => void;
  onCallNowClick: (requirementName?: string) => void;
}

export default function HomeView({ setCurrentPage, onCallNowClick }: HomeViewProps) {
  // Hero Slider State
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-play interval for hero sliding
  useEffect(() => {
    const slideDuration = 6000;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, slideDuration);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleSliderAction = (action: 'explore' | 'contact') => {
    if (action === 'explore') {
      setCurrentPage('works');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (action === 'contact') {
      setCurrentPage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Helper map for service custom icons
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'residential-properties':
        return <Home className="w-5 h-5 text-gold-400" />;
      case 'commercial-properties':
        return <Building2 className="w-5 h-5 text-gold-400" />;
      case 'property-consultation':
        return <Briefcase className="w-5 h-5 text-gold-400" />;
      case 'property-management':
        return <ShieldCheck className="w-5 h-5 text-gold-400" />;
      case 'luxury-villas':
        return <Trees className="w-5 h-5 text-gold-400" />;
      case 'investment-properties':
        return <TrendingUp className="w-5 h-5 text-gold-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-gold-400" />;
    }
  };

  return (
    <div className="relative bg-stone-50 text-slate-900 min-h-screen" id="home-view">
      
      {/* 1. Full-Screen Property Image Slider */}
      <section className="relative h-[95vh] w-full overflow-hidden" id="hero-slider-section">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
            id={`slide-wrapper-${activeSlide}`}
          >
            {/* Background image render with referrerPolicy */}
            <img
              src={HERO_SLIDES[activeSlide].imageUrl}
              alt={HERO_SLIDES[activeSlide].heading}
              className="absolute inset-0 w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Luxury dark blue overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/80" />
          </motion.div>
        </AnimatePresence>

        {/* Floating Content over Slider */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Small golden tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/10 border border-gold-500/30 rounded-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-[10px] tracking-widest uppercase font-bold text-gold-100">
                {BUSINESS_INFO.experience} • HYDERABAD
              </span>
            </motion.div>

            {/* Heading text in Serif typography */}
            <motion.h1
              key={`h1-${activeSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl font-bold font-serif text-white tracking-tight leading-tight"
              id="hero-heading-text"
            >
              {HERO_SLIDES[activeSlide].heading}
            </motion.h1>

            {/* Subtitle description */}
            <motion.p
              key={`p-${activeSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed"
              id="hero-subtitle-text"
            >
              {HERO_SLIDES[activeSlide].subtitle}
            </motion.p>

            {/* Actions CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
              id="hero-ctas-container"
            >
              <button
                onClick={() => handleSliderAction(HERO_SLIDES[activeSlide].buttonAction)}
                className="w-full sm:w-auto relative group overflow-hidden py-3.5 px-8 rounded font-bold text-xs tracking-widest uppercase transition-all duration-300 transform bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-navy-950 hover:shadow-[0_0_25px_rgba(197,168,128,0.5)] active:scale-[0.98] cursor-pointer"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-400 via-gold-200 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">{HERO_SLIDES[activeSlide].buttonText}</span>
              </button>

              <button
                onClick={onCallNowClick as any}
                className="w-full sm:w-auto bg-navy-950/70 border border-gold-500/30 text-gold-400 hover:text-white hover:bg-navy-900 transition-all duration-200 py-3.5 px-8 rounded text-xs tracking-widest uppercase font-bold text-center cursor-pointer"
              >
                Call Now Enquiry
              </button>
            </motion.div>
          </div>
        </div>

        {/* Left Arrow Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 border border-slate-700 text-white hover:text-gold-404 hover:bg-navy-900/60 transition-all duration-200 relative z-20 cursor-pointer"
          id="slider-prev-btn"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow Navigation */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 border border-slate-700 text-white hover:text-gold-404 hover:bg-navy-900/60 transition-all duration-200 relative z-20 cursor-pointer"
          id="slider-next-btn"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slider Indicator dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-2.5 relative z-20" id="slider-dots-container">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                activeSlide === index ? 'w-8 bg-gradient-to-r from-gold-500 to-gold-300' : 'w-2 bg-slate-600 hover:bg-slate-400'
              }`}
              id={`slider-dot-${index}`}
            />
          ))}
        </div>
      </section>

      {/* 2. About Preview Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-stone-200" id="about-intro-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual branding showcase */}
            <div className="relative lg:col-span-5 group p-1" id="about-intro-visual-box">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 via-transparent to-gold-500/10 blur-xl scale-95 opacity-80" />
              <div className="relative overflow-hidden rounded-2xl border border-gold-500/20 bg-stone-100 p-2 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Anjali Real Estate Jubilee Hills Workspace"
                  className="w-full rounded-xl object-cover aspect-4/3 hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Experience highlight flag */}
                <div className="absolute -bottom-4 -right-4 bg-navy-950 border border-gold-500/40 p-5 rounded-xl shadow-lg flex items-center gap-3">
                  <div className="text-3xl md:text-4xl font-serif font-bold text-gold-400">3+</div>
                  <div className="text-[10px] tracking-widest text-slate-300 font-bold uppercase leading-tight">
                    Years of Premier<br />Address Curation
                  </div>
                </div>
              </div>
            </div>

            {/* Context Narrative Card */}
            <div className="lg:col-span-7 space-y-6" id="about-intro-content-box">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-gold-600 font-bold font-serif flex items-center gap-1.5 justify-center lg:justify-start">
                  <Sparkles className="w-4 h-4 text-gold-500" />
                  Elite Property Advisory
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-center lg:text-left text-navy-950">
                  About Anjali Real Estate
                </h2>
              </div>

              <p className="text-slate-700 font-sans leading-relaxed text-center lg:text-left text-sm md:text-base">
                Anjali Real Estate is a trusted property consultant in Hyderabad, helping customers discover quality residential and commercial properties. With 3+ years of experience, we provide reliable real estate solutions.
              </p>
              
              <p className="text-slate-600 font-sans leading-relaxed text-center lg:text-left text-sm">
                Situated at the heart of luxury in Road No. 12, Jubilee Hills, our firm manages an premium portfolio of high-value properties spanning modern apartment blocks, bespoke commercial towers, and spectacular lake-facing villas. We prioritize direct ownership verification and meticulous due diligence above all else.
              </p>

              {/* Unique Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 text-slate-800">
                  <div className="p-1 rounded-full bg-gold-100 text-gold-650">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide font-sans">Verified Properties Only</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800">
                  <div className="p-1 rounded-full bg-gold-100 text-gold-650">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide font-sans">Absolute Client Satisfaction</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800">
                  <div className="p-1 rounded-full bg-gold-100 text-gold-650">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide font-sans">Professional Advisor Guidance</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800">
                  <div className="p-1 rounded-full bg-gold-100 text-gold-650">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide font-sans">Highly Transparent Deals</span>
                </div>
              </div>

              {/* Learn More CTA trigger */}
              <div className="pt-4 text-center lg:text-left">
                <button
                  onClick={() => {
                    setCurrentPage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-serif text-sm text-gold-600 hover:text-navy-950 inline-flex items-center gap-2 group transition-colors focus:outline-none cursor-pointer"
                  id="about-learn-more-btn"
                >
                  <span className="border-b border-gold-550/55 pb-0.5 group-hover:border-navy-950 transition-all font-bold">Know More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Property Services Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-stone-50 border-b border-stone-200" id="services-preview-section">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-bold font-serif">
              Our Core Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-navy-950">
              Premium Property Services
            </h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Professional real estate execution backed by 3+ years of elite local Hyderabad intelligence. Every service features complete advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((serv) => (
              <div
                key={serv.id}
                className="group relative overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm hover:shadow-xl hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between"
                id={`services-card-${serv.id}`}
              >
                {/* Service image block */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={serv.imageUrl}
                    alt={serv.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                  
                  {/* Category flag */}
                  <div className="absolute top-3 right-3 bg-navy-950/90 border border-gold-500/30 px-2.5 py-1 rounded text-[10px] tracking-wider uppercase font-semibold text-gold-400 font-serif">
                    {serv.category}
                  </div>
                </div>

                {/* Service body details block */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded bg-gold-50 text-gold-600 border border-gold-200 shrink-0">
                        {getServiceIcon(serv.id)}
                      </div>
                      <h3 className="text-lg font-serif font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                        {serv.name}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 font-sans leading-relaxed">
                      {serv.description}
                    </p>
                  </div>

                  {/* Actions: Twitter Follow Us or Direct Call Enquiry */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {/* Twitter Button: "Follow Us" */}
                    <a
                      href={`https://twitter.com/intent/tweet?text=Highly%20recommend%20${encodeURIComponent(serv.name)}%20from%20Anjali%20Real%20Estate,%20located%20in%20Jubilee%20Hills,%20Hyderabad!%20%23RealEstate`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 border border-[#1DA1F2]/20 bg-[#1DA1F2]/5 hover:bg-[#1DA1F2]/10 rounded text-[11px] font-bold text-[#1DA1F2] transition duration-200"
                      id={`chat-insta-btn-${serv.id}`}
                    >
                      <Twitter className="w-3.5 h-3.5 fill-current" />
                      <span>Follow Us</span>
                    </a>

                    <button
                      onClick={() => onCallNowClick(serv.name)}
                      className="py-2 px-3 bg-navy-950 text-gold-400 border border-transparent hover:bg-gold-500 hover:text-navy-950 text-center rounded text-[11px] font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer"
                      id={`book-session-preview-btn-${serv.id}`}
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-navy-950 text-white overflow-hidden" id="why-choose-us-section">
        {/* Decorative Golden ambient glow */}
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gold-400/5 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold font-serif flex items-center justify-center gap-1.5">
              <Landmark className="w-4 h-4 text-gold-500" />
              Solid Foundations
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
              Why Choose Us
            </h2>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Our core corporate pillars. What has established Anjali Real Estate as the luxury real estate team of choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BRAND_PERKS.map((perk, index) => (
              <div
                key={index}
                className="p-6 relative group overflow-hidden rounded-xl border border-gold-500/10 bg-navy-900/55 backdrop-blur-sm shadow hover:border-gold-500/35 transition-all duration-300"
                id={`perk-card-${index}`}
              >
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 font-serif font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-base font-serif font-bold text-white tracking-tight group-hover:text-gold-400 transition-colors">
                    {perk.title}
                  </h3>
                  
                  <p className="text-xs text-slate-350 font-sans leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Works Preview (Portfolio Showcase) */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-stone-200" id="works-preview-section">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-bold font-serif">
              Work Showcase Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-navy-950">
              Our Works Preview
            </h2>
            <p className="text-xs text-slate-500">
              A premium visual overview highlighting our luxury apartments, modern villas, commercial buildings and residential projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WORK_PROJECTS.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                className="group relative h-[420px] overflow-hidden rounded-xl border border-stone-250 shadow-lg cursor-default flex flex-col justify-end"
                id={`work-preview-item-${proj.id}`}
              >
                {/* Image render with Zoom on hover */}
                <img
                  src={proj.imageUrl}
                  alt={proj.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                {/* Info pane */}
                <div className="relative z-10 p-6 space-y-2 text-white">
                  <div className="flex items-center gap-1.5 text-gold-400 font-sans text-[10px] uppercase tracking-widest font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{proj.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-white tracking-wide">
                    {proj.title}
                  </h3>
                  
                  <p className="text-xs text-slate-350 font-sans leading-relaxed">
                    {proj.propertyType}
                  </p>

                  <p className="text-xs text-slate-300 max-w-xs font-sans opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-300 leading-relaxed overflow-hidden">
                    {proj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-12">
            <button
              onClick={() => {
                setCurrentPage('works');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="relative group overflow-hidden py-3.5 px-10 rounded text-xs tracking-widest uppercase font-bold transition-all duration-300 transform bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-navy-950 group hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] cursor-pointer"
              id="full-works-btn"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-400 via-gold-200 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">View All Projects</span>
            </button>
          </div>
        </div>
      </section>

      {/* Trust Quote / Stats Section */}
      <section className="relative py-16 px-4 bg-stone-100 border-b border-stone-200" id="stats-section">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-1">
            <p className="text-4xl font-serif font-bold text-navy-950">3+ Years</p>
            <p className="text-xs tracking-widest uppercase font-semibold text-gold-600">Local Experience</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl font-serif font-bold text-navy-950">150+ Cr</p>
            <p className="text-xs tracking-widest uppercase font-semibold text-gold-600">Property Realized</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl font-serif font-bold text-navy-950">100%</p>
            <p className="text-xs tracking-widest uppercase font-semibold text-gold-600">Pure Legal Clearance</p>
          </div>
        </div>
      </section>

    </div>
  );
}
