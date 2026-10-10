import { NavBar } from './sections/NavBar';
import { Hero } from './sections/Hero';
import { Certifications } from './sections/Certifications';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Events } from './sections/Events';
import { Contact } from './sections/Contact';
import { Skills } from './sections/Skills';
import SpiralGalaxy from './components/SpiralGalaxy';
import SplineWithLoader from './components/SplineWithLoader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import ErrorPage from './pages/ErrorPage';
import ScrollToTop from './components/ScrollToTop';
const HomePage = () => (
<>
  <NavBar/>

  <section id="Home">
    <SplineWithLoader/>
  </section>

  <section id="About">
    <SpiralGalaxy/>
  </section>

  <section id="Experience">
    <Experience/>
  </section>

  <section id="Projects">
    <Projects/>
  </section>
  
  <section id="Mission">
    <Hero/>
  </section>
  
  <section id="Skills">
      <Skills/>
  </section>
  
  <section id="Events">
    <Events/>
  </section>

  <section id="Certifications">
    <Certifications/>
  </section>
  
  
  <section id="Contact">
    <Contact/>
  </section>

</>
);

const App=()=>{
  
  return(
     <BrowserRouter> 
     <ScrollToTop />
      <Routes> 
        <Route path="/" element={<HomePage />}></Route> 
        <Route path="/projects/:slug" element={<DetailsPage />}></Route>
        <Route path="/events/:slug" element={<DetailsPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes> 
    </BrowserRouter> 
  )
}
export default App;