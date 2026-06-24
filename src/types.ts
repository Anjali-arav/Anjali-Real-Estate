/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  extendedDescription?: string;
  imageUrl: string;
  features: string[];
  twitterUrl: string;
}

export interface Slide {
  id: number;
  heading: string;
  subtitle: string;
  buttonText: string;
  buttonAction: 'explore' | 'contact';
  imageUrl: string;
}

export interface WorkProject {
  id: string;
  title: string;
  location: string;
  category: 'apartments' | 'villas' | 'commercial' | 'luxury';
  propertyType: string;
  description: string;
  imageUrl: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyRequirement: string;
  preferredLocation: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  message: string;
}
