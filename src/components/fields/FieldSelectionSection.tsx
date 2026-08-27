import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../core/Container';
import { DisplayHeading, SubHeading } from '../core/Typography';
import { Button } from '../core/Button';
import { ArrowRight } from 'lucide-react';

const ABSTRACT_FIELDS = [
  { id: 'alpha', name: 'Field Alpha', color: 'bg-sky-400', border: 'border-sky-400/30' },
  { id: 'beta', name: 'Field Beta', color: 'bg-emerald-400', border: 'border-emerald-400/30' },
  { id: 'gamma', name: 'Field Gamma', color: 'bg-amber-400', border: 'border-amber-400/30' },
  { id: 'delta', name: 'Field Delta', color: 'bg-indigo-400', border: 'border-indigo-400/30' }
];

const PATH_STEPS = [
  "Training",
  "Experience",
  "Real-world work",
  "Leadership"
];

export const FieldSelectionSection: React.FC = () => {
  const [activeField, setActiveField] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-[#08090B] py-32 md:py-48 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* 
        Transition gradient from the previous light section.
        Fades from the #F3F5F7 of the World-Class Leader moment into the deep dark.
      */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#F3F5F7] to-[#08090B] pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center">
        
        {/* Headers */}
        <div className="text-center mb-20 md:mb-32">
          <DisplayHeading className="mb-6">Choose your field.</DisplayHeading>
          <SubHeading className="text-white/60 max-w-xl mx-auto">
            Select an area of focus below. We provide the structured path to master it.
          </SubHeading>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start justify-center min-h-[400px]">
          
          {/* Left Side: Field Selector Grid */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {ABSTRACT_FIELDS.map((field) => {
              const isSelected = activeField === field.id;
              const isFaded = activeField !== null && activeField !== field.id;

              return (
                <button
                  key={field.id}
                  onClick={() => setActiveField(isSelected ? null : field.id)}
                  onMouseEnter={() => setActiveField(field.id)}
                  className={`
                    relative w-full text-left p-6 rounded-2xl border transition-all duration-500
                    ${isSelected ? 'bg-white/10 border-white/30 scale-[1.02]' : 'bg-transparent border-white/5 hover:bg-white/5'}
                    ${isFaded ? 'opacity-30 blur-[2px]' : 'opacity-100 blur-0'}
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${field.color} ${isSelected ? 'shadow-[0_0_15px_currentColor]' : ''}`} />
                    <span className="font-display text-xl md:text-2xl tracking-wide">{field.name}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: The Path Visualizer */}
          <div className="w-full lg:w-2/3 h-full min-h-[300px] flex items-center relative">
            <AnimatePresence mode="wait">
              {activeField ? (
                <motion.div
                  key={activeField}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative"
                >
                  
                  {/* Connecting Line */}
                  <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 hidden md:block" />
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-1/2 left-0 w-full h-[2px] bg-sky-400 origin-left -translate-y-1/2 hidden md:block" 
                    style={{ boxShadow: '0 0 15px rgba(56,189,248,0.5)' }}
                  />

                  {/* Vertical line for mobile */}
                  <div className="absolute left-6 top-0 h-full w-px bg-white/10 md:hidden" />
                  <motion.div 
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-6 top-0 h-full w-[2px] bg-sky-400 origin-top md:hidden" 
                    style={{ boxShadow: '0 0 15px rgba(56,189,248,0.5)' }}
                  />

                  {/* Path Steps */}
                  {PATH_STEPS.map((step, idx) => {
                    const activeColor = ABSTRACT_FIELDS.find(f => f.id === activeField)?.color || 'bg-sky-400';
                    return (
                      <motion.div 
                        key={step}
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + (idx * 0.15), ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 flex flex-row md:flex-col items-center gap-4 md:gap-6 bg-[#08090B] p-2"
                      >
                        <div className={`w-12 h-12 rounded-full border-2 border-[#08090B] flex items-center justify-center relative ${activeColor} shadow-[0_0_20px_rgba(56,189,248,0.3)]`}>
                          <span className="text-[#08090B] font-mono font-bold text-sm">{idx + 1}</span>
                          
                          {/* Pulsing ring */}
                          <motion.div 
                            className={`absolute inset-0 rounded-full border border-current opacity-50`}
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                          />
                        </div>
                        <span className="font-display font-medium text-white/90 md:text-center text-lg md:text-base">
                          {step}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full flex items-center justify-center border border-white/5 rounded-3xl border-dashed py-20"
                >
                  <p className="font-mono text-white/30 uppercase tracking-widest text-sm text-center">
                    Hover a field to reveal the path
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 w-full max-w-sm"
        >
          <Button variant="primary" size="lg" className="w-full group py-6">
            <span className="flex items-center justify-center gap-3 text-lg font-medium">
              Start your journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </motion.div>

      </Container>
    </section>
  );
};
