import ShivamDP from '../assets/Shivam-DP.jpg';
import RotatingText from '../components/RotatingText.jsx'
import { socials } from './Contact';

export const About = () => (
  <section className="px-6">
    <h2 className="sr-only">About</h2>
    <div className="flex flex-col md:flex-row items-center self-center">
      <div className="flex-1 mb-6 md:mb-0 md:mr-10">
        <div className="text-lg mb-4 max-w-md">
          <div className='text-2xl flex gap-3 items-center'>I'm
            <RotatingText
              texts={['Shivam', 'Developer', 'Community Builder', 'Human!']}
              mainClassName="px-2 sm:px-2 md:px-4 text-white overflow-hidden py-0.5 sm:py-0.5 md:py-1 justify-center rounded-lg bg-black text-2xl"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            /> 
          </div>
          Software engineer with 2+ years shipping production React &amp; TypeScript. I care about clean UI, typed code and that sweet “it finally works” moment. Outside work, I build developer communities through GDSC and tech events.
          <div className="flex flex-wrap gap-3 mt-4">
            {socials.filter(s => ['LinkedIn', 'Twitter', 'Hashnode'].includes(s.name)).map(social => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gray-700 px-4 text-base transition-colors hover:bg-gray-600"
              >
                <img src={social.icon} alt="" aria-hidden="true" className="h-6 w-6" />
                <span>{social.name}</span>
              </a>
          ))}
          </div>
        </div>
      </div>
      <div className="w-2/3 md:w-1/3 rounded-full">
        <img src={ShivamDP} alt="Shivam's Profile" className="w-2/3 md:w-full md:h-full object-cover shadow-[0px_0px_70px_rgba(0,0,0,0.25)] rounded-full hover:shadow-gray-500/50 transition-shadow duration-300 ease-in-out ml-15" />
      </div>
    </div>
  </section>
);