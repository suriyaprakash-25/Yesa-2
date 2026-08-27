import { HeroExperience } from './components/hero/HeroExperience';
import { PhilosophyManifestoSection } from './components/philosophy/PhilosophyManifestoSection';
import { InfrastructureSection } from './components/philosophy/InfrastructureSection';
import { YesaJourneySection } from './components/journey/YesaJourneySection';
import { FieldSelectionSection } from './components/fields/FieldSelectionSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { FutureVisionSection } from './components/future/FutureVisionSection';
import { FinalCtaSection } from './components/footer/FinalCtaSection';
import { Footer } from './components/footer/Footer';

export function App() {

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

    </div>
  );
}

export default App;
