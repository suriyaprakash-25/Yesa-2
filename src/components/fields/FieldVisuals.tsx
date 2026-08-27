import React from 'react';

export const AgentDevelopmentVisual: React.FC = () => {
  return (
    <div className="w-full h-44 rounded-2xl bg-white/[0.02] border border-white/[0.06] p-4 flex flex-col justify-between relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,157,158,0.12),transparent_70%)] pointer-events-none" />

      {/* Top HUD */}
      <div className="flex items-center justify-between font-mono text-[9px] text-[#8A8A8A] relative z-10">
        <span className="text-[#009D9E] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E] animate-pulse" />
          AGENT_CORE_ROUTING
        </span>
        <span>LATENCY: 12ms</span>
      </div>

      {/* Node Topology */}
      <div className="relative py-2 flex items-center justify-center">
        <svg viewBox="0 0 260 70" className="w-full h-16" fill="none">
          {/* Connecting Vectors */}
          <path
            d="M30,35 L90,18 L170,18 L230,35 M90,18 L130,52 L170,18 M30,35 L130,52 L230,35"
            stroke="#009D9E"
            strokeWidth="1.25"
            strokeOpacity="0.4"
          />
          {/* Animated data pulses */}
          <circle cx="90" cy="18" r="3" fill="#9AEDFC" />
          <circle cx="170" cy="18" r="3" fill="#9AEDFC" />
          <circle cx="130" cy="52" r="3.5" fill="#009D9E" />
          <circle cx="30" cy="35" r="4" fill="#090D0F" stroke="#009D9E" strokeWidth="2" />
          <circle cx="230" cy="35" r="4" fill="#090D0F" stroke="#009D9E" strokeWidth="2" />
        </svg>
      </div>

      {/* Bottom Status */}
      <div className="flex items-center justify-between font-mono text-[9px] text-white/50 pt-2 border-t border-white/[0.04] relative z-10">
        <span>TOPOLOGY: MULTI-AGENT</span>
        <span className="text-[#9AEDFC]">AUTONOMOUS PIPELINE</span>
      </div>
    </div>
  );
};

export const DesignVisual: React.FC = () => {
  return (
    <div className="w-full h-44 rounded-2xl bg-white/[0.02] border border-white/[0.06] p-4 flex flex-col justify-between relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,157,158,0.12),transparent_70%)] pointer-events-none" />

      {/* Top HUD */}
      <div className="flex items-center justify-between font-mono text-[9px] text-[#8A8A8A] relative z-10">
        <span className="text-[#009D9E] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E] animate-pulse" />
          GRID_SYSTEM_PRECISION
        </span>
        <span>RATIO: 1.618</span>
      </div>

      {/* Geometric Design Matrix */}
      <div className="relative py-2 flex items-center justify-center">
        <svg viewBox="0 0 240 70" className="w-full h-16" fill="none">
          {/* Design Layout Axis */}
          <rect x="20" y="10" width="80" height="50" rx="4" stroke="#009D9E" strokeWidth="1.25" strokeOpacity="0.4" />
          <rect x="110" y="10" width="50" height="50" rx="4" stroke="#9AEDFC" strokeWidth="1.25" strokeOpacity="0.6" />
          <rect x="170" y="10" width="50" height="22" rx="4" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
          <rect x="170" y="38" width="50" height="22" rx="4" stroke="#009D9E" strokeWidth="1" strokeOpacity="0.5" />
          {/* Alignment guide lines */}
          <line x1="10" y1="35" x2="230" y2="35" stroke="#009D9E" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.3" />
        </svg>
      </div>

      {/* Bottom Status */}
      <div className="flex items-center justify-between font-mono text-[9px] text-white/50 pt-2 border-t border-white/[0.04] relative z-10">
        <span>CANVAS: TOKENS & SYSTEM</span>
        <span className="text-[#9AEDFC]">PIXEL ALIGNED</span>
      </div>
    </div>
  );
};

