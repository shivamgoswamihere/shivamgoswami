import { lazy, Suspense } from 'react';
import { NavBar } from './sections/NavBar';
import { Certifications } from './sections/Certifications';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Events } from './sections/Events';
import { Contact } from './sections/Contact';
import { Skills } from './sections/Skills';
import SpiralGalaxy from './components/SpiralGalaxy';
import SplineWithLoader from './components/SplineWithLoader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Detail pages pull in WebGL (ogl): load them only when visited.
const DetailsPage = lazy(() => import('./pages/DetailsPage'));
import ErrorPage from './pages/ErrorPage';
import ScrollToTop from './components/ScrollToTop';
import { Footer } from './sections/Footer';
const HomePage = () => (
<>
  <NavBar/>

  <section id="Home">
    <SplineWithLoader/>
  </section>

  <section id="Experience">
    <Experience/>
  </section>

  <section id="Projects">
    <Projects/>
  </section>

  <section id="Skills">
    <Skills/>
  </section>

  <section id="About">
    <SpiralGalaxy/>
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

  <Footer/>
</>
);

const App=()=>{
  
  return(
     <BrowserRouter> 
     <ScrollToTop />
      <Suspense fallback={null}>
      <Routes> 
        <Route path="/" element={<HomePage />}></Route> 
        <Route path="/projects/:slug" element={<DetailsPage />}></Route>
        <Route path="/events/:slug" element={<DetailsPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes> 
      </Suspense>
    </BrowserRouter> 
  )
}
export default App;