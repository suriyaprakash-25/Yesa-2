import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '../core/Container';
import { DisplayHeading, SubHeading, Kicker } from '../core/Typography';
import { OfferingCard } from './OfferingCard';
import type { OfferingType } from './OfferingCard';
import { ScrollPathConnector } from '../visual/ScrollPathConnector';

export const PhilosophyManifestoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this entire section (which is tall to allow sticky scrolling)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. First statement fades out
  const opacityStatement1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const yStatement1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // 2. Second statement fades in, then fades out
  const opacityStatement2 = useTransform(scrollYProgress, [0.15, 0.25, 0.4], [0, 1, 0]);
  const yStatement2 = useTransform(scrollYProgress, [0.15, 0.25, 0.4], [50, 0, -50]);

  // 3. The Path words reveal progressively
  // CHOOSE (0.35 - 0.4)
  // LEARN (0.4 - 0.45)
  // OBSERVE (0.45 - 0.5)
  // CONTRIBUTE (0.5 - 0.55)
  // LEAD (0.55 - 0.6)
  
  const opacityChoose = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);
  const yChoose = useTransform(scrollYProgress, [0.35, 0.4], [20, 0]);

  const opacityLearn = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);
  const yLearn = useTransform(scrollYProgress, [0.4, 0.45], [20, 0]);

  const opacityObserve = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
  const yObserve = useTransform(scrollYProgress, [0.45, 0.5], [20, 0]);

  const opacityContribute = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);
  const yContribute = useTransform(scrollYProgress, [0.5, 0.55], [20, 0]);

  const opacityLead = useTransform(scrollYProgress, [0.55, 0.6], [0, 1]);
  const yLead = useTransform(scrollYProgress, [0.55, 0.6], [20, 0]);

  // Fade out the entire sticky word sequence as we move to the features
  const opacityWordSequence = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);

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
    <section ref={containerRef} className="relative w-full bg-[#08090B]">
      
      {/* 
        ========================================================
        PART 1: THE STICKY NARRATIVE (400vh tall to allow scrolling)
        ========================================================
      */}
      <div className="h-[400vh] relative">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* Background Path Continuation connecting from Hero */}
          <ScrollPathConnector progress={scrollYProgress} height="100vh" className="top-0" />

          <Container className="relative z-10 w-full text-center">
            
            {/* Statement 1 */}
            <motion.div 
              style={{ opacity: opacityStatement1, y: yStatement1 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <DisplayHeading className="text-white/40 tracking-tight">
                YOU DON'T NEED<br/>ANOTHER COURSE.
              </DisplayHeading>
            </motion.div>

            {/* Statement 2 */}
            <motion.div 
              style={{ opacity: opacityStatement2, y: yStatement2 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <DisplayHeading className="text-white tracking-tight">
                YOU NEED<br/>A PATH.
              </DisplayHeading>
            </motion.div>

            {/* The Path Words Sequence */}
            <motion.div 
              style={{ opacity: opacityWordSequence }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-6 md:gap-8"
            >
              <motion.div style={{ opacity: opacityChoose, y: yChoose }}>
                <span className="font-mono-tag tracking-widest text-sky-500 uppercase text-sm md:text-base">01. Choose</span>
              </motion.div>
              
              <motion.div style={{ opacity: opacityLearn, y: yLearn }}>
                <span className="font-mono-tag tracking-widest text-sky-400 uppercase text-sm md:text-base">02. Learn</span>
              </motion.div>

              <motion.div style={{ opacity: opacityObserve, y: yObserve }}>
                <span className="font-mono-tag tracking-widest text-emerald-400 uppercase text-sm md:text-base">03. Observe</span>
              </motion.div>

              <motion.div style={{ opacity: opacityContribute, y: yContribute }}>
                <span className="font-mono-tag tracking-widest text-amber-400 uppercase text-sm md:text-base">04. Contribute</span>
              </motion.div>

              <motion.div style={{ opacity: opacityLead, y: yLead }}>
                <span className="font-mono-tag tracking-widest text-white uppercase text-base md:text-lg font-bold">05. Lead</span>
              </motion.div>
            </motion.div>

          </Container>
        </div>
      </div>

      {/* 
        ========================================================
        PART 2: THE OFFERINGS SHOWCASE
        ========================================================
      */}
      <div className="relative z-10 py-32 md:py-48 border-t border-white/5 bg-[#08090B]">
        <Container>
          <div className="mb-20 md:mb-32 max-w-2xl">
            <Kicker className="text-sky-400 mb-6">The YESA Infrastructure</Kicker>
            <SubHeading className="text-white">
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
