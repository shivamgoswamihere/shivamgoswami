import React from 'react';

const certifications = [
  {
    heading: "Accenture Virtual Internship",
    link: 'https://www.linkedin.com/in/shivamgoswami-/details/certifications/'
  },
  {
    heading: "Oracle Cloud Infrastructure Associate",
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=1E1F7BAC5F66667EF107CC718BE721B3F45539EA491287BFB008BD99313D44FC'
  },
  {
    heading: "Remote Work and Virtual Collaboration",
    link: 'https://www.credly.com/badges/93e880f5-c85a-4629-8243-d8cd3457a8d4?source=linked_in_profile'
  },
  {
    heading: "Project Management Fundamentals",
    link: 'https://hellopm.co/certificate/?certificate_id=BXMWSH&utm_source=m13_resources_email&medium=email'
  }
];

export const Certifications = () => (
  <section className="p-10">
    <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {certifications.map(cert => (
        /* The whole card is the link, not just the text inside it. */
        <a
          key={cert.heading}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-24 items-center justify-center rounded-lg border border-white/20 p-4 text-center transition-colors hover:border-white/40 hover:bg-gray-900"
        >
          {cert.heading}
        </a>
      ))}
    </div>
  </section>
);
