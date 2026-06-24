/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Slide, WorkProject } from './types';

export const BUSINESS_INFO = {
  brandName: 'Anjali Real Estate',
  slogan: 'Curating Elite Residential & Commercial Addresses in Hyderabad',
  experience: '3+ Years Experience',
  address: 'Road No-12, Jubilee Hills, Hyderabad',
  phone: '+91 8919449475',
  email: 'info@anjalirealestate.com',
  twitterUsername: 'AnjaliRealEstate',
  twitterUrl: 'https://twitter.com/intent/follow?screen_name=AnjaliRealEstate',
  workingHours: [
    { days: 'Monday - Saturday', hours: '9:00 AM - 7:30 PM' },
    { days: 'Sunday', hours: '10:00 AM - 5:00 PM' }
  ]
};

export const HERO_SLIDES: Slide[] = [
  {
    id: 1,
    heading: 'Find Your Dream Property With Anjali Real Estate',
    subtitle: 'Premium Homes, Apartments & Commercial Spaces In Hyderabad',
    buttonText: 'Explore Properties',
    buttonAction: 'explore',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 2,
    heading: 'Luxury Living Starts Here',
    subtitle: 'Trusted Real Estate Solutions With 3+ Years Of Experience',
    buttonText: 'Contact Us',
    buttonAction: 'contact',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'residential-properties',
    name: 'Residential Properties',
    category: 'Sales',
    description: 'Premium apartments, villas and independent houses.',
    extendedDescription: 'Discover exceptionally crafted luxury spaces that elevate family comfort. From sky-high premium penthouses in Jubilee Hills to gated community villas overlooking scenic lakes, we match you with homes tailored to your aspirations.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    features: ['Luxury Villas & Mansions', 'Sky-high Premium Apartments', 'Independent Custom Bungalows', 'Gated Community Security'],
    twitterUrl: 'https://twitter.com/intent/tweet?text=Looking%20for%20premium%20villas%20and%20luxury%20homes%20in%20Hyderabad?%20Check%20out%20Anjali%20Real%20Estate!%20%23AnjaliRealEstate%20%23Hyderabad'
  },
  {
    id: 'commercial-properties',
    name: 'Commercial Properties',
    category: 'Sales & Lease',
    description: 'Office spaces, shops and business properties.',
    extendedDescription: 'Scale your enterprise with prime corporate addresses. We coordinate sales and flexible leases for state-of-the-art office spaces, retail showrooms, luxury boutiques, and modern co-working hubs in high-traffic commercial zones.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    features: ['Grade-A IT Park Office Spaces', 'Premium Retail Showrooms', 'Pre-leased Commercial Assets', 'Corporate Headquarters Hubs'],
    twitterUrl: 'https://twitter.com/intent/tweet?text=Need%20prime%20commercial%20or%20office%20spaces%20in%20Jubilee%20Hills?%20Talk%20to%20Anjali%20Real%20Estate.%20%23AnjaliRealEstate'
  },
  {
    id: 'property-consultation',
    name: 'Property Consultation',
    category: 'Advisory',
    description: 'Expert guidance for buying and selling properties.',
    extendedDescription: 'Navigate the complex Hyderabad real estate market with professional structural data. Our deep market intelligence, historical price analytics, and regulatory legal compliance reviews assure confidence in every single deal.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    features: ['Frictionless Buyer Representation', 'Market Valuation Reports', 'Legal Verification Guidance', 'Strategic Investment Portfolio Reviews'],
    twitterUrl: 'https://twitter.com/intent/tweet?text=Get%20expert%20real%20estate%20guidance%20for%20buying%20or%20selling%20properties%20with%20Anjali%20Real%20Estate.%20%23HyderabadRealEstate'
  },
  {
    id: 'property-management',
    name: 'Property Management',
    category: 'Support',
    description: 'Complete support for property maintenance.',
    extendedDescription: 'Protect your valuable brick-and-mortar assets even if you reside far away. Our thorough tenant screening, proactive maintenance support, regular physical audits, and transparent lease financial records ensure high rental yields.',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    features: ['Verified Tenant Background Clearance', 'Proactive Mechanical & Plumbing Care', 'Streamlined Rental Revenue Auditing', 'Comprehensive Legal Lease Management'],
    twitterUrl: 'https://twitter.com/intent/tweet?text=Stress-free%20property%20management%20and%20maintenance%20for%20NRI%20landlords%20by%20Anjali%20Real%20Estate.%20%23Management'
  },
  {
    id: 'luxury-villas',
    name: 'Luxury Villas',
    category: 'High-End',
    description: 'Premium villas with modern lifestyle facilities.',
    extendedDescription: 'Indulge in unmatched elegance and ultimate privacy. We offer multi-car parking space, bespoke private swimming pools, high-perimeter video security, and pristine smart-automation interior systems inside Jubilee Hills and Gachibowli estates.',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    features: ['State-of-the-art Home Automation', 'Infinity Pools & Private Decks', 'Multi-car Underground Parking', 'Unending Landscaped Backyards'],
    twitterUrl: 'https://twitter.com/intent/tweet?text=Dreaming%20of%20a%20private%20villa%20with%20an%20infinity%20pool%20in%20Hyderabad?%20Anjali%20Real%20Estate%20has%20you%20covered.%20%23LuxuryVillas'
  },
  {
    id: 'investment-properties',
    name: 'Investment Properties',
    category: 'Wealth Growth',
    description: 'Smart real estate investment opportunities.',
    extendedDescription: 'Optimize your wealth growth with high yield developments. We identify prime land parcels, cash-flow producing pre-leased warehouses, tax-sheltered fractional commercial properties, and under-market pre-sales.',
    imageUrl: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=800&q=80',
    features: ['Inspected High Return Yield Assets', 'Strategic Pre-launch Housing Sales', 'Hyderabad High Growth Areas Only', 'Flexible Fractional Capital Outlets'],
    twitterUrl: 'https://twitter.com/intent/tweet?text=Grow%20your%20wealth%20with%20curated%20pre-market%20real%20estate%20investments%20from%20Anjali%20Real%20Estate.%20%23InvestVizag%20%23InvestHyd'
  }
];

