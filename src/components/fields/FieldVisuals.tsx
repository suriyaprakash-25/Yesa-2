import React from 'react';

// Import Discipline High-Resolution Visual Assets
import agentDevImg from '../../assets/roadmap/01-agent-development.jpg';
import designImg from '../../assets/roadmap/02-design.jpg';
import productImg from '../../assets/roadmap/03-product.jpg';
import salesMarketingImg from '../../assets/roadmap/04-sales-marketing.jpg';

export const AgentDevelopmentVisual: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-52 md:h-56 rounded-2xl bg-[#090D0F] border border-white/[0.08] p-3.5 sm:p-4 flex flex-col justify-between relative overflow-hidden group shadow-inner">
      {/* High-Resolution Background Image */}
      <img
        src={agentDevImg}
        alt="YESA Agent Development Discipline"
        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
      />

      {/* Dark Vignette & Edge Shadow Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090D0F]/90 via-[#090D0F]/30 to-[#090D0F]/70 pointer-events-none" />

      {/* Top HUD */}
      <div className="flex items-center justify-between font-mono text-[10px] text-[#8A8A8A] relative z-10 px-3 py-1.5 rounded-lg bg-[#090D0F]/80 border border-white/[0.08] backdrop-blur-md">
        <span className="text-[#009D9E] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E] animate-pulse" />
          AGENT_TOPOLOGY
        </span>
        <span className="text-white/70 font-medium">DISCIPLINE 01</span>
      </div>

      {/* Bottom Status */}
      <div className="flex items-center justify-between font-mono text-[10px] text-white/80 px-3 py-1.5 rounded-lg bg-[#090D0F]/80 border border-white/[0.08] backdrop-blur-md relative z-10">
        <span className="text-[#8A8A8A]">TOPOLOGY: MULTI-AGENT</span>
        <span className="text-[#9AEDFC] font-semibold">SYSTEMS ARCHITECTURE</span>
      </div>
    </div>
  );
};

export const DesignVisual: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-52 md:h-56 rounded-2xl bg-[#090D0F] border border-white/[0.08] p-3.5 sm:p-4 flex flex-col justify-between relative overflow-hidden group shadow-inner">
      {/* High-Resolution Background Image */}
      <img
        src={designImg}
        alt="YESA Design Discipline"
        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
      />

      {/* Dark Vignette & Edge Shadow Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090D0F]/90 via-[#090D0F]/30 to-[#090D0F]/70 pointer-events-none" />

      {/* Top HUD */}
      <div className="flex items-center justify-between font-mono text-[10px] text-[#8A8A8A] relative z-10 px-3 py-1.5 rounded-lg bg-[#090D0F]/80 border border-white/[0.08] backdrop-blur-md">
        <span className="text-[#009D9E] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E] animate-pulse" />
          GRID_ARCHITECTURE
        </span>
        <span className="text-white/70 font-medium">DISCIPLINE 02</span>
      </div>

      {/* Bottom Status */}
      <div className="flex items-center justify-between font-mono text-[10px] text-white/80 px-3 py-1.5 rounded-lg bg-[#090D0F]/80 border border-white/[0.08] backdrop-blur-md relative z-10">
        <span className="text-[#8A8A8A]">CANVAS: DESIGN SYSTEMS</span>
        <span className="text-[#9AEDFC] font-semibold">INTERFACE PRECISION</span>
      </div>
    </div>
  );
};

export const ProductVisual: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-52 md:h-56 rounded-2xl bg-[#090D0F] border border-white/[0.08] p-3.5 sm:p-4 flex flex-col justify-between relative overflow-hidden group shadow-inner">
      {/* High-Resolution Background Image */}
      <img
        src={productImg}
        alt="YESA Product Discipline"
        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
      />

      {/* Dark Vignette & Edge Shadow Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090D0F]/90 via-[#090D0F]/30 to-[#090D0F]/70 pointer-events-none" />

      {/* Top HUD */}
      <div className="flex items-center justify-between font-mono text-[10px] text-[#8A8A8A] relative z-10 px-3 py-1.5 rounded-lg bg-[#090D0F]/80 border border-white/[0.08] backdrop-blur-md">
        <span className="text-[#009D9E] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E] animate-pulse" />
          ROADMAP_ORCHESTRATION
        </span>
        <span className="text-white/70 font-medium">DISCIPLINE 03</span>
      </div>

      {/* Bottom Status */}
      <div className="flex items-center justify-between font-mono text-[10px] text-white/80 px-3 py-1.5 rounded-lg bg-[#090D0F]/80 border border-white/[0.08] backdrop-blur-md relative z-10">
        <span className="text-[#8A8A8A]">ALIGNMENT: STRATEGY & ROADMAP</span>
        <span className="text-[#9AEDFC] font-semibold">END-TO-END EXECUTION</span>
      </div>
    </div>
  );
};

export const SalesMarketingVisual: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-52 md:h-56 rounded-2xl bg-[#090D0F] border border-white/[0.08] p-3.5 sm:p-4 flex flex-col justify-between relative overflow-hidden group shadow-inner">
      {/* High-Resolution Background Image */}
      <img
        src={salesMarketingImg}
        alt="YESA Sales & Marketing Discipline"
        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
      />

      {/* Dark Vignette & Edge Shadow Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090D0F]/90 via-[#090D0F]/30 to-[#090D0F]/70 pointer-events-none" />

      {/* Top HUD */}
      <div className="flex items-center justify-between font-mono text-[10px] text-[#8A8A8A] relative z-10 px-3 py-1.5 rounded-lg bg-[#090D0F]/80 border border-white/[0.08] backdrop-blur-md">
        <span className="text-[#009D9E] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E] animate-pulse" />
          DISTRIBUTION_NETWORK
        </span>
        <span className="text-white/70 font-medium">DISCIPLINE 04</span>
      </div>

      {/* Bottom Status */}
      <div className="flex items-center justify-between font-mono text-[10px] text-white/80 px-3 py-1.5 rounded-lg bg-[#090D0F]/80 border border-white/[0.08] backdrop-blur-md relative z-10">
        <span className="text-[#8A8A8A]">CHANNELS: GLOBAL DISTRIBUTION</span>
        <span className="text-[#9AEDFC] font-semibold">GROWTH PIPELINE</span>
      </div>
    </div>
  );
};

export const DisciplineVisual: React.FC<{ id: string }> = ({ id }) => {
  switch (id) {
    case 'agent-development':
      return <AgentDevelopmentVisual />;
    case 'design':
      return <DesignVisual />;
    case 'product':
      return <ProductVisual />;
    case 'sales-marketing':
      return <SalesMarketingVisual />;
    default:
      return null;
  }
};
