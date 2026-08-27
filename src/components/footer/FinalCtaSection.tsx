import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../core/Container';
import { DisplayHeading, SubHeading } from '../core/Typography';
import { ArrowRight } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#08090B] py-32 md:py-48 overflow-hidden min-h-screen flex flex-col justify-between">
      
      {/* Top section: The descending path & text */}
      <Container className="relative z-10 flex flex-col items-center pt-20">
        
        {/* Descending path line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 160 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-px bg-gradient-to-b from-sky-400/0 via-sky-400 to-sky-400 mb-8"
        />

        {/* Anchor point */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="w-3 h-3 rounded-full bg-sky-400 mb-16"
          style={{ boxShadow: '0 0 20px rgba(56,189,248,0.8)' }}
        />

        {/* Messaging */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <span className="font-mono-tag text-sky-400 tracking-widest uppercase block mb-6">
              The Beginning
            </span>
            <DisplayHeading className="mb-6">Your journey starts<br/>with a choice.</DisplayHeading>
            <SubHeading className="text-white/60">
              Choose your field.<br/>We provide the path.
            </SubHeading>
          </motion.div>
        </div>

        {/* The Massive CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 2 }}
          className="w-full max-w-2xl"
        >
          <button className="group relative w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-1 transition-all hover:bg-white/10 hover:border-sky-400/50 hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-sky-500/0 via-sky-500/10 to-sky-500/0 -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            <div className="flex items-center justify-between px-8 py-8 md:px-12 md:py-10">
              <span className="font-display text-3xl md:text-5xl text-white tracking-wide">
                Apply to YESA
              </span>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-sky-400 flex items-center justify-center text-[#08090B] group-hover:scale-110 transition-transform">
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
          </button>
        </motion.div>

      </Container>

      {/* Bottom section: The massive brand impression */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 2.5 }}
        className="w-full mt-32 md:mt-48 pointer-events-none select-none flex flex-col items-center justify-end overflow-hidden px-4"
      >
        <span className="font-mono-tag text-white/30 uppercase tracking-[0.3em] mb-4 text-sm md:text-base">
          Incubator for Future Leaders
        </span>
        <h1 className="font-display font-black tracking-tighter text-[15vw] leading-none text-white/5">
          YESA
        </h1>
      </motion.div>

    </section>
  );
};
