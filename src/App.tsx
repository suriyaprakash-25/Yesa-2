import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeroExperience } from './components/hero/HeroExperience';
import { PhilosophyManifestoSection } from './components/philosophy/PhilosophyManifestoSection';
import { InfrastructureSection } from './components/philosophy/InfrastructureSection';
import { YesaJourneySection } from './components/journey/YesaJourneySection';
import { FieldSelectionSection } from './components/fields/FieldSelectionSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { FutureVisionSection } from './components/future/FutureVisionSection';
import { FinalCtaSection } from './components/footer/FinalCtaSection';
import { Footer } from './components/footer/Footer';
import { StyleGuide } from './pages/StyleGuide';
import { GridBackground } from './components/core/GridBackground';
import { CustomCursor } from './components/core/CustomCursor';
import { IntroLoader } from './components/core/IntroLoader';
import { NavigationBar } from './components/navigation/NavigationBar';

function MainSite() {
  const handleOpenApply = () => {
    const applySection = document.getElementById('apply');
    if (applySection) applySection.scrollIntoView({ behavior: 'smooth' });
  };
  const handleExplorePath = () => {
    const philosophySection = document.getElementById('philosophy');
    if (philosophySection) philosophySection.scrollIntoView({ behavior: 'smooth' });
  };
  const handleNavigateSection = (section: string) => {
    console.log(`Navigating to ${section}`);
  };

  return (
    <>
      <main className="flex-1">
        <HeroExperience 
          onOpenApply={handleOpenApply}
          onExplorePath={handleExplorePath}
          onNavigateSection={handleNavigateSection}
        />
        <div id="philosophy">
          <PhilosophyManifestoSection />
        </div>
        <div id="journey">
          <YesaJourneySection />
        </div>
        <div id="infrastructure">
          <InfrastructureSection />
        </div>
        <div id="fields">
          <FieldSelectionSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="future">
          <FutureVisionSection />
        </div>
        <div id="apply">
          <FinalCtaSection />
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
        <CustomCursor />
        <IntroLoader />
        <GridBackground />
        <NavigationBar />
        
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/style-guide" element={<StyleGuide />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
