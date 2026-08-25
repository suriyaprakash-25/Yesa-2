import { useState } from 'react';
import { Header } from './components/navigation/Header';
import { HeroSection } from './components/sections/HeroSection';
import { PhilosophySection } from './components/sections/PhilosophySection';
import { JourneyAscentSection } from './components/sections/JourneyAscentSection';
import { OfferingsSection } from './components/sections/OfferingsSection';
import { VenturePossibilitiesSection } from './components/sections/VenturePossibilitiesSection';
import { ApplicationCTASection } from './components/sections/ApplicationCTASection';
import { ApplicationModal } from './components/sections/ApplicationModal';
import { DesignSystemShowcase } from './components/showcase/DesignSystemShowcase';
import { Container } from './components/core/Container';
import { Badge } from './components/core/Badge';

export function App() {
  const [activeTab, setActiveTab] = useState<'experience' | 'philosophy' | 'journey' | 'offerings' | 'venture' | 'specimen'>('experience');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTab = (tab: 'experience' | 'philosophy' | 'journey' | 'offerings' | 'venture' | 'specimen') => {
    setActiveTab(tab);
    if (tab === 'experience') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'philosophy') {
      scrollToSection('philosophy');
    } else if (tab === 'journey') {
      scrollToSection('journey');
    } else if (tab === 'offerings') {
      scrollToSection('offerings');
    } else if (tab === 'venture') {
      scrollToSection('possibilities');
    }
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F3F5F7] flex flex-col justify-between selection:bg-sky-500/20 selection:text-sky-200">
      
      {/* Institutional Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-sky-500/[0.04] via-transparent to-transparent blur-3xl opacity-70" />
        <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-amber-500/[0.015] blur-3xl rounded-full" />
        <div className="absolute top-2/3 left-0 w-[500px] h-[500px] bg-emerald-500/[0.015] blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        {/* Institutional Floating Navigation Header */}
        <Header 
          activeTab={activeTab} 
          onSelectTab={handleSelectTab}
          onOpenApply={() => setIsApplyModalOpen(true)}
        />

        {/* Main Content Render */}
        <main className="flex-1">
          {activeTab === 'specimen' ? (
            <DesignSystemShowcase 
              activeView="overview" 
              onSelectView={() => {}} 
            />
          ) : (
            <>
              {/* Hero Section */}
              <HeroSection 
                onOpenApply={() => setIsApplyModalOpen(true)}
                onExploreJourney={() => handleSelectTab('journey')}
                currentStage="observation"
              />

              {/* Core Philosophy Section */}
              <PhilosophySection />

              {/* The Ascent: 6-Step Journey Section */}
              <JourneyAscentSection 
                onOpenApply={() => setIsApplyModalOpen(true)}
              />

              {/* What YESA Provides Section */}
              <OfferingsSection 
                onOpenApply={() => setIsApplyModalOpen(true)}
              />

              {/* Future Possibilities: Venture & Co-Creation */}
              <VenturePossibilitiesSection 
                onOpenApply={() => setIsApplyModalOpen(true)}
              />

              {/* Final Call to Action Section */}
              <ApplicationCTASection 
                onOpenApply={() => setIsApplyModalOpen(true)}
              />
            </>
          )}
        </main>

        {/* Application Modal */}
        <ApplicationModal 
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
        />

        {/* Institutional Monolithic Footer */}
        <footer className="relative z-10 border-t border-white/[0.08] bg-[#08090B]/95 backdrop-blur-xl py-12">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/[0.06]">
              
              <div className="md:col-span-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-white p-[1px] flex items-center justify-center">
                    <div className="w-full h-full bg-[#08090B] rounded-[5px] flex items-center justify-center">
                      <span className="font-display font-bold text-white text-xs">Y</span>
                    </div>
                  </div>
                  <span className="font-display font-bold text-lg text-white">YESA</span>
                  <Badge variant="emerald" dot className="font-mono text-[10px]">100% FREE</Badge>
                </div>

                <p className="text-sm text-[#94A3B8] max-w-sm leading-relaxed">
                  "Choose your field. We provide the path." An incubator designed to help people gradually develop into future leaders through structured real-world execution.
                </p>
              </div>

              <div className="md:col-span-3 space-y-2 text-xs">
                <span className="font-mono text-[10px] uppercase text-[#64748B] tracking-wider block mb-2">
                  THE ASCENT
                </span>
                <ul className="space-y-1.5 text-[#94A3B8]">
                  <li>01 // Application & Dialogue</li>
                  <li>02 // Volunteering & Observation</li>
                  <li>03 // Paid Internship</li>
                  <li>04 // Experienced Practitioner</li>
                  <li>05 // World-Class Leader</li>
                </ul>
              </div>

              <div className="md:col-span-3 space-y-2 text-xs">
                <span className="font-mono text-[10px] uppercase text-[#64748B] tracking-wider block mb-2">
                  INSTITUTION
                </span>
                <ul className="space-y-1.5 text-[#94A3B8]">
                  <li>• Free Trainings & Experience-Ships</li>
                  <li>• Global Lecturer Guidance</li>
                  <li>• Real-World Projects</li>
                  <li>• Venture Incubation</li>
                </ul>
              </div>

            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] font-mono">
              <div>
                © {new Date().getFullYear()} YESA. All rights reserved. 100% Free Initiative.
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setActiveTab('specimen')} 
                  className="hover:text-sky-300 transition-colors cursor-pointer"
                >
                  [ Design System Specimen ]
                </button>
              </div>
            </div>

          </Container>
        </footer>

      </div>

    </div>
  );
}

export default App;
