/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Home, Building2, Briefcase, ShieldCheck, Sparkles, Twitter, PhoneCall, Trees, TrendingUp } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data';

interface ServicesViewProps {
  onCallNowClick: (serviceName?: string) => void;
}

export default function ServicesView({ onCallNowClick }: ServicesViewProps) {
  
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'residential-properties':
        return <Home className="w-6 h-6 text-gold-400" />;
      case 'commercial-properties':
        return <Building2 className="w-6 h-6 text-gold-400" />;
      case 'property-consultation':
        return <Briefcase className="w-6 h-6 text-gold-400" />;
      case 'property-management':
        return <ShieldCheck className="w-6 h-6 text-gold-400" />;
      case 'luxury-villas':
        return <Trees className="w-6 h-6 text-gold-400" />;
      case 'investment-properties':
        return <TrendingUp className="w-6 h-6 text-gold-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <div className="relative bg-stone-50 text-slate-900 min-h-screen pt-24" id="services-view">
      
      {/* Page Title Header */}
      <section className="relative py-24 bg-navy-950 text-white border-b border-gold-500/15 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/5 via-navy-950 to-navy-950" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-bold font-serif flex items-center gap-1.5 justify-center">
            <Sparkles className="w-4 h-4 text-gold-400" />
            Core Advisory Categories
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white uppercase">
            Property Services
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Meticulously created development, acquisition, valuation, and advisory solutions tailored precisely to your personal yield goals.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="detailed-services-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white hover:border-gold-500/30 transition-all duration-300 flex flex-col md:flex-row shadow-sm"
              id={`service-block-${serv.id}`}
            >
              {/* Active indicator bar */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />

              {/* Service Thumbnail image */}
              <div className="w-full md:w-2/5 relative min-h-48 md:min-h-full overflow-hidden">
                <img
                  src={serv.imageUrl}
                  alt={serv.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-t md:bg-gradient-to-r from-navy-950 via-navy-950/20 to-transparent" />
                
                {/* Category tag */}
                <div className="absolute top-4 left-4 bg-navy-950 border border-gold-500/25 px-2.5 py-1 rounded text-[9px] uppercase tracking-wider font-semibold text-gold-400 font-serif">
                  {serv.category}
                </div>
              </div>

              {/* Service details */}
              <div className="p-6 md:p-8 w-full md:w-3/5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-gold-50 border border-gold-200 shrink-0 text-gold-600 shadow-sm">
                      {getServiceIcon(serv.id)}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                      {serv.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {serv.description}
                  </p>

                  <p className="text-[11px] text-slate-500 font-sans border-t border-stone-100 pt-3">
                    Every transaction features absolute ownership title verification, documentation backing, and complete registration filing support.
                  </p>
                </div>

                {/* Sub Action elements */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=Discovering%20expert%20real%2520estate%20deals%20for%20${encodeURIComponent(serv.name)}%20at%20Anjali%20Real%2520Estate!%20%23Luxury`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 border border-blue-200 bg-blue-50/10 hover:bg-blue-50/25 rounded text-[11px] font-semibold text-blue-500 transition-all duration-200"
                    id={`chat-insta-detail-${serv.id}`}
                  >
                    <Twitter className="w-4 h-4 text-blue-500 fill-current" />
                    <span>Follow Us</span>
                  </a>

                  <button
                    onClick={() => onCallNowClick(serv.name)}
                    className="py-2.5 px-4 bg-navy-950 text-gold-400 border border-transparent hover:bg-gold-500 hover:text-navy-950 font-serif font-bold rounded text-center text-[11px] tracking-wider uppercase transition-all duration-200 cursor-pointer"
                    id={`book-session-detail-${serv.id}`}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Global Brand Promise Strip */}
      <section className="py-20 bg-stone-100 border-t border-stone-200 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-xl font-serif text-navy-950 font-bold">Standard of Pure Title Verification</h3>
          <p className="text-xs text-slate-500 max-w-xl mx-auto leading-relaxed">
            All our listings undergo strict independent legal clearance to provide secure real estate assets in Hyderabad, centered in Jubilee Hills Road No-12.
          </p>
          <div className="pt-2 text-xs text-slate-400 font-sans">
            Need customized solutions or bulk holdings? Contact us directly!
          </div>
        </div>
      </section>

    </div>
  );
}
