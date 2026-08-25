import React from 'react';
import { 
  GraduationCap, 
  Users, 
  Globe2, 
  Coins, 
  Briefcase, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { Container } from '../core/Container';
import { Card } from '../core/Card';
import { SectionTitle, MonoLabel } from '../core/Typography';
import { Button } from '../core/Button';

interface OfferingsSectionProps {
  onOpenApply: () => void;
}

export const OfferingsSection: React.FC<OfferingsSectionProps> = ({ onOpenApply }) => {
  const offerings = [
    {
      icon: <GraduationCap className="w-6 h-6 text-sky-400" />,
      title: "Free Trainings & Experience-Ships",
      badge: "100% FREE",
      description: "Rigorous curriculum and hands-on operational training designed to build applied competence with zero tuition or financial obligation.",
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      title: "Cohort Programs with Industry Leaders",
      badge: "ACTIVE PEER NETWORK",
      description: "Learn and build alongside dedicated cohorts led by seasoned practitioners who challenge standards and facilitate deep collaboration.",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-amber-400" />,
      title: "Guidance from Top Global Lecturers",
      badge: "WORLD-CLASS FACULTY",
      description: "Gain perspectives, insights, and frameworks directly from distinguished educators and thinkers from around the globe.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-purple-400" />,
      title: "Real-World Project Execution",
      badge: "APPLIED IMPACT",
      description: "Direct engagement on active initiatives, solving complex technical, design, strategic, and operational challenges.",
    },
    {
      icon: <Coins className="w-6 h-6 text-cyan-400" />,
      title: "Volunteering to Paid Internship Pathway",
      badge: "MERIT ADVANCEMENT",
      description: "A clear progression mechanism that transitions proven volunteer dedication into fully compensated internships and project leadership.",
    },
    {
      icon: <Award className="w-6 h-6 text-rose-400" />,
      title: "Leadership & Incubation Opportunities",
      badge: "VENTURE CREATION",
      description: "Graduates are empowered to direct YESA's initiatives or present their own visionary concepts for direct YESA incubation investment.",
    }
  ];

  return (
    <section id="offerings" className="py-20 md:py-28 relative">
      <Container>
        <div className="space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
            <div className="space-y-3">
              <MonoLabel glow>03 // INSTITUTIONAL PROVISIONS</MonoLabel>
              <SectionTitle>What YESA Provides</SectionTitle>
              <p className="text-lg text-[#94A3B8] max-w-2xl font-sans">
                Every resource, mentorship session, and project opportunity is designed for one outcome: cultivating decisive future leaders.
              </p>
            </div>

            <Button variant="outline" size="sm" onClick={onOpenApply}>
              Enroll in Next Cohort →
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, idx) => (
              <Card 
                key={idx} 
                variant="glass" 
                className="p-8 flex flex-col justify-between space-y-6 hover:border-white/[0.25] transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <span className="font-mono text-[10px] text-sky-400 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-sky-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#64748B]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Integrated in 100% Free Track</span>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};
