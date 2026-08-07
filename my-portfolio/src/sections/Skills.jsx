import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import Icons from '../components/Icons'

export const Skills = () => {
  const [showTechnical, setShowTechnical] = useState(true);

  const technical ={skills: [
    { name: 'HTML', image: Icons.html5},
    { name: 'CSS', image: Icons.css3 },
    { name: 'JavaScript', image: Icons.js },
    { name: 'React.js', image: Icons.react },
    {name: 'Redux', image: Icons.redux},
    { name: 'Node.js', image: Icons.nodejs },
    { name: 'Express.js', image: Icons.expressjs },
    { name: 'SQL', image: Icons.mysql },
    { name: 'MongoDB', image: Icons.mongodb },
    {name: 'Jest', image: Icons.jest},    
  ],
  
  tools:[
    {name:'VS Code', image: Icons.vscode},
    { name: 'Github', image: Icons.github },
    {name:'Git', image: Icons.git},
    {name:'Mongoose', image: Icons.mongoose},
    {name:'NPM', image: Icons.npm},
    {name:'Figma', image: Icons.figma},
    {name:'Open AI', image: Icons.openai},
    {name:'Postman', image: Icons.postman},
    
  ]}

  const soft ={ skills: [
    { name: 'Team Management', image: '' },
    { name: 'Leadership', image: '' },
    { name: 'Community Management', image: '' },
    { name: 'Public Speaking', image: '' },
    { name: 'Event Planning', image: '' },
    { name: 'Problem Solving', image: '' },
    { name: 'Time Management', image: '' },
    { name: 'Communication', image: '' },
    {name:'Adaptability', image: ''},
    { name: 'Collaboration', image: '' }
  ],
  tools:[
    {name:'OpenAI', image: Icons.openai},
    {name:'Slack', image: Icons.slack},
    {name:'Canva', image: Icons.canva},
    {name:'Notion', image: Icons.notion},
    {name:'Gemini', image: Icons.gemini},
    {name:'Figma', image: Icons.figma}
  ]}

  const skillsToShow = showTechnical ?  technical : soft ;

  return (
    <section className="p-10 w-full flex justify-center">
      <div className="w-full max-w-3xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 flex flex-col gap-8">

        <h2 className="text-3xl font-semibold text-center">Skills</h2>

        <div className="flex items-center justify-center gap-3">
          <span className={`text-lg font-medium transition-colors ${showTechnical ? "text-white" : "text-[#b6b7bb]"}`}>Technical</span>

          {/* 44x44 hit area around a 28px-tall visual track (touch-target min). */}
          <Switch
            checked={!showTechnical}
            onChange={() => setShowTechnical(!showTechnical)}
            aria-label="Switch between technical and managerial skills"
            className="group flex h-11 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full"
          >
            <span className="pointer-events-none flex h-7 w-14 items-center rounded-full border border-white/20 bg-white/10 transition-colors group-data-[checked]:border-transparent group-data-[checked]:bg-gradient-to-r group-data-[checked]:from-purple-500 group-data-[checked]:to-pink-600">
              <span className="size-5 translate-x-1 rounded-full bg-white transition-transform duration-200 group-data-[checked]:translate-x-8" />
            </span>
          </Switch>

          <span className={`text-lg font-medium transition-colors ${!showTechnical ? "text-white" : "text-[#b6b7bb]"}`}>Managerial</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Tools</span>
            <div className="grid grid-cols-2 gap-3">
              {skillsToShow.tools.map(skill => (
                <div key={skill.name} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-[#b6b7bb]">
                  {skill.image && <img src={skill.image} alt={skill.name} className="w-5 h-5 shrink-0" />}
                  <span className="truncate">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Skills</span>
            <div className="grid grid-cols-2 gap-3">
              {skillsToShow.skills.map(skill => (
                <div key={skill.name} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-[#b6b7bb]">
                  {skill.image && <img src={skill.image} alt={skill.name} className="w-5 h-5 shrink-0" />}
                  <span className="truncate">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
