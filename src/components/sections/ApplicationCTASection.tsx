import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../core/Container';
import { Card } from '../core/Card';
import { DisplayHeading, MonoLabel } from '../core/Typography';
import { Badge } from '../core/Badge';
import { Button } from '../core/Button';

interface ApplicationCTASectionProps {
  onOpenApply: () => void;
}

export const ApplicationCTASection: React.FC<ApplicationCTASectionProps> = ({ onOpenApply }) => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-500/[0.08] via-white/[0.02] to-amber-500/[0.04] blur-3xl pointer-events-none" />

      <Container>
        <Card 
          variant="elevated" 
          cornerAccent 
          glowEffect 
          glowColor="rgba(56, 189, 248, 0.2)" 
          className="p-8 sm:p-14 md:p-20 text-center relative overflow-hidden max-w-5xl mx-auto"
        >
          
          <div className="max-w-3xl mx-auto space-y-8">
            
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Badge variant="emerald" dot>100% FREE INITIATIVE</Badge>
              <MonoLabel glow>[ APPLICATIONS OPEN // NEXT COHORT ]</MonoLabel>
            </div>

            <div className="space-y-4">
              <DisplayHeading className="text-3xl sm:text-5xl md:text-6xl text-center">
                Your Ascent <br />
                <span className="bg-gradient-to-r from-white via-[#E2E8F0] to-[#94A3B8] bg-clip-text text-transparent">
                  Begins Today.
                </span>
              </DisplayHeading>

              <p className="text-lg sm:text-xl text-[#94A3B8] font-sans font-light max-w-xl mx-auto leading-relaxed">
                "Choose your field. <span className="text-white font-medium">We provide the path.</span>"
              </p>
            </div>

            <p className="text-sm text-[#94A3B8] max-w-lg mx-auto leading-relaxed">
              Step into an incubator where potential is transformed through free trainings, global mentorship, and real-world project ownership.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4" />}
                onClick={onOpenApply}
              >
                Apply for Next Cohort
              </Button>
            </div>

            <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs text-[#64748B] font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Zero Tuition
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Structured Pathway
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Paid Internship Track
              </span>
            </div>

          </div>

        </Card>
      </Container>
    </section>
  );
};
