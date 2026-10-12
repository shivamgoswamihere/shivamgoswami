import { useState } from 'react';
import Icons from '../components/Icons'

const technical = {
  Tools: [
    { name: 'VS Code', image: Icons.vscode },
    { name: 'Git', image: Icons.git },
    { name: 'Github', image: Icons.github },
    { name: 'Jenkins' },
    { name: 'Postman', image: Icons.postman },
    { name: 'Claude AI' },
    { name: 'Vite', image: Icons.vitejs },
    { name: 'Figma', image: Icons.figma },
  ],
  Skills: [
    { name: 'TypeScript' },
    { name: 'JavaScript', image: Icons.js },
    { name: 'React.js', image: Icons.react },
    { name: 'Redux Toolkit', image: Icons.redux },
    { name: 'React Query' },
    { name: 'MUI' },
    { name: 'Tailwind CSS', image: Icons.tailwindcss },
    { name: 'Node.js', image: Icons.nodejs },
    { name: 'Express.js', image: Icons.expressjs },
    { name: 'AWS DynamoDB' },
    { name: 'MongoDB', image: Icons.mongodb },
    { name: 'Vitest / Jest', image: Icons.jest },
  ],
};

const soft = {
  Tools: [
    { name: 'OpenAI', image: Icons.openai },
    { name: 'Slack', image: Icons.slack },
    { name: 'Canva', image: Icons.canva },
    { name: 'Notion', image: Icons.notion },
    { name: 'Gemini', image: Icons.gemini },
    { name: 'Figma', image: Icons.figma },
  ],
  Skills: [
    'Team Management', 'Leadership', 'Community Management', 'Public Speaking', 'Event Planning',
    'Problem Solving', 'Time Management', 'Communication', 'Adaptability', 'Collaboration',
  ].map(name => ({ name, plain: true })),
};

export const Skills = () => {
  const [showTechnical, setShowTechnical] = useState(true);
  const skillsToShow = showTechnical ? technical : soft;

  return (
    <section className="p-10 w-full flex justify-center">
      <div className="w-full max-w-3xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 flex flex-col gap-8">

        <h2 className="text-3xl font-semibold text-center">Skills</h2>

        <div className="flex items-center justify-center gap-3">
          <span className={`text-lg font-medium transition-colors ${showTechnical ? "text-white" : "text-[#b6b7bb]"}`}>Technical</span>

          {/* 44x44 hit area around a 28px-tall visual track (touch-target min). */}
          <button
            type="button"
            role="switch"
            aria-checked={!showTechnical}
            onClick={() => setShowTechnical(!showTechnical)}
            aria-label="Switch between technical and managerial skills"
            className="group flex h-11 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full"
          >
            <span className="pointer-events-none flex h-7 w-14 items-center rounded-full border border-white/20 bg-white/10 transition-colors group-aria-checked:border-transparent group-aria-checked:bg-gradient-to-r group-aria-checked:from-purple-500 group-aria-checked:to-pink-600">
              <span className="size-5 translate-x-1 rounded-full bg-white transition-transform duration-200 group-aria-checked:translate-x-8" />
            </span>
          </button>

          <span className={`text-lg font-medium transition-colors ${!showTechnical ? "text-white" : "text-[#b6b7bb]"}`}>Managerial</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {Object.entries(skillsToShow).map(([title, items]) => (
            <div key={title} className="flex flex-col gap-3">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">{title}</span>
              <div className="grid grid-cols-2 gap-3">
                {items.map(skill => (
                  <div key={skill.name} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-[#b6b7bb]">
                    {skill.image
                      ? <img src={skill.image} alt="" className="w-5 h-5 shrink-0" />
                      : !skill.plain && <span aria-hidden="true" className="grid size-5 shrink-0 place-items-center rounded bg-white/10 text-[10px] font-bold text-white">{skill.name.slice(0, 2)}</span>}
                    <span className="leading-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
