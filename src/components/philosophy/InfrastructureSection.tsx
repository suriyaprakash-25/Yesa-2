import React from 'react';
import { Container } from '../core/Container';
import { SubHeading, Kicker } from '../core/Typography';
import { OfferingCard } from './OfferingCard';
import type { OfferingType } from './OfferingCard';

export const InfrastructureSection: React.FC = () => {
  const offerings: { type: OfferingType; title: string; description: string }[] = [
    {
      type: 'trainings',
      title: 'Free Trainings',
      description: 'Zero cost barrier. Access foundational knowledge and specialized skills designed to unearth your potential without financial friction.'
    },
    {
      type: 'experience',
      title: 'Experience-ship',
      description: 'Move beyond theory. A structured transition from observation to paid internship, embedding you in real-world challenges.'
    },
    {
      type: 'leaders',
      title: 'Industry Leaders',
      description: 'Cohort-based progression guided by practitioners who have built, scaled, and led. Direct exposure to lived experience.'
    },
    {
      type: 'global',
      title: 'Global Lecturers',
      description: 'A borderless curriculum. Guidance from top minds around the world, expanding your perspective beyond local limitations.'
    }
  ];

  return (
    <section className="relative w-full bg-[#08090B] pb-32 overflow-hidden">
      
      {/* Branching path connecting from Journey */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-32 opacity-40 hidden md:block">
        <svg viewBox="0 0 200 100" className="w-full h-full stroke-[var(--accent-base)] fill-none stroke-[1.5px]">
          {/* Center trunk */}
          <line x1="100" y1="0" x2="100" y2="40" />
          {/* Left branch */}
          <path d="M100,40 Q100,60 50,60 L20,60" />
          {/* Right branch */}
          <path d="M100,40 Q100,60 150,60 L180,60" />
          
          {/* Glowing nodes */}
          <circle cx="20" cy="60" r="3" className="fill-[var(--accent-glow)] stroke-none" />
          <circle cx="180" cy="60" r="3" className="fill-[var(--accent-glow)] stroke-none" />
        </svg>
      </div>

      <div className="relative z-10 pt-32 md:pt-48">
        <Container>
          <div className="mb-20 md:mb-32 max-w-2xl text-left">
            <Kicker className="text-[var(--accent-base)] mb-6">The YESA Infrastructure</Kicker>
            <SubHeading className="text-white text-left">
              A 100% free incubator designed to architect your gradual development.
            </SubHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {offerings.map((offering, index) => (
              <OfferingCard 
                key={offering.type}
                type={offering.type}
                title={offering.title}
                description={offering.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};
