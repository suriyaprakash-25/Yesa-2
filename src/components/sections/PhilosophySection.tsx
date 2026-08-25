import React from 'react';
import { Users, Globe2, Briefcase, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { Container } from '../core/Container';
import { Card } from '../core/Card';
import { SectionTitle, BodyText, MonoLabel } from '../core/Typography';
import { Badge } from '../core/Badge';

export const PhilosophySection: React.FC = () => {
  const pillars = [
    {
      icon: <Globe2 className="w-5 h-5 text-sky-400" />,
      title: "Top Lecturers Worldwide",
      description: "Direct guidance and masterclasses from world-renowned educators and industry practitioners.",
      tag: "GLOBAL PERSPECTIVE"
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      title: "Cohort-Based Mentorship",
      description: "Collaborative learning environments led by experienced industry leaders who challenge and refine your thinking.",
      tag: "COLLECTIVE GROWTH"
    },
    {
      icon: <Briefcase className="w-5 h-5 text-amber-400" />,
      title: "Real-World Projects",
      description: "No hypothetical classroom exercises. Participants build, test, and deploy initiatives with tangible impact.",
      tag: "TACTICAL EXECUTION"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-purple-400" />,
      title: "Structured Progression",
      description: "A transparent ladder from volunteering and observation to paid internships and executive leadership.",
      tag: "MEASURED ADVANCEMENT"
    }
  ];

  return (
    <section id="philosophy" className="py-20 md:py-28 relative">
      <Container>
        <div className="space-y-16">
          
          {/* Section Header & Manifesto */}
          <div className="max-w-3xl space-y-4">
            <MonoLabel glow className="mb-2">01 // CORE PURPOSE & PHILOSOPHY</MonoLabel>
            <SectionTitle>
              Choose your field. <br />
              <span className="text-[#94A3B8]">We provide the path.</span>
            </SectionTitle>
            <BodyText size="lg" muted className="leading-relaxed">
              YESA is not a conventional college, job board, or generic accelerator. It is an incubator built on the conviction that leadership is forged through progressive responsibility and real-world execution.
            </BodyText>
          </div>

          {/* Central Philosophy Manifesto Panel */}
          <Card variant="elevated" cornerAccent className="p-8 md:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <Badge variant="emerald" dot>100% FREE INITIATIVE</Badge>
                  <span className="font-mono text-xs text-[#64748B]">ZERO BARRIER TO ENTRY</span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-snug">
                  "A person enters YESA with potential. Through structured stages, they emerge as a world-class leader."
                </h3>

                <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed">
                  Every participant begins with curiosity and aptitude. Through our cohort-based experience-ships, mentorship from top global lecturers, and direct project ownership, we transform raw capability into decisive institutional leadership.
                </p>
              </div>

              <div className="lg:col-span-4 p-6 rounded-xl bg-[#08090B] border border-white/[0.08] space-y-4">
                <div className="font-mono text-xs uppercase tracking-wider text-sky-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>The YESA Commitment</span>
                </div>
                
                <ul className="space-y-3 text-xs text-[#CBD5E1]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>100% Free trainings and experience-ships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Real-world project execution with cohorts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Direct pathway to paid internships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Opportunities for venture co-creation & investment</span>
                  </li>
                </ul>
              </div>

            </div>
          </Card>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <Card key={idx} variant="glass" className="p-6 flex flex-col justify-between space-y-4 group hover:border-white/[0.2] transition-colors">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-[10px] text-[#64748B] tracking-wider block">
                    {pillar.tag}
                  </span>
                  <h4 className="text-base font-semibold text-white group-hover:text-sky-200 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};
