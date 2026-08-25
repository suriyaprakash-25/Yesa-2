export type AscentStageId = 'potential' | 'observation' | 'paid' | 'experienced' | 'leader';

export interface AscentStage {
  id: AscentStageId;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  glowColor: string;
  accentBg: string;
  stateBadge: string;
  progressionNote: string;
}

export const ASCENT_STAGES: AscentStage[] = [
  {
    id: 'potential',
    stepNumber: '01',
    title: 'Potential / Application',
    subtitle: 'Entry & Intention Alignment',
    description: 'Candidates with intrinsic drive enter the incubator. Choose your field; we assess aptitude and shared vision through a direct application and interview dialogue.',
    color: 'var(--stage-1-color)',
    glowColor: 'var(--stage-1-glow)',
    accentBg: 'rgba(148, 163, 184, 0.1)',
    stateBadge: 'ENTRY EVALUATION',
    progressionNote: 'Application → Interview dialogue'
  },
  {
    id: 'observation',
    stepNumber: '02',
    title: 'Volunteering & Observation',
    subtitle: 'Immersive Real-World Exposure',
    description: 'A structured observation and volunteering period where participants work alongside active cohorts, absorb methodologies, and receive guidance from world-class lecturers.',
    color: 'var(--stage-2-color)',
    glowColor: 'var(--stage-2-glow)',
    accentBg: 'rgba(56, 189, 248, 0.1)',
    stateBadge: 'FREE TRAINING & COHORTS',
    progressionNote: 'Observation → Foundational Execution'
  },
  {
    id: 'paid',
    stepNumber: '03',
    title: 'Paid Internship',
    subtitle: 'Direct Operational Impact',
    description: 'Demonstrated consistency unlocks a paid internship pathway. Participants engage on real-world projects with dedicated mentorship and cohort collaboration.',
    color: 'var(--stage-3-color)',
    glowColor: 'var(--stage-3-glow)',
    accentBg: 'rgba(52, 211, 153, 0.1)',
    stateBadge: 'COMPENSATED EXECUTION',
    progressionNote: 'Volunteering → Paid Advancement'
  },
  {
    id: 'experienced',
    stepNumber: '04',
    title: 'Experienced Practitioner',
    subtitle: 'System Ownership & Autonomy',
    description: 'Deepened expertise across complex challenges. Participants lead project modules, mentor emerging cohorts, and refine advanced strategic competencies.',
    color: 'var(--stage-4-color)',
    glowColor: 'var(--stage-4-glow)',
    accentBg: 'rgba(251, 191, 36, 0.1)',
    stateBadge: 'STRATEGIC MASTERY',
    progressionNote: 'Internship → Senior Domain Ownership'
  },
  {
    id: 'leader',
    stepNumber: '05',
    title: 'World-Class Leader',
    subtitle: 'Global Impact & Incubation',
    description: 'The pinnacle of the ascent. Leaders drive breakthrough initiatives, direct YESA projects, or receive incubation investment into their own visionary ideas.',
    color: 'var(--stage-5-color)',
    glowColor: 'var(--stage-5-glow)',
    accentBg: 'rgba(255, 255, 255, 0.15)',
    stateBadge: 'VENTURE & LEADERSHIP',
    progressionNote: 'Incubation & Co-Creation'
  }
];

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow' | 'monastic';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type CardVariant = 'default' | 'elevated' | 'glass' | 'interactive' | 'ascent-stage';
