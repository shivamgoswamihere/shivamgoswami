import React from 'react';

/* NOTE: `highlights` are lorem placeholders — replace with real
   accomplishments (ideally metric-led: what changed, by how much). */
const experience = [
  {
    company: "Voltuswave Technologies",
    role: "Software Developer",
    period: "July 2025 — Present",
    current: true,
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git"],
    highlights: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    ]
  },
  {
    company: "Ninepages Techsolutions",
    role: "Web Developer",
    period: "September 2024 — July 2025",
    current: false,
    stack: ["React.js", "JavaScript", "Node.js", "MongoDB", "REST APIs", "Postman"],
    highlights: [
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."
    ]
  }
];

export const Experience = () => (
  <section className="p-10">
    <h2 className="text-3xl font-semibold mb-6">Experience</h2>

    <ol className="space-y-4">
      {experience.map(job => (
        <li
          key={job.company}
          className="rounded-lg border border-white/20 border-l-2 border-l-purple-500 p-5 transition-colors hover:border-white/40"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-xl font-bold">{job.company}</h3>
            <p className="flex items-center gap-2 text-sm text-[#b6b7bb]">
              {job.current && (
                <span className="inline-flex items-center gap-1.5">
                  <span aria-hidden="true" className="size-2 rounded-full bg-green-400" />
                  <span className="sr-only">Current role.</span>
                </span>
              )}
              {job.period}
            </p>
          </div>

          <p className="mt-1 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text font-semibold text-transparent">
            {job.role}
          </p>

          <ul className="mt-3 list-disc space-y-1 pl-5 text-[#b6b7bb]">
            {job.highlights.map(point => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <ul className="mt-4 flex flex-wrap gap-2">
            {job.stack.map(tech => (
              <li
                key={tech}
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-[#b6b7bb]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </section>
);
