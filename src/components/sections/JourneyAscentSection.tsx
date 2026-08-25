import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  MessageSquare, 
  Eye, 
  Award, 
  TrendingUp, 
  Crown 
} from 'lucide-react';
import { Container } from '../core/Container';
import { Card } from '../core/Card';
import { SectionTitle, MonoLabel } from '../core/Typography';
import { Badge } from '../core/Badge';
import { Button } from '../core/Button';
import { AscentVisualizer } from '../visual/AscentVisualizer';
import type { AscentStageId } from '../../types/design-system';

interface JourneyAscentSectionProps {
  onOpenApply: () => void;
}

export const JourneyAscentSection: React.FC<JourneyAscentSectionProps> = ({ onOpenApply }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const journeySteps = [
    {
      id: 'step-1',
      stageId: 'potential' as AscentStageId,
      stepNumber: '01',
      title: 'Application',
      badge: 'INTENTION ALIGNMENT',
      icon: <FileText className="w-5 h-5 text-slate-300" />,
      tagline: 'Choose your field and declare your trajectory.',
      description: 'You select the discipline you want to master. We assess intrinsic curiosity, aptitude, and long-term vision without artificial prerequisite barriers.',
      highlights: [
        'Open to ambitious individuals across all disciplines',
        'Declaration of desired field and career aspirations',
        '100% Free submission and entry evaluation'
      ]
    },
    {
      id: 'step-2',
      stageId: 'potential' as AscentStageId,
      stepNumber: '02',
      title: 'Interview & Dialogue',
      badge: 'MUTUAL ALIGNMENT',
      icon: <MessageSquare className="w-5 h-5 text-sky-400" />,
      tagline: 'A strategic conversation on goals, rigor, and vision.',
      description: 'Not a conventional interrogation, but an in-depth dialogue to ensure alignment between your aspirations and YESA’s intensive progression standards.',
      highlights: [
        'Dialogue with YESA mentors and coordinators',
        'Evaluation of problem-solving approach and dedication',
        'Personalized roadmap framing for the upcoming cohort'
      ]
    },
    {
      id: 'step-3',
      stageId: 'observation' as AscentStageId,
      stepNumber: '03',
      title: 'Volunteering & Observation',
      badge: 'FREE TRAININGS & EXPOSURE',
      icon: <Eye className="w-5 h-5 text-sky-400" />,
      tagline: 'Free trainings, cohort immersion, and international guidance.',
      description: 'An intensive observation period where you receive training from top lecturers worldwide, collaborate with peers, and prove dedication on volunteer initiatives.',
      highlights: [
        'Guidance from top international lecturers and industry leaders',
        'Cohort-based collaborative problem solving',
        'Direct observation of live production systems'
      ]
    },
    {
      id: 'step-4',
      stageId: 'paid' as AscentStageId,
      stepNumber: '04',
      title: 'Paid Internship',
      badge: 'COMPENSATED EXECUTION',
      icon: <Award className="w-5 h-5 text-emerald-400" />,
      tagline: 'Direct operational impact on real-world projects.',
      description: 'Demonstrated excellence unlocks a compensated internship. You assume direct responsibility for delivering critical modules on live projects.',
      highlights: [
        'Full financial compensation during project engagement',
        'High-stakes execution on real-world deliverables',
        'Continuous 1-on-1 mentorship from senior practitioners'
      ]
    },
    {
      id: 'step-5',
      stageId: 'experienced' as AscentStageId,
      stepNumber: '05',
      title: 'Experienced Practitioner',
      badge: 'STRATEGIC AUTONOMY',
      icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
      tagline: 'System ownership, architectural leadership, and mentoring.',
      description: 'You transition into full autonomy—architecting complex systems, guiding emerging cohort participants, and leading project teams.',
      highlights: [
        'Full architectural and strategic domain ownership',
        'Mentoring and guiding new cohort members',
        'Direct collaboration with institutional directors'
      ]
    },
    {
      id: 'step-6',
      stageId: 'leader' as AscentStageId,
      stepNumber: '06',
      title: 'World-Class Leader',
      badge: 'VENTURE & CO-CREATION',
      icon: <Crown className="w-5 h-5 text-white" />,
      tagline: 'Leading YESA initiatives or securing incubator investment.',
      description: 'The pinnacle of the ascent. Lead flagship YESA initiatives worldwide, or have YESA invest directly into your own visionary venture.',
      highlights: [
        'Direction of YESA’s core global initiatives',
        'Opportunity for YESA venture funding for your own startup idea',
        'Membership in an elite international leadership circle'
      ]
    }
  ];

  const current = journeySteps[activeStep];

  return (
    <section id="journey" className="py-20 md:py-32 relative bg-[#08090B]">
      <Container>
        <div className="space-y-16">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
            <div className="space-y-3">
              <MonoLabel glow>02 // THE ASCENT ROADMAP</MonoLabel>
              <SectionTitle>The 6 Stages of Growth</SectionTitle>
              <p className="text-lg text-[#94A3B8] max-w-2xl font-sans">
                A structured, transparent pathway designed to advance individuals from initial curiosity to world-class institutional leadership.
              </p>
            </div>

            <Badge variant="emerald" dot className="font-mono text-xs py-1.5 self-start md:self-auto">
              100% FREE ADMISSION
            </Badge>
          </div>

          {/* Interactive Step Navigator Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {journeySteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPassed = idx < activeStep;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[110px] relative overflow-hidden group ${
                    isActive 
                      ? 'bg-[#13171E] border-white/[0.3] shadow-[0_8px_25px_rgba(0,0,0,0.5)]' 
                      : isPassed
                      ? 'bg-[#0A0C0F] border-white/[0.08] hover:border-white/[0.18]'
                      : 'bg-[#0A0C0F]/50 border-white/[0.04] hover:border-white/[0.12]'
                  }`}
                >
                  {/* Top Active Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="journeyStepBar"
                      className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-sky-400 via-white to-sky-400"
                    />
                  )}

                  <div className="flex items-center justify-between w-full">
                    <span className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-sky-500/20 text-sky-300' : 'text-[#64748B]'
                    }`}>
                      {step.stepNumber}
                    </span>
                    {isPassed ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : isActive ? (
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                    ) : null}
                  </div>

                  <div>
                    <h5 className={`text-xs font-semibold tracking-tight transition-colors ${
                      isActive ? 'text-white font-bold' : 'text-[#94A3B8] group-hover:text-white'
                    }`}>
                      {step.title}
                    </h5>
                    <p className="font-mono text-[9px] text-[#64748B] mt-0.5 truncate">
                      {step.badge}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Step Detail Spotlight */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Dynamic Visualizer Canvas for active stage */}
            <div className="lg:col-span-6 h-[440px] rounded-2xl overflow-hidden">
              <AscentVisualizer activeStageId={current.stageId} />
            </div>

            {/* Right: Step Deep Dive */}
            <div className="lg:col-span-6">
              <Card variant="elevated" cornerAccent className="h-full p-8 flex flex-col justify-between space-y-6">
                
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.1]">
                        {current.icon}
                      </div>
                      <span className="font-mono text-2xl font-bold text-white/90">
                        STAGE {current.stepNumber}
                      </span>
                    </div>
                    
                    <Badge variant="accent" className="font-mono text-[10px]">
                      {current.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {current.title}
                    </h3>
                    <p className="text-sm font-sans text-sky-400 mt-1 font-medium">
                      "{current.tagline}"
                    </p>
                  </div>

                  <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed">
                    {current.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                    <div className="font-mono text-[10px] uppercase text-[#64748B] tracking-wider mb-2">
                      Key Stage Capabilities
                    </div>
                    {current.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                        <ChevronRight className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="font-mono text-xs text-[#64748B]">100% FREE INCUBATOR</span>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                    >
                      ← Previous
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => {
                        if (activeStep < journeySteps.length - 1) {
                          setActiveStep(prev => prev + 1);
                        } else {
                          onOpenApply();
                        }
                      }}
                    >
                      {activeStep < journeySteps.length - 1 ? 'Next Stage →' : 'Begin Application'}
                    </Button>
                  </div>
                </div>

              </Card>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};
