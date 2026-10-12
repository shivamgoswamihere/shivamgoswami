
/* Newest job first. Dates are "YYYY-MM"; no `end` means current role. */
const experience = [
  {
    company: "Voltuswave Technologies",
    role: "Software Engineer",
    type: "Full-time",
    start: "2025-07",
    projects: [
      {
        stack: ["React 18", "TypeScript", "Redux Toolkit", "React Query", "MUI", "Node.js", "DynamoDB", "Vitest", "Jest", "Jenkins"],
        highlights: [
          "Shipped 20+ features and fixed 150+ bugs within a year on a production healthcare web platform, using React 18, TypeScript, Redux Toolkit, React Query and MUI, with unit tests in Vitest and Jest.",
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
    type: "Full-time",
    start: "2024-09",
    end: "2025-06",
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
    type: "Internship",
    start: "2023-07",
    end: "2023-08",
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

// Inclusive month count: Jul 2025 → Jul 2025 is 1 month.
const monthsBetween = (start, end) => {
  const [sy, sm] = start.split("-").map(Number);
  const now = new Date();
  const [ey, em] = end ? end.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
  return (ey - sy) * 12 + (em - sm) + 1;
};

const formatDuration = months => {
  const y = Math.floor(months / 12), m = months % 12;
  return [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo${m > 1 ? "s" : ""}`].filter(Boolean).join(" ");
};

const formatMonth = ym => new Date(`${ym}-01T00:00`).toLocaleDateString("en", { month: "short", year: "numeric" });

const fullTimeYears = Math.floor(
  experience.filter(job => job.type === "Full-time").reduce((sum, job) => sum + monthsBetween(job.start, job.end), 0) / 12
);

const stats = [
  { value: `${fullTimeYears}+ yrs`, label: "professional experience" },
  { value: "20+", label: "features shipped" },
  { value: "150+", label: "bugs fixed" },
];

// Bold the numbers ("10+", "80+") so metrics stand out when skimming.
const emphasizeMetrics = text =>
  text.split(/(\d+\+)/).map((part, i) => (i % 2 ? <strong key={i} className="text-white">{part}</strong> : part));

export const Experience = () => (
  <section className="p-10">
    <h2 className="text-3xl font-semibold mb-6">Experience</h2>

    <dl className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
      {stats.map(stat => (
        <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
          <dt className="sr-only">{stat.label}</dt>
          <dd className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-3xl font-bold text-transparent">{stat.value}</dd>
          <dd aria-hidden="true" className="mt-1 text-sm text-[#b6b7bb]">{stat.label}</dd>
        </div>
      ))}
    </dl>

    <ol className="space-y-4">
      {experience.map(job => (
        <li
          key={job.company}
          className="rounded-lg border border-white/20 border-l-2 border-l-purple-500 p-5 transition-colors hover:border-white/40"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-xl font-bold">{job.company}</h3>
            <p className="flex items-center gap-2 text-sm text-[#b6b7bb]">
              {!job.end && (
                <span className="inline-flex items-center gap-1.5">
                  <span aria-hidden="true" className="size-2 rounded-full bg-green-400" />
                  <span className="sr-only">Current role.</span>
                </span>
              )}
              {formatMonth(job.start)} — {job.end ? formatMonth(job.end) : "Present"}
              <span aria-hidden="true">·</span>
              {formatDuration(monthsBetween(job.start, job.end))}
            </p>
          </div>

          <p className="mt-1 flex flex-wrap items-center gap-2">
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text font-semibold text-transparent">{job.role}</span>
            <span className="rounded-full border border-white/20 px-2 py-0.5 text-xs text-[#b6b7bb]">{job.type}</span>
          </p>

          <div className="mt-4 space-y-4">
            {job.projects.map(project => (
              <div key={project.name ?? job.company} className="border-t border-white/10 pt-3 first:border-t-0 first:pt-0">
                {project.name && (
                  <p className="font-semibold text-white">{project.name}</p>
                )}

                <ul className="mt-2 list-disc space-y-1 pl-5 text-[#b6b7bb]">
                  {project.highlights.map(point => (
                    <li key={point}>{emphasizeMetrics(point)}</li>
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
