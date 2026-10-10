import { NavLink } from 'react-router-dom';
import LineSlideButton from '../components/LineSlideButton';
import ProjectMedia from '../components/ProjectMedia';


export const projects = [
  {
    route: "real-estate-application",
    heading: "Real Estate Application",
    short_description: "A full-stack web application for real estate listings, built with React and Node.js.",
    long_description: " A full-stack real estate platform built using the MERN stack that allows users to list, browse, and manage property listings. It provides seamless property discovery with advanced search filters and integrated map views. The platform is role-based, catering to buyers, sellers (agents), and admins. It Helps users find properties quickly and effectively. Provides sellers a digital platform to reach buyers and manage listings without needing a third-party broker.",    
    sections: [
      { heading: "Tech Stack", items: ["Frontend -> React.js, React Router DOM, Tailwind CSS", "Backend -> Node.js, Express.js", "Database -> MongoDB", "Authentication -> JWT, bcrypt", "Other Tools -> Cloudinary (image uploads), Google Maps API / Mapbox, Axios"] },
    { heading: "Features", items: ["- User Auth with JWT, Create/Edit/Delete listings, Search & filter properties, Admin panel"] },
    { heading: "User Roles", items: ["Buyer : Can browse listings, search/filter properties, view property details, and contact sellers.","Seller: Can create, edit, and delete their own property listings, manage listing media (images/videos), and respond to inquiries.", "Admin: Has full control over the platform including managing users, moderating or removing listings, and handling reported content"] }
    ],
    media:ProjectMedia.realestate
  },
  {
    route: "learning-management-system",
    heading: "Learning Management System",
    short_description: "A Learning management system with a modern UI, built using React.js and Tailwind CSS.",
    long_description: "A full-stack web application for Learning Management System, built with React and Node.js.",
    sections: [
      { heading: "Tech Stack", items: ["Frontend -> React.js, React Router DOM, Tailwind CSS", "Backend -> Node.js, Express.js", "Database -> MongoDB", "Authentication -> JWT, bcrypt", "Other Tools -> Cloudinary (image uploads), Google Maps API / Mapbox, Axios"] },
    { heading: "Features", items: ["User Auth with JWT", "Course Content Management", "Student Dashboard","Quizzes & Assignments","Video Uploads","Admin panel"] }, 
    { heading: "User Roles", items: ["Learner: Can enroll in, and track courses as well as attempt certification exams", "Examinee: Can attempt certification exams" , "Instructor: Can create/edit courses and upload content", "Admin: Has full control over all users and courses"] }
    ],
    media:ProjectMedia.lms
  },

];


export const Projects = () => (
  <section className="p-10">
    <h2 className="text-3xl font-semibold mb-6 m-auto">Projects</h2>
    <div className="space-y-4">
      {projects.map(proj => (
        <div key={proj.route} className="rounded-lg border border-white/20 p-4 transition-colors hover:border-white/40">
          <h3 className="font-bold text-xl mb-2">{proj.heading}</h3>
          <p className="mb-2 text-[#b6b7bb]">{proj.short_description}</p>
          <NavLink
            to={`/projects/${proj.route}`}
            className="inline-flex min-h-11 items-center"
            aria-label={`View details for ${proj.heading}`}
          >
            <LineSlideButton text="Details"/>
          </NavLink>
        </div>
      ))}
    </div>
  </section>
);