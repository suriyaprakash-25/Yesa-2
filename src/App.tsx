import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useSearchParams } from 'react-router-dom';
import { HeroExperience } from './components/hero/HeroExperience';
import { PhilosophyManifestoSection } from './components/philosophy/PhilosophyManifestoSection';
import { ProcessOverviewSection } from './components/philosophy/ProcessOverviewSection';
import { InfrastructureSection } from './components/philosophy/InfrastructureSection';
import { YesaJourneySection } from './components/journey/YesaJourneySection';
import { FieldSelectionSection } from './components/fields/FieldSelectionSection';
import { FutureVisionSection } from './components/future/FutureVisionSection';
import { FinalCtaSection } from './components/footer/FinalCtaSection';
import { Footer } from './components/footer/Footer';
import { StyleGuide } from './pages/StyleGuide';
import { ApplyPage } from './pages/ApplyPage';
import { GridBackground } from './components/core/GridBackground';
import { CustomCursor } from './components/core/CustomCursor';
import { IntroLoader } from './components/core/IntroLoader';
import { NavigationBar } from './components/navigation/NavigationBar';

function MainSite() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [searchParams]);

  const handleOpenApply = () => {
    navigate('/apply');
  };

  const handleExplorePath = () => {
    const philosophySection = document.getElementById('philosophy') || document.getElementById('journey');
    if (philosophySection) philosophySection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <NavigationBar onOpenApply={handleOpenApply} />
      <main className="flex-1">
        <HeroExperience 
          onOpenApply={handleOpenApply}
          onExplorePath={handleExplorePath}
        />
        <div id="philosophy">
          <PhilosophyManifestoSection />
        </div>
        <div id="process-overview">
          <ProcessOverviewSection />
        </div>
        <div>
          <YesaJourneySection />
        </div>
        <div id="what-we-do">
          <InfrastructureSection />
        </div>
        <div id="fields">
          <FieldSelectionSection />
        </div>
        <div id="future">
          <FutureVisionSection />
        </div>
        <div id="apply">
          <FinalCtaSection onOpenApply={handleOpenApply} />
        </div>
        <Footer />
      </main>
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--text-primary)] flex flex-col justify-between selection:bg-[var(--accent-dim)] selection:text-[var(--accent-light)] overflow-clip relative">
        <IntroLoader />
        <CustomCursor />
        <GridBackground />
        
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/style-guide" element={<StyleGuide />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