export const BRAND_PERKS = [
  {
    title: '3+ Years Experience',
    description: 'Serving elite clients across Hyderabad with pristine transaction delivery and trusted local market authority.'
  },
  {
    title: 'Trusted Property Experts',
    description: 'Our licensed realtors possess native local Jubelee Hills insight and comprehensive development layouts.'
  },
  {
    title: 'Quality Properties',
    description: 'Every plot, home, and commercial tower goes through multi-tier structural quality checks and due diligence.'
  },
  {
    title: 'Customer Support',
    description: 'A designated executive supports you in site tours, financial approvals, registrar listings, and handoff.'
  },
  {
    title: 'Transparent Process',
    description: 'Direct owner dialogues, completely verified documentation, and clean title-deed execution with zero hidden costs.'
  },
  {
    title: 'Best Locations',
    description: 'Highly demanded positions near crucial arteries: Jubilee Hills, Banjara Hills, Gachibowli, and Financial District.'
  }
];

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: 'proj-1',
    title: 'The Royal Sovereign Heights',
    location: 'Road No. 12, Jubilee Hills',
    category: 'luxury',
    propertyType: 'Penthouse Apartment',
    description: 'A monumental duplex penthouse styled with Carrara marble floors, private lift, sky terrace and panoramic city views.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj-2',
    title: 'Jubilee Elite Meadows',
    location: 'Filmnagar, Hyderabad',
    category: 'villas',
    propertyType: 'Luxury Villa',
    description: 'A triple-story contemporary smart bungalow with automated floor-to-ceiling glass panel curtains and private courtyard pool.',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj-3',
    title: 'Aura Commercial Emporia',
    location: 'Financial District, Hyderabad',
    category: 'commercial',
    propertyType: 'Grade-A Corporate Tower',
    description: 'Futuristic business plaza with solar glazing, double height executive lounge and automated workspace entries.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj-4',
    title: 'Anjali Platinum Courtyard',
    location: 'Madhapur, Hyderabad',
    category: 'apartments',
    propertyType: 'Gated Residential Block',
    description: 'Premium environment featuring luxury 3 & 4 BHK apartments, curated clubhouse, multi-sport courts and private spa.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj-5',
    title: 'The Serpentine Commercial Spine',
    location: 'Hitech City, Hyderabad',
    category: 'commercial',
    propertyType: 'Luxury Retail Hub',
    description: 'A boutique-focused open premium highstreet layout with bespoke landscape fountains and high visual exposure areas.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj-6',
    title: 'Lakeside Regency Bungalow',
    location: 'Gachibowli, Hyderabad',
    category: 'luxury',
    propertyType: 'Bespoke Lakefront Mansion',
    description: 'Imperial residential layout surrounding breathtaking lake views, private boating deck, and an internal gym theater.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  }
];

export const PROCESS_TIMELINE = [
  {
    step: '01',
    title: 'Customer Requirement',
    description: 'We host a private consultation to profile your preferred configuration, ideal area budget, and purpose of acquisition.'
  },
  {
    step: '02',
    title: 'Property Search',
    description: 'Our digital systems scan off-market registers to curate a hyper-tailored list of premium matching opportunities.'
  },
  {
    step: '03',
    title: 'Property Visit',
    description: 'We organize chauffeured VIP physical site tours accompanied by structural experts to review build quality.'
  },
  {
    step: '04',
    title: 'Documentation',
    description: 'Our in-house legal experts perform water-tight verification of ownership chains, local titles, and registry protocols.'
  },
  {
    step: '05',
    title: 'Final Deal',
    description: 'We represent your interests elegantly at the negotiation table and handle the registration seamlessly.'
  }
];
