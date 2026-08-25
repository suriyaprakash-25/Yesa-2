import React from 'react';
import { motion } from 'framer-motion';
import { ASCENT_STAGES, type AscentStageId } from '../../types/design-system';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface StageTimelineNavProps {
  activeStageId: AscentStageId;
  onSelectStage: (id: AscentStageId) => void;
}

export const StageTimelineNav: React.FC<StageTimelineNavProps> = ({
  activeStageId,
  onSelectStage
}) => {
  const currentIndex = ASCENT_STAGES.findIndex(s => s.id === activeStageId);

  return (
    <div className="w-full bg-[#0E1116]/80 rounded-2xl border border-white/[0.08] p-4 lg:p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-sky-400" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#94A3B8]">
            THE ASCENT PROGRESSION MAP
          </span>
        </div>
        <div className="text-xs font-mono text-[#64748B]">
          STAGE {currentIndex + 1} OF {ASCENT_STAGES.length}
        </div>
      </div>

      {/* Interactive Horizontal Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {ASCENT_STAGES.map((stage, idx) => {
          const isSelected = stage.id === activeStageId;
          const isPassed = idx < currentIndex;

          return (
            <button
              key={stage.id}
              onClick={() => onSelectStage(stage.id)}
              className={`relative text-left p-3.5 rounded-xl transition-all duration-200 border cursor-pointer group flex flex-col justify-between min-h-[100px] ${
                isSelected
                  ? 'bg-[#141820] border-white/[0.25] shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
                  : isPassed
                  ? 'bg-[#0A0C0F] border-white/[0.06] hover:border-white/[0.15]'
                  : 'bg-[#0A0C0F]/50 border-white/[0.04] hover:border-white/[0.1]'
              }`}
            >
              {/* Active Indicator Top Glow Bar */}
              {isSelected && (
                <motion.div
                  layoutId="stageActiveBar"
                  className="absolute inset-x-0 -top-[1px] h-[2px] bg-gradient-to-r from-sky-400 via-white to-sky-400"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <div className="flex items-center justify-between w-full mb-2">
                <span className={`font-mono text-xs font-semibold px-2 py-0.5 rounded ${
                  isSelected 
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30' 
                    : isPassed
                    ? 'text-emerald-400 bg-emerald-500/10'
                    : 'text-[#64748B] bg-white/[0.03]'
                }`}>
                  {stage.stepNumber}
                </span>

                {isPassed && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80" />
                )}
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
                )}
              </div>

              <div>
                <h4 className={`text-xs font-semibold tracking-tight leading-snug transition-colors ${
                  isSelected ? 'text-white' : 'text-[#94A3B8] group-hover:text-[#E2E8F0]'
                }`}>
                  {stage.title}
                </h4>
                <p className="text-[10px] text-[#64748B] font-mono mt-1 truncate">
                  {stage.stateBadge}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
