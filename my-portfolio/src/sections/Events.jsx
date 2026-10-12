import RevealHeading from '../components/RevealHeading';
import { NavLink } from 'react-router-dom';
import EventMedia  from '../components/EventMedia';
import LineSlideButton from '../components/LineSlideButton';


export const events=[
       {
        route: "web3-open-source-community-day",
        heading: "Web3 & Open Source Community Day",
        short_description: "A one-day tech event focused on Web3 fundamentals, blockchain development, and open source contributions.",
        long_description: "Organized and hosted a community-driven tech event to introduce students to the world of Web3 and Open Source. The event featured hands-on workshops, GitHub onboarding, smart contract fundamentals, and real-time collaboration with fellow developers.",
        
        sections: [
      { heading: "Event Highlights", items: [
            "Participants: 80+ developers and students",
            "Topics: Web3, Blockchain, Smart Contracts, Git & GitHub",
            "Duration: One full-day workshop (6+ hours)",
            "Venue: On-campus auditorium & virtual support",
            "Live Dapp Demo + GitHub Workshop"
          ] },

        { heading: "Key Sessions & Activities", items: [
            "Intro to Web3, Ethereum & Blockchain",
            "Smart Contracts 101 using Solidity",
            "Dapp Development Hands-On (Frontend + Contract)",
            "Open Source 101: Git, GitHub & Contribution Workflow",
            "Live Demo: Fork, Clone, PR – the right way",
            "AMA Session with experienced Web3 developers"
          ] },

        { heading: "My Role", items: [
            "Hosted and moderated the full-day event",
            "Created the live demo Dapp project for hands-on practice",
            "Prepared open source starter templates and GitHub repositories",
            "Coordinated with speakers and guided students in real-time contributions",
            "Promoted the event on social platforms and developer communities"
          ] }
    ],
    media: EventMedia.web3 
      }
      ,
      {
        route: "gdsc-wow-2023",
        heading: "GDSC WOW 2023",
        short_description: "A flagship multi-chapter tech summit bringing together developers, designers, and innovators under one roof.",
        long_description: "GDSC WOW (Wonder of Wonders) 2023 was a massive offline tech event co-organized with multiple Google Developer Student Clubs. It featured expert speakers, hands-on workshops, career tracks, and networking opportunities for students to learn, grow, and connect.",

        sections: [
      { heading: "Event Highlights", items: [
            "Attendees: 500+ students across colleges",
            "Collaboration: 12+ GDSCs from different campuses",
            "Duration: Full-day offline event with parallel sessions",
            "Speakers: 10+ industry experts, developers, designers & founders"
          ] },

        { heading: "Tracks & Activities", items: [
            "Web, Android, and ML Dev Tracks",
            "Expert Sessions on Design, Web3, and Startups",
            "Panel Discussions on Tech Careers & Open Source",
            "Live Workshops and Demos (GitHub, Firebase, Blockchain)",
            "Swag, Certificates & Networking Zones",
            "Photo Booths, Icebreakers & Community Activities"
          ] },

        { heading: "My Role", items: [
            "Core organizer and part of the cross-chapter planning committee",
            "Promoted the event across campuses, communities, and social media",
            "Handled coordination between speakers, volunteers, and logistics",
            "Hosted and moderated tech sessions & community games",
            "Ensured a seamless offline experience for over 500 attendees"
          ] }
    ],
    media: EventMedia.wow
      }
      ,
      {
        route: "gdsc-club",
        heading: "Google Developer Student Clubs (GDSC)",
        short_description: "An active technical community led under GDSC, focused on development, learning, and impactful student collaborations.",
        long_description: "As a part of GDSC leadership, I contributed to building a vibrant student tech community that organized hands-on workshops, coding events, speaker sessions, and real-world project-based learning initiatives.",

        sections: [
      { heading: "Club Impact & Stats", items: [
            "Club Size: 150+ active members",
            "Events Conducted: 12+ successful tech events",
            "Core Team: 8 dedicated members",
            "Hackathons Organized: 2 intra-college hackathons",
            "Reach: Over 1000+ students impacted via workshops and sessions"
          ] },

        { heading: "Key Activities & Events", items: [
            "Android Study Jam Series",
            "Web Development Bootcamp (MERN)",
            "Git & GitHub Hands-On Workshop",
            "InfoSec & Cloud Sessions",
            "Collab Events with Other GDSCs",
            "Speaker Series with Industry Experts"
          ] },

        { heading: "My Role", items: [
            "Led community engagement and managed developer events",
            "Coordinated logistics and outreach for workshops & sessions",
            "Collaborated with faculty and external speakers",
            "Mentored juniors in MERN stack and project building",
            "Promoted the GDSC mission of learning by building"
          ] }
    ],
    media: EventMedia.gdsc
      }]



export const Events = () => (
  <section className="p-10">
    <RevealHeading text="Community & Events" className="text-3xl font-semibold mb-6" />
    <div className="space-y-4">
      {events.map(event => (
        <div key={event.route} className="rounded-lg border border-white/20 p-4 transition-colors hover:border-white/40">
          <h3 className="font-bold text-xl mb-2">{event.heading}</h3>
          <p className="mb-2 text-[#b6b7bb]">{event.short_description}</p>
          <NavLink
            to={`/events/${event.route}`}
            className="inline-flex min-h-11 items-center"
            aria-label={`View details for ${event.heading}`}
          >
            <LineSlideButton text="Details"/>
          </NavLink>
        </div>
      ))}
    </div>
  </section>
);
