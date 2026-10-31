import { useState, lazy, Suspense } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import PullCord from './components/PullCord';
import Hero from './components/Hero';

const ConsoleWall = lazy(() => import('./components/ConsoleWall'));
const Projects = lazy(() => import('./components/Projects'));
const Timeline = lazy(() => import('./components/Timeline'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="h-8 w-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return <Loader onComplete={() => setLoaded(true)} />;
  }

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50
                   focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-bg focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navbar />
      <PullCord />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <ConsoleWall />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Timeline />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
