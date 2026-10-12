import { RESUME_URL } from './Contact';

export const Footer = () => (
  <footer className="mt-10 border-t border-white/10 px-10 py-6 text-sm text-[#b6b7bb]">
    <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
      <p>© {new Date().getFullYear()} Shivam Goswami · Built with React &amp; Tailwind CSS</p>
      <div className="flex gap-6">
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-white">Resume</a>
        <a href="https://github.com/shivamgoswamihere" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-white">GitHub</a>
        <a href="https://www.linkedin.com/in/shivamgoswami-/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-white">LinkedIn</a>
      </div>
    </div>
  </footer>
);
