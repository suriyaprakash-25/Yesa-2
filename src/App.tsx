import { useState } from 'react';
import { HeroNavigation } from './components/hero/HeroNavigation';
import { HeroExperience } from './components/hero/HeroExperience';
import { ApplicationModal } from './components/sections/ApplicationModal';

export function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const handleExplorePath = () => {
    // Smoothly scroll down or open application modal
    setIsApplyModalOpen(true);
  };

  const handleNavigateSection = (_section: string) => {
    setIsApplyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F3F5F7] flex flex-col justify-between selection:bg-sky-500/20 selection:text-sky-200 overflow-x-hidden">
      
      {/* Minimal Institutional Navigation */}
      <HeroNavigation 
        onOpenApply={() => setIsApplyModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* The Master Hero Experience */}
      <main className="flex-1 flex flex-col">
        <HeroExperience 
          onOpenApply={() => setIsApplyModalOpen(true)}
          onExplorePath={handleExplorePath}
        />
      </main>

      {/* Application Intake Modal */}
      <ApplicationModal 
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

    </div>
  );
}

export default App;
