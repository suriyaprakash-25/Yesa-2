import { useState } from 'react';
import { HeroNavigation } from './components/hero/HeroNavigation';
import { HeroExperience } from './components/hero/HeroExperience';
import { PhilosophyManifestoSection } from './components/philosophy/PhilosophyManifestoSection';
import { YesaJourneySection } from './components/journey/YesaJourneySection';
import { ChooseFieldSection } from './components/fields/ChooseFieldSection';
import { ExperienceshipSection } from './components/experience/ExperienceshipSection';
import { FutureVisionSection } from './components/future/FutureVisionSection';
import { FinalCTAFooter } from './components/footer/FinalCTAFooter';
import { ApplicationModal } from './components/sections/ApplicationModal';

export function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplorePath = () => {
    scrollToSection('philosophy');
  };

  const handleNavigateSection = (section: string) => {
    if (section === 'journey') {
      scrollToSection('journey');
    } else if (section === 'fields') {
      scrollToSection('fields');
    } else if (section === 'experience') {
      scrollToSection('experience');
    } else if (section === 'future') {
      scrollToSection('future');
    }
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F3F5F7] flex flex-col justify-between selection:bg-sky-500/20 selection:text-sky-200 overflow-x-hidden">
      
      {/* Minimal Institutional Navigation */}
      <HeroNavigation 
        onOpenApply={() => setIsApplyModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Master Main Page Content */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Experience */}
        <HeroExperience 
          onOpenApply={() => setIsApplyModalOpen(true)}
          onExplorePath={handleExplorePath}
        />

        {/* 2. Philosophy & Core Manifesto */}
        <PhilosophyManifestoSection 
          onOpenApply={() => setIsApplyModalOpen(true)}
          onExploreJourney={() => scrollToSection('journey')}
        />

        {/* 3. The YESA Journey — centerpiece scroll experience */}
        <YesaJourneySection
          onBegin={() => scrollToSection('fields')}
        />

        {/* 4. Choose Your Field — interactive exploration & pathway revelation */}
        <ChooseFieldSection
          onStartJourney={() => setIsApplyModalOpen(true)}
        />

        {/* 5. Experience-ship — practical evolution from observation to leadership */}
        <ExperienceshipSection />

        {/* 6. The Future Vision — from experienced leadership to venture creation */}
        <FutureVisionSection
          onOpenApply={() => setIsApplyModalOpen(true)}
          onExploreJourney={() => scrollToSection('journey')}
        />
      </main>

      {/* 7. Final CTA & Minimal Institutional Footer */}
      <FinalCTAFooter
        onOpenApply={() => setIsApplyModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Application Intake Modal */}
      <ApplicationModal 
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

    </div>
  );
}

export default App;
