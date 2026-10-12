
// Strongest first.
const certifications = [
  {
    heading: "Oracle Cloud Infrastructure Associate",
    issuer: "Oracle",
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=1E1F7BAC5F66667EF107CC718BE721B3F45539EA491287BFB008BD99313D44FC'
  },
  {
    heading: "Project Management Fundamentals",
    issuer: "HelloPM",
    link: 'https://hellopm.co/certificate/?certificate_id=BXMWSH&utm_source=m13_resources_email&medium=email'
  },
  {
    heading: "Accenture Virtual Internship",
    issuer: "Accenture",
    link: 'https://www.linkedin.com/in/shivamgoswami-/details/certifications/'
  },
  {
    heading: "Remote Work and Virtual Collaboration",
    issuer: "Credly badge",
    link: 'https://www.credly.com/badges/93e880f5-c85a-4629-8243-d8cd3457a8d4?source=linked_in_profile'
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
          className="flex min-h-24 flex-col items-center justify-center gap-1 rounded-lg border border-white/20 p-4 text-center transition-colors hover:border-white/40 hover:bg-gray-900"
        >
          <span>{cert.heading}</span>
          <span className="text-xs text-[#b6b7bb]">{cert.issuer}</span>
        </a>
      ))}
    </div>
  </section>
);
