
/* Newest job first; the first entry is treated as the current role. */
const experience = [
  {
    company: "Voltuswave Technologies",
    role: "Software Engineer",
    period: "July 2025 — Present",
    projects: [
      {
        stack: ["React 18", "TypeScript", "Redux Toolkit", "React Query", "MUI", "Node.js", "DynamoDB", "Vitest", "Jest", "Jenkins"],
        highlights: [
          "Shipped 10+ features and fixed 80+ bugs within a year on a production healthcare web platform, using React 18, TypeScript, Redux Toolkit, React Query and MUI, with unit tests in Vitest and Jest.",
          "Built a token-efficient AI workflow with Claude (reusable skills, context compaction, project-level instructions) to deliver faster at lower cost, validating AI-generated code through code review, type checks and tests before release.",
          "Extended a Node.js/TypeScript user-service (DynamoDB) with new product capabilities, including user preferences and multi-program enrollment history, plus a reusable date-display utility.",
          "Improved data accuracy and code reliability by filtering out invalid data before it reached users and adding strict typing to backend handlers, catching errors at build time instead of in production.",
          "Built proofs of concept to validate new ideas, reviewed PRs, and supported QA → UAT → Production releases via Jenkins."
        ]
      }
    ]
  },
  {
    company: "Ninepages Techsolutions",
    role: "Application Developer",
    period: "September 2024 — June 2025",
    projects: [
      {
        stack: ["React.js", "JavaScript", "Node.js", "MongoDB", "REST APIs", "Postman"],
        highlights: [
          "Designed dynamic single-page application features using React Router, ensuring smooth transitions and intuitive navigation.",
          "Built and maintained reusable UI components, leading to a more organized and maintainable codebase.",
          "Integrated JWT-based authentication and bcrypt for password hashing to ensure secure user access."
        ]
      }
    ]
  },
  {
    company: "ADRDE (DRDO)",
    role: "Front-End Developer Trainee",
    period: "July 2023 — August 2023",
    projects: [
      {
        stack: ["React.js", "React Router"],
        highlights: [
          "Accomplished a reduction in interface load time by implementing lazy loading and code splitting in React components.",
          "Enhanced user navigation experience by implementing dynamic routing with React Router, ensuring context-aware transitions and smooth page loads."
        ]
      }
    ]
  }
];

export const Experience = () => (
  <section className="p-10">
    <h2 className="text-3xl font-semibold mb-6">Experience</h2>

    <ol className="space-y-4">
      {experience.map((job, index) => (
        <li
          key={job.company}
          className="rounded-lg border border-white/20 border-l-2 border-l-purple-500 p-5 transition-colors hover:border-white/40"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-xl font-bold">{job.company}</h3>
            <p className="flex items-center gap-2 text-sm text-[#b6b7bb]">
              {index === 0 && (
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

          <div className="mt-4 space-y-4">
            {job.projects.map(project => (
              <div key={project.name ?? job.company} className="border-t border-white/10 pt-3 first:border-t-0 first:pt-0">
                {project.name && (
                  <p className="font-semibold text-white">{project.name}</p>
                )}

                <ul className="mt-2 list-disc space-y-1 pl-5 text-[#b6b7bb]">
                  {project.highlights.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <li
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-[#b6b7bb]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </li>
      ))}
    </ol>
  </section>
);
