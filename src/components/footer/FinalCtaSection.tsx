import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../core/Container';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenApply?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenApply }) => {
  const navigate = useNavigate();

  const handleApply = () => {
    if (onOpenApply) {
      onOpenApply();
    } else {
      navigate('/apply');
    }
  };

  return (
    <section
      id="apply"
      className="relative w-full bg-[#090D0F] pt-14 pb-0 md:pt-20 md:pb-0 border-t border-white/[0.06] overflow-hidden flex flex-col justify-between"
    >
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-screen">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
          }}
        />
      </div>

      <Container size="full" className="max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10 flex flex-col items-center text-center">
        {/* Descending Path Line to Anchor the Section */}
        <div className="flex flex-col items-center mb-10">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-[1.5px] bg-gradient-to-b from-[#009D9E]/0 via-[#009D9E] to-[#9AEDFC]"
          />
          <div className="w-3 h-3 rounded-full bg-[#009D9E] border-2 border-[#9AEDFC] shadow-[0_0_15px_#009D9E] mt-[-1px]" />
        </div>

        {/* Messaging */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#009D9E]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009D9E] font-semibold">
              THE BEGINNING
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.0] mb-6 [overflow-wrap:normal] [word-break:keep-all]">
            Your journey starts with a choice.
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-[#8A8A8A] font-light leading-snug">
            Choose your field. <span className="text-white font-normal">We provide the path.</span>
          </p>
        </motion.div>

        {/* Massive Interactive CTA Button with Ambient Pulsing Glow & Fill-Sweep */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl relative group"
        >
          {/* Subtle Ambient Pulsing Glow behind the button */}
          <div className="absolute inset-0 bg-[#009D9E]/25 rounded-3xl blur-2xl group-hover:bg-[#009D9E]/40 group-hover:blur-3xl transition-all duration-500 animate-pulse pointer-events-none" />

          {/* Premium Button Container */}
          <button
            onClick={handleApply}
            className="group/btn relative w-full overflow-hidden rounded-3xl bg-[#131719] border border-white/[0.12] hover:border-[#009D9E]/60 p-1.5 transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,157,158,0.3)] cursor-pointer"
          >
            {/* Shimmer Fill-Sweep Overlay */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#009D9E]/15 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out" />

            <div className="flex items-center justify-between px-8 py-6 sm:px-12 sm:py-8 relative z-10">
              <div className="text-left">
                <span className="font-mono text-[10px] sm:text-xs text-[#009D9E] font-bold uppercase tracking-widest block mb-1">
                  100% FREE INCUBATOR
                </span>
                <span className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight">
                  Apply to YESA
                </span>
              </div>

              {/* Action Circle */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#009D9E] group-hover/btn:bg-[#9AEDFC] text-[#090D0F] flex items-center justify-center shadow-[0_0_20px_rgba(0,157,158,0.5)] group-hover/btn:scale-105 group-hover/btn:rotate-[-4deg] transition-all duration-300">
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover/btn:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </button>
        </motion.div>
      </Container>

      {/* Massive "YESA" Wordmark Backdrop Impression bleeding completely to the end */}
      <div className="w-full mt-12 md:mt-16 pointer-events-none select-none flex flex-col items-center justify-end overflow-hidden -mb-4 sm:-mb-8 md:-mb-12">
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8A8A8A] font-semibold mb-1">
          INCUBATOR FOR FUTURE LEADERS
        </span>
        <span className="font-display font-black text-[20vw] leading-none text-white/[0.09] tracking-tighter block translate-y-1/4 select-none">
          YESA
        </span>
      </div>
    </section>
  );
};
