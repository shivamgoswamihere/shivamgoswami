const icon = name => `https://img.icons8.com/color/48/${name}.png`;

export const socials = [
  { name: "LinkedIn", icon: icon("linkedin"), link: "https://www.linkedin.com/in/shivamgoswami-/" },
  { name: "Gmail", icon: icon("gmail-new"), link: "mailto:shivamg1008@example.com" },
  { name: "Twitter", icon: icon("twitterx--v1"), link: "https://twitter.com/ShivamGoswami_" },
  { name: "WhatsApp", icon: icon("whatsapp--v1"), link: "https://wa.me/917248668648" },
  { name: "GitHub", icon: icon("github--v1"), link: "https://github.com/shivamgoswamihere" },
  { name: "Hashnode", icon: icon("hashnode"), link: "https://hashnode.com/@shivamgoswami" },
];

export const Contact = () => (
  <section className="p-5 w-full flex flex-col items-center">
    <h2 className="text-3xl font-semibold mb-6">Connect With Me</h2>
    <div className="flex flex-wrap justify-center gap-10">
      {socials.map(social => (
        <a key={social.name} href={social.link}>
          <img width="48" height="48" src={social.icon} alt={social.name} />
        </a>
      ))}
    </div>
  </section>
);
