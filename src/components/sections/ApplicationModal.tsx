import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import { Button } from '../core/Button';
import { Badge } from '../core/Badge';
import { Card } from '../core/Card';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    chosenField: 'Engineering & Software Systems',
    vision: '',
  });

  const fields = [
    'Engineering & Software Systems',
    'AI & Computational Intelligence',
    'Product Design & Creative Direction',
    'Strategic Operations & Leadership',
    'Venture Incubation & Economics',
    'Scientific Research & Technology',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      chosenField: 'Engineering & Software Systems',
      vision: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="fixed inset-0 bg-[#08090B]/85 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl z-10 my-8"
          >
            <Card variant="elevated" glowEffect glowColor="rgba(56, 189, 248, 0.2)" cornerAccent className="p-6 sm:p-8">
              
              {/* Close Button */}
              <button
                onClick={handleReset}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {!submitted ? (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="emerald" dot>100% FREE INITIATIVE</Badge>
                      <span className="font-mono text-[10px] text-[#64748B]">STAGE 01 // APPLICATION</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Begin Your Ascent
                    </h3>
                    <p className="text-sm text-[#94A3B8] mt-1 font-sans">
                      Choose your field. We evaluate aptitude and shared vision through a structured dialogue.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#08090B] border border-white/[0.1] text-white placeholder-[#4B5563] text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your.email@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#08090B] border border-white/[0.1] text-white placeholder-[#4B5563] text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                        Choose Your Field
                      </label>
                      <select
                        value={formData.chosenField}
                        onChange={(e) => setFormData({ ...formData, chosenField: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#08090B] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-sans"
                      >
                        {fields.map((field) => (
                          <option key={field} value={field} className="bg-[#0E1116] text-white">
                            {field}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                        What drives your ambition to lead?
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Briefly describe your goals and what you aim to achieve through YESA..."
                        value={formData.vision}
                        onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#08090B] border border-white/[0.1] text-white placeholder-[#4B5563] text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-sans resize-none"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#64748B]">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Zero Tuition • Zero Hidden Fees</span>
                      </div>

                      <Button type="submit" variant="primary" size="md" icon={<Send className="w-3.5 h-3.5" />}>
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="py-6 text-center space-y-5">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display text-2xl font-bold text-white">Application Received</h4>
                    <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-white font-medium">{formData.fullName}</span>. Your application for <span className="text-sky-300 font-medium">{formData.chosenField}</span> has been logged. Our admissions team will review your alignment for the upcoming interview stage.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#08090B] border border-white/[0.08] text-xs font-mono text-[#64748B] text-left space-y-1">
                    <div>NEXT STAGE: [ 02 // INTERVIEW & DIALOGUE ]</div>
                    <div>PROGRAM STATUS: 100% FREE INITIATIVE</div>
                  </div>

                  <Button variant="primary" size="sm" onClick={handleReset}>
                    Close Window
                  </Button>
                </div>
              )}

            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
