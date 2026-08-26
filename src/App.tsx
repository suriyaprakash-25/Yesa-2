import { useState } from 'react';
import { HeroNavigation } from './components/hero/HeroNavigation';
import { HeroExperience } from './components/hero/HeroExperience';
import { PhilosophyManifestoSection } from './components/philosophy/PhilosophyManifestoSection';
import { YesaJourneySection } from './components/journey/YesaJourneySection';
import { ChooseFieldSection } from './components/fields/ChooseFieldSection';
import { ApplicationModal } from './components/sections/ApplicationModal';
import { Container } from './components/core/Container';
import { Badge } from './components/core/Badge';

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
    } else if (section === 'experience' || section === 'future') {
      scrollToSection('fields');
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
      </main>

      {/* Institutional Monolithic Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] bg-[#08090B]/95 backdrop-blur-xl py-12">
        <Container size="lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-md bg-white p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#08090B] rounded-[5px] flex items-center justify-center">
                  <span className="font-display font-bold text-white text-xs">Y</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-base text-white">YESA</span>
                  <Badge variant="emerald" dot className="font-mono text-[9px] py-0.5">100% FREE</Badge>
                </div>
                <span className="text-xs text-[#94A3B8] font-sans">Incubator for Future Leaders</span>
              </div>
            </div>

            <div className="text-center sm:text-right font-mono text-xs text-[#64748B] space-y-1">
              <div>"Choose your field. We provide the path."</div>
              <div className="text-[11px] text-[#475569]">© {new Date().getFullYear()} YESA. All rights reserved.</div>
            </div>
          </div>
        </Container>
      </footer>

      {/* Application Intake Modal */}
      <ApplicationModal 
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

    </div>
  );
}

export default App;