export const ProductVisual: React.FC = () => {
  return (
    <div className="w-full h-44 rounded-2xl bg-white/[0.02] border border-white/[0.06] p-4 flex flex-col justify-between relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,157,158,0.12),transparent_70%)] pointer-events-none" />

      {/* Top HUD */}
      <div className="flex items-center justify-between font-mono text-[9px] text-[#8A8A8A] relative z-10">
        <span className="text-[#009D9E] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E] animate-pulse" />
          ROADMAP_ORCHESTRATION
        </span>
        <span>SPRINT: 04/12</span>
      </div>

      {/* Product Module Pipeline */}
      <div className="relative py-2 flex items-center justify-center">
        <div className="flex items-center gap-2.5 w-full max-w-[220px]">
          <div className="flex-1 p-2 rounded-lg bg-white/[0.03] border border-[#009D9E]/40 text-center">
            <span className="font-mono text-[8px] text-[#8A8A8A] block">DISCOVERY</span>
            <span className="font-mono text-[9px] text-white font-semibold">Specs</span>
          </div>
          <span className="text-[#009D9E] text-xs font-mono">→</span>
          <div className="flex-1 p-2 rounded-lg bg-[#009D9E]/10 border border-[#009D9E] text-center shadow-[0_0_10px_rgba(0,157,158,0.3)]">
            <span className="font-mono text-[8px] text-[#9AEDFC] block">EXECUTE</span>
            <span className="font-mono text-[9px] text-white font-bold">Build</span>
          </div>
          <span className="text-[#009D9E] text-xs font-mono">→</span>
          <div className="flex-1 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center">
            <span className="font-mono text-[8px] text-[#8A8A8A] block">SCALE</span>
            <span className="font-mono text-[9px] text-white">Impact</span>
          </div>
        </div>
      </div>

      {/* Bottom Status */}
      <div className="flex items-center justify-between font-mono text-[9px] text-white/50 pt-2 border-t border-white/[0.04] relative z-10">
        <span>ALIGNMENT: STRATEGY & CODE</span>
        <span className="text-[#9AEDFC]">CONTINUOUS DEPLOY</span>
      </div>
    </div>
  );
};

export const SalesMarketingVisual: React.FC = () => {
  return (
    <div className="w-full h-44 rounded-2xl bg-white/[0.02] border border-white/[0.06] p-4 flex flex-col justify-between relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(0,157,158,0.12),transparent_70%)] pointer-events-none" />

      {/* Top HUD */}
      <div className="flex items-center justify-between font-mono text-[9px] text-[#8A8A8A] relative z-10">
        <span className="text-[#009D9E] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E] animate-pulse" />
          NETWORK_DISTRIBUTION
        </span>
        <span>VELOCITY: 4.8x</span>
      </div>

      {/* Growth & Distribution Vectors */}
      <div className="relative py-2 flex items-center justify-center">
        <svg viewBox="0 0 240 70" className="w-full h-16" fill="none">
          {/* Radial Growth Rays */}
          <path
            d="M20,55 Q80,50 120,35 T220,12"
            stroke="#009D9E"
            strokeWidth="1.75"
          />
          <path
            d="M20,55 Q70,40 140,25 T220,28"
            stroke="#9AEDFC"
            strokeWidth="1.25"
            strokeDasharray="3 3"
          />
          <circle cx="220" cy="12" r="3.5" fill="#9AEDFC" />
          <circle cx="120" cy="35" r="2.5" fill="#009D9E" />
          <circle cx="20" cy="55" r="3" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Bottom Status */}
      <div className="flex items-center justify-between font-mono text-[9px] text-white/50 pt-2 border-t border-white/[0.04] relative z-10">
        <span>CHANNELS: ENTERPRISE & GLOBAL</span>
        <span className="text-[#9AEDFC]">VERIFIED EXPANSION</span>
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
