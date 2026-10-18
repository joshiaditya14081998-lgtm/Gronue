// src/data/company.ts
// Real company data — extracted from groneuhealthcare.com
// Source: docs/CONTENT.md

export const company = {
  name: 'Groneu Healthcare',
  tagline: 'Crafted with care. Built for trust.',
  established: '2022',
  natureOfBusiness: 'Manufacturer, Trader, Wholesaler/Distributor',
  ceo: 'Nitin Patel',
  partners: [
    'Nitinkumar Kantibhai Patel',
    'Kamleshkumar Kantibhai Patel',
    'Manan Sanjaykumar Patel',
  ],
  totalEmployees: 'Upto 10 People',
  annualTurnover: '₹5 – 25 Cr',
  gstRegistrationDate: '07-09-2022',
  legalStatus: 'Partnership',
  gstNo: '24AAYFG3170H1Z5',
  iecCode: 'AAYFG3170H',
  responseRate: '81%',
  countryOfOrigin: 'India',

  officeAddress: {
    line1: 'Groneu Healthcare',
    line2: 'Unit 4, Survey No - 21 Paike 1,2, Shiv Industrial Park,',
    line3: 'B/H B.K Mercantile Bank, Songadh,',
    line4: 'Palanpur-Abu Highway, At- Songadh, Malan,',
    line5: 'Palanpur - 385001, Banaskantha, Gujarat, India',
  },

  factoryAddress: {
    line1: 'PATELNITIN, Plot 4, Shiv Ind Park,',
    line2: 'Abu Road Highway, Palanpur - 385001,',
    line3: 'Gujarat, India',
  },

  contact: {
    phone: '+91-8047844175',
    phoneDisplay: '+91 80478 44175',
    email: 'info@groneuhealthcare.com',
    whatsapp: '918047844175',
    whatsappLink: 'https://wa.me/918047844175',
    mapCoords: { lat: 24.21774, lng: 72.44681 },
    mapEmbedUrl:
      'https://www.google.com/maps?q=24.21774000,72.44681000&output=embed',
  },

  stats: [
    { label: 'Established', value: '2022' },
    { label: 'Annual Turnover', value: '₹5-25 Cr' },
    { label: 'Products', value: '28+' },
    { label: 'Max Capacity', value: '600K pcs/day' },
  ],

  capabilities: [
    {
      icon: 'Factory',
      title: 'Manufacturing Capacity',
      value: '600,000 pcs/day',
      description: 'High-volume production across multiple product lines',
    },
    {
      icon: 'PackageCheck',
      title: 'Product Range',
      value: '28+ products',
      description: 'Sanitary napkins & pads in sizes L to XXXL',
    },
    {
      icon: 'ShieldCheck',
      title: 'Quality Standards',
      value: 'BIS compliant',
      description: 'Industrial standards with internal QA at every stage',
    },
    {
      icon: 'Settings',
      title: 'Customization',
      value: 'White-label ready',
      description: 'Custom sizes, materials, packaging & branding',
    },
  ],

  whyUs: [
    {
      icon: 'ShieldCheck',
      title: 'Superior Quality',
      description:
        'Products in compliance with industrial standards, offered at most affordable prices.',
    },
    {
      icon: 'Users',
      title: 'Client-Focused Team',
      description:
        'Our professionals invest long working hours to manufacture products as per clients\' exact requirements.',
    },
    {
      icon: 'Factory',
      title: 'Real Manufacturing',
      description:
        'Own facility in Palanpur, Gujarat with 600K pcs/day capacity. GST & IEC registered exporter.',
    },
    {
      icon: 'Truck',
      title: 'Fast Delivery',
      description:
        '2-7 day delivery times with 81% response rate. Export-ready with IEC code.',
    },
  ],

  statutory: [
    { label: 'GST No.', value: '24AAYFG3170H1Z5' },
    { label: 'Import Export Code (IEC)', value: 'AAYFG3170H' },
    { label: 'GST Registration Date', value: '07-09-2022' },
    { label: 'Legal Status', value: 'Partnership' },
    { label: 'Annual Turnover', value: '₹5 – 25 Cr' },
    { label: 'Country of Origin', value: 'India' },
  ],

  whyUsOldSite:
    'Owing to the superior quality of the product range offered, we have carved a firm foothold in the domain. The products offered by us are in compliance with industrial standards and are offered at most affordable prices. The professionals appointed by us invest their long working hours in manufacturing products as per clients\' specifications and details to meet their exact requirements.',

  social: {
    // Note: old site had no real social links. Using placeholders.
    instagram: '#',
    twitter: '#',
    linkedin: '#',
    facebook: '#',
  },
}

export type Company = typeof company
