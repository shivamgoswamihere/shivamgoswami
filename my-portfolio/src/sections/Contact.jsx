import { useState } from 'react';

export const EMAIL = "shivamg1008@gmail.com";
export const RESUME_URL = "/resume.pdf";

const icon = name => `https://img.icons8.com/color/48/${name}.png`;

export const socials = [
  { name: "LinkedIn", icon: icon("linkedin"), link: "https://www.linkedin.com/in/shivamgoswami-/" },
  { name: "Gmail", icon: icon("gmail-new"), link: `mailto:${EMAIL}` },
  { name: "Twitter", icon: icon("twitterx--v1"), link: "https://twitter.com/ShivamGoswami_" },
  { name: "WhatsApp", icon: icon("whatsapp--v1"), link: "https://wa.me/917248668648" },
  { name: "GitHub", icon: icon("github--v1"), link: "https://github.com/shivamgoswamihere" },
  { name: "Hashnode", icon: icon("hashnode"), link: "https://hashnode.com/@shivamgoswami" },
];

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="p-10 w-full flex flex-col items-center text-center">
      <h2 className="text-3xl font-semibold mb-2">Connect With Me</h2>
      <p className="mb-6 text-[#b6b7bb]">Open to frontend / full-stack engineering roles.</p>

      <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
        <a href={`mailto:${EMAIL}`} className="text-lg text-white underline-offset-4 hover:underline">{EMAIL}</a>
        <button
          type="button"
          onClick={copyEmail}
          className="min-h-11 rounded-lg border border-white/20 px-4 text-sm text-[#b6b7bb] transition-colors hover:bg-white/10"
        >
          <span aria-live="polite">{copied ? "Copied!" : "Copy email"}</span>
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {socials.map(social => (
          <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
            <img width="48" height="48" src={social.icon} alt="" />
          </a>
        ))}
      </div>
    </section>
  );
};
