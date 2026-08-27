import { useState } from 'react';
import { HeroExperience } from './components/hero/HeroExperience';
import { PhilosophyManifestoSection } from './components/philosophy/PhilosophyManifestoSection';
import { YesaJourneySection } from './components/journey/YesaJourneySection';
import { FieldSelectionSection } from './components/fields/FieldSelectionSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { FutureVisionSection } from './components/future/FutureVisionSection';
import { FinalCtaSection } from './components/footer/FinalCtaSection';
import { Footer } from './components/footer/Footer';
import { DesignSystemShowcase } from './components/showcase/DesignSystemShowcase';

export function App() {
  const [view, setView] = useState<'hero' | 'design-system'>('hero');

  // Placeholder handlers for Hero
  const handleOpenApply = () => {
    // Scroll to the CTA section smoothly
    const applySection = document.getElementById('apply');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleExplorePath = () => {
    // Scroll to the philosophy section smoothly
    const philosophySection = document.getElementById('philosophy');
    if (philosophySection) {
      philosophySection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleNavigateSection = (section: string) => {
    console.log(`Navigating to ${section}`);
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F3F5F7] flex flex-col justify-between selection:bg-sky-500/20 selection:text-sky-200 overflow-clip">
      
      {/* Dev toggle to view Phase 1 Design System (can be removed in production) */}
      <div className="fixed bottom-4 right-4 z-[100] flex gap-2">
        <button 
          onClick={() => setView('hero')}
          className={`text-xs px-3 py-1 rounded-full font-mono ${view === 'hero' ? 'bg-sky-500 text-white' : 'bg-white/10 text-white/50 hover:bg-white/20'}`}
        >
          Journey
        </button>
        <button 
          onClick={() => setView('design-system')}
          className={`text-xs px-3 py-1 rounded-full font-mono ${view === 'design-system' ? 'bg-sky-500 text-white' : 'bg-white/10 text-white/50 hover:bg-white/20'}`}
        >
          Tokens
        </button>
      </div>

      <main className="flex-1">
        {view === 'hero' ? (
          <>
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
          </>
        ) : (
          <DesignSystemShowcase 
            activeView="overview" 
            onSelectView={() => {}} 
          />
        )}
      </main>

    </div>
  );
}

export default App;
