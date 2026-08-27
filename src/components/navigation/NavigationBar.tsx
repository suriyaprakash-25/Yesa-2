import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '../core/Button';
import { Container } from '../core/Container';

const NAV_LINKS = [
  { id: 'journey', label: 'JOURNEY' },
  { id: 'fields', label: 'FIELDS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'future', label: 'FUTURE' }
];

export const NavigationBar: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  useEffect(() => {
    // Intersection Observer for scrollspy
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' }
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed top-0 w-full z-[9000] transition-colors duration-300 ${
        isScrolled ? 'bg-[#090D0F]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            className="text-white font-display font-bold text-2xl tracking-widest cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            YESA
          </div>

          {/* Links & CTA */}
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-mono text-xs tracking-widest uppercase transition-colors duration-300 ${
                    activeSection === link.id ? 'text-[var(--accent-base)]' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <Button 
              variant="primary" 
              size="sm"
              onClick={() => scrollToSection('apply')}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-xs">
                APPLY
              </span>
            </Button>
          </div>

          {/* Mobile Menu Toggle (Placeholder) */}
          <div className="lg:hidden">
            <button className="text-white/80 font-mono text-xs tracking-widest uppercase">
              MENU
            </button>
          </div>

        </div>
      </Container>
    </motion.nav>
  );
};
