/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Layers, MapPin, Landmark, PhoneCall } from 'lucide-react';
import { WORK_PROJECTS, BUSINESS_INFO } from '../data';

interface WorksViewProps {
  onCallNowClick: (requirementName?: string) => void;
}

export default function WorksView({ onCallNowClick }: WorksViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filterCategories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Apartments', value: 'apartments' },
    { label: 'Villas', value: 'villas' },
    { label: 'Commercial Spaces', value: 'commercial' },
    { label: 'Luxury Properties', value: 'luxury' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? WORK_PROJECTS
    : WORK_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="relative bg-stone-50 text-slate-900 min-h-screen pt-24" id="works-view">
      
      {/* Header section */}
      <section className="relative py-24 bg-navy-950 text-white border-b border-gold-500/15 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/5 via-navy-950 to-navy-950" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-bold font-serif flex items-center gap-1.5 justify-center">
            <Sparkles className="w-4 h-4 text-gold-400" />
            Signature Registry
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white uppercase">
            Our Works & Projects
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Explore our state-of-the-art property portfolio across prime commercial hubs and elite residential layouts in Hyderabad.
          </p>
        </div>
      </section>

      {/* Filter Categories Bar */}
      <section className="py-12 max-w-7xl mx-auto px-4" id="portfolio-filters">
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
          {filterCategories.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`py-2.5 px-5 rounded text-xs tracking-widest uppercase font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-navy-950 shadow-md'
                    : 'bg-white border border-stone-200 text-slate-600 hover:text-navy-950 hover:border-gold-500/35'
                }`}
                id={`filter-btn-${cat.value}`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Interactive Property Gallery Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="lookbook-gallery">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative h-[420px] overflow-hidden rounded-xl border border-stone-200 bg-white shadow-md flex flex-col justify-end"
                id={`work-card-${proj.id}`}
              >
                {/* Background image under card overlay has referrerPolicy */}
                <img
                  src={proj.imageUrl}
                  alt={proj.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Dark luxury navy cover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent group-hover:via-navy-950/50 transition-colors duration-300" />

                {/* Content Details Block */}
                <div className="relative z-10 p-6 md:p-8 space-y-4 text-white">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-gold-450 text-[10px] uppercase font-bold tracking-widest leading-none">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{proj.location}</span>
                    </div>
                    <h3 className="text-xl font-serif text-white tracking-wide font-bold">
                      {proj.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-350 font-sans leading-relaxed">
                    <strong>Type:</strong> {proj.propertyType}
                  </p>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden transition-all duration-350 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="pt-3 flex items-center justify-between border-t border-white/10">
                    <button
                      onClick={() => onCallNowClick(proj.title)}
                      className="inline-flex items-center gap-1.5 text-[11px] text-gold-400 hover:text-white font-bold tracking-wider uppercase transition-colors pointer-events-auto"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Enquire Project</span>
                    </button>

                    <span className="text-[10px] tracking-wider uppercase text-slate-400 font-semibold">
                      {proj.category}
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24 text-slate-450 bg-white rounded-xl border border-stone-200 shadow-inner" id="no-projects-view">
            <Layers className="w-12 h-12 text-stone-300 mx-auto mb-4" />
            <p className="text-sm">No real estate projects listed in this category currently.</p>
          </div>
        )}
      </section>

      {/* Direct Portfolio map callout */}
      <section className="py-20 bg-stone-100 border-t border-stone-200 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/5 via-transparent to-transparent blur-3xl pointer-events-none" />
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-600">
            <Landmark className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-serif text-navy-950 font-bold tracking-tight">Need Offline Site Surveys?</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
            We host customized physical site visits around Jubilee Hills, Financial District, and Lakeside. Schedule a consultation, and we will arrange executive travel.
          </p>
          <button
            onClick={() => onCallNowClick("Physical Site Survey")}
            className="inline-flex items-center gap-2 px-8 py-3 bg-navy-950 hover:bg-gold-500 hover:text-navy-950 text-gold-400 font-bold text-xs tracking-wider uppercase transition duration-200 rounded cursor-pointer"
          >
            Schedule Site Survey
          </button>
        </div>
      </section>

    </div>
  );
}
