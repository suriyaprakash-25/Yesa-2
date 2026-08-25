import React, { useState } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

export interface AscentProgressHUDProps {
  onSelectMilestone?: (milestone: string) => void;
}

export const AscentProgressHUD: React.FC<AscentProgressHUDProps> = ({
  onSelectMilestone,
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const stages = [
    { number: '01', title: 'Volunteering', note: 'Observation & Cohort Training', color: '#94A3B8' },
    { number: '02', title: 'Paid Internship', note: 'Direct Real-World Impact', color: '#38BDF8' },
    { number: '03', title: 'Experienced', note: 'Domain Ownership & Mentorship', color: '#F59E0B' },
    { number: '04', title: 'World-Class Leader', note: 'Venture Direction & Incubation', color: '#FFFFFF' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="p-4 sm:p-5 rounded-2xl bg-[#0E1116]/85 border border-white/[0.08] backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
        
        {/* Top subtle hairline glow */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#94A3B8]">
              THE ASCENT // PROGRESSION STRUCTURE
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-[#64748B]">
            <span>100% FREE INITIATIVE</span>
            <span>•</span>
            <span className="text-emerald-400">STRUCTURED PATH</span>
          </div>
        </div>

        {/* 4-Stage Progressive Timeline Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {stages.map((stg, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => onSelectMilestone?.(stg.title)}
                className={`relative p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  isHovered
                    ? 'bg-[#13171E] border-white/[0.25] shadow-[0_4px_20px_rgba(56,189,248,0.15)]'
                    : 'bg-[#08090B]/60 border-white/[0.06] hover:border-white/[0.15]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[#94A3B8]">
                    STAGE {stg.number}
                  </span>
                  
                  {idx < stages.length - 1 ? (
                    <ChevronRight className="w-3.5 h-3.5 text-[#5D6673] group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                  ) : (
                    <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
                  )}
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-white tracking-tight group-hover:text-sky-200 transition-colors">
                    {stg.title}
                  </h4>
                  <p className="text-[10px] font-sans text-[#64748B] mt-0.5 leading-snug truncate">
                    {stg.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
