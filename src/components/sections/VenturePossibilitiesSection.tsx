import React from 'react';
import { Lightbulb, Building2 } from 'lucide-react';
import { Container } from '../core/Container';
import { Card } from '../core/Card';
import { SectionTitle, BodyText, MonoLabel } from '../core/Typography';
import { Badge } from '../core/Badge';
import { Button } from '../core/Button';

interface VenturePossibilitiesSectionProps {
  onOpenApply: () => void;
}

export const VenturePossibilitiesSection: React.FC<VenturePossibilitiesSectionProps> = ({ onOpenApply }) => {
  return (
    <section id="possibilities" className="py-20 md:py-28 relative">
      <Container>
        <div className="space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <MonoLabel glow className="mb-2">04 // HORIZON & VENTURE POTENTIAL</MonoLabel>
            <SectionTitle>
              Future Possibilities: <br />
              <span className="text-[#94A3B8]">Co-Creation & Investment</span>
            </SectionTitle>
            <BodyText size="lg" muted className="leading-relaxed">
              Ascending through YESA unlocks two transformative long-term trajectories: leading institutional initiatives or building your own funded venture.
            </BodyText>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Trajectory 1: Working on YESA's Ideas */}
            <Card 
              variant="elevated" 
              glowEffect 
              glowColor="rgba(56, 189, 248, 0.15)" 
              cornerAccent 
              className="p-8 md:p-10 flex flex-col justify-between space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <Badge variant="accent">PATHWAY 01</Badge>
                </div>

                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Lead YESA's Ideas
                  </h3>
                  <p className="text-sm font-sans text-sky-400 mt-1 font-medium">
                    Direct Core Institutional Initiatives
                  </p>
                </div>

                <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed">
                  Top performers who demonstrate exceptional vision and strategic mastery are entrusted to lead YESA's flagship internal ideas, scaling transformative products and systems across global domains.
                </p>

                <div className="p-4 rounded-xl bg-[#08090B] border border-white/[0.08] space-y-2">
                  <div className="font-mono text-[10px] uppercase text-[#64748B]">
                    LEADERSHIP SCOPE
                  </div>
                  <div className="text-xs text-[#CBD5E1] space-y-1">
                    <div>• Full executive mandate over YESA projects</div>
                    <div>• Direction of multi-disciplinary cohort teams</div>
                    <div>• Direct alignment with YESA leadership council</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <span className="font-mono text-xs text-[#64748B]">DIRECT PROJECT MANDATE</span>
                <Button variant="outline" size="sm" onClick={onOpenApply}>
                  Explore Pathway
                </Button>
              </div>
            </Card>

            {/* Trajectory 2: YESA Investing in Participant's Idea */}
            <Card 
              variant="elevated" 
              glowEffect 
              glowColor="rgba(245, 158, 11, 0.15)" 
              cornerAccent 
              className="p-8 md:p-10 flex flex-col justify-between space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <Badge variant="gold">PATHWAY 02</Badge>
                </div>

                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    YESA Invests in Your Idea
                  </h3>
                  <p className="text-sm font-sans text-amber-400 mt-1 font-medium">
                    Incubation, Capital & Co-Creation
                  </p>
                </div>

                <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed">
                  Participants who cultivate their own breakthrough ideas during the journey can pitch directly to YESA. We provide the capital, cohort infrastructure, and strategic backing to transform your vision into an independent enterprise.
                </p>

                <div className="p-4 rounded-xl bg-[#08090B] border border-white/[0.08] space-y-2">
                  <div className="font-mono text-[10px] uppercase text-[#64748B]">
                    INCUBATION ADVANTAGE
                  </div>
                  <div className="text-xs text-[#CBD5E1] space-y-1">
                    <div>• Direct incubation investment into your startup idea</div>
                    <div>• Access to top-tier technical and operational cohorts</div>
                    <div>• Comprehensive global mentorship and scaling advisory</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <span className="font-mono text-xs text-[#64748B]">VENTURE INCUBATION</span>
                <Button variant="glow" size="sm" onClick={onOpenApply}>
                  Apply to Incubate →
                </Button>
              </div>
            </Card>

          </div>

        </div>
      </Container>
    </section>
  );
};
