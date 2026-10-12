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

import 'lenis/dist/lenis.css';
import { ReactLenis } from 'lenis/react';

const App = () => {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      <BrowserRouter> 
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes> 
            <Route path="/" element={<HomePage />} /> 
            <Route path="/projects/:slug" element={<DetailsPage />} />
            <Route path="/events/:slug" element={<DetailsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes> 
        </Suspense>
      </BrowserRouter> 
    </ReactLenis>
  );
};
export default App;