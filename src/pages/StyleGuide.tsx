import React from 'react';
import { Container } from '../components/core/Container';
import { DisplayHeading, SubHeading } from '../components/core/Typography';
import { Button } from '../components/core/Button';
import { ScrollReveal } from '../components/core/ScrollReveal';

export const StyleGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090D0F] text-white py-24 selection:bg-[#009D9E]/20 selection:text-[#9AEDFC]">
      <Container>
        
        <ScrollReveal>
          <span className="font-mono text-xs tracking-widest text-[#009D9E] uppercase mb-4 block">
            YESA Foundation
          </span>
          <DisplayHeading className="mb-16">Style Guide</DisplayHeading>
        </ScrollReveal>

        <hr className="border-white/10 mb-16" />

        <ScrollReveal delay={0.1}>
          <SubHeading className="mb-8">1. Colors</SubHeading>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-24">
            
            <div className="flex flex-col gap-2">
              <div className="w-full h-24 rounded-lg bg-[#090D0F] border border-white/10" />
              <span className="font-mono text-xs text-white/50">Base Background<br/>#090D0F</span>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="w-full h-24 rounded-lg bg-[#131719] border border-white/10" />
              <span className="font-mono text-xs text-white/50">Surface<br/>#131719</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full h-24 rounded-lg bg-[#009D9E]" />
              <span className="font-mono text-xs text-white/50">Accent<br/>#009D9E</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full h-24 rounded-lg bg-[#9AEDFC]" />
              <span className="font-mono text-xs text-white/50">Accent Light<br/>#9AEDFC</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full h-24 rounded-lg bg-[#009D9E]/15 border border-[#009D9E]/30" />
              <span className="font-mono text-xs text-white/50">Accent Dim<br/>rgba(0,157,158,0.15)</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full h-24 rounded-lg bg-[#32161A] border border-[#FF4D4D]/30 flex items-center justify-center">
                <span className="text-[#FF4D4D] text-xs font-mono">Alert</span>
              </div>
              <span className="font-mono text-xs text-white/50">Alert State<br/>#32161A</span>
            </div>

          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <SubHeading className="mb-8">2. Typography Scale</SubHeading>
          <div className="flex flex-col gap-12 mb-24">
            
            <div>
              <span className="font-mono text-xs text-white/50 mb-2 block">Hero Display / clamp(2.5rem, 8vw, 9rem)</span>
              <h1 className="hero-heading text-[var(--text-hero)] leading-[var(--leading-tight)] tracking-[var(--tracking-tighter)] font-bold">
                INCUBATOR
              </h1>
            </div>

            <div>
              <span className="font-mono text-xs text-white/50 mb-2 block">Section Heading / clamp(2rem, 5vw, 4rem)</span>
              <h2 className="section-heading text-[var(--text-section)] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] font-semibold">
                Section Title
              </h2>
            </div>

            <div>
              <span className="font-mono text-xs text-white/50 mb-2 block">Sub Heading / clamp(1.75rem, 4vw, 3rem)</span>
              <h3 className="sub-heading text-[var(--text-h2)] leading-[var(--leading-snug)] tracking-[var(--tracking-tight)] font-medium">
                The Path to Leadership
              </h3>
            </div>

            <div>
              <span className="font-mono text-xs text-white/50 mb-2 block">Body / text-base</span>
              <p className="text-white/80 max-w-2xl leading-relaxed">
                This is standard body copy used for paragraphs and descriptions. It uses the same display font but at a normal weight (400) to remain legible at smaller sizes. The line height is relaxed to ensure comfortable reading across long paragraphs.
              </p>
            </div>

          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <SubHeading className="mb-8">3. Button States</SubHeading>
          <div className="flex flex-wrap gap-8 mb-24 p-8 bg-[#131719] border border-white/10 rounded-2xl">
            
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-white/50">Primary</span>
              <Button variant="primary">Default State</Button>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-white/50">Hover (CSS Driven)</span>
              <button className="px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 bg-[#9AEDFC] text-[#090D0F]">
                Hover State
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-white/50">Disabled</span>
              <Button variant="primary" disabled>Disabled State</Button>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-white/50">Outline</span>
              <Button variant="outline">Outline State</Button>
            </div>

          </div>
        </ScrollReveal>

      </Container>
    </div>
  );
};
