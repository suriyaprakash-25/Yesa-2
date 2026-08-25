import React, { useEffect, useRef } from 'react';
import type { AscentStageId } from '../../types/design-system';

interface AscentVisualizerProps {
  activeStageId: AscentStageId;
  className?: string;
}

export const AscentVisualizer: React.FC<AscentVisualizerProps> = ({
  activeStageId,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Dynamic parameters based on active stage
    const stageConfig: Record<AscentStageId, { nodeCount: number; complexity: number; glowHex: string; coreRadius: number; speed: number }> = {
      potential: { nodeCount: 6, complexity: 1.0, glowHex: '#94A3B8', coreRadius: 3, speed: 0.008 },
      observation: { nodeCount: 10, complexity: 1.5, glowHex: '#38BDF8', coreRadius: 4, speed: 0.012 },
      paid: { nodeCount: 16, complexity: 2.2, glowHex: '#34D399', coreRadius: 5, speed: 0.015 },
      experienced: { nodeCount: 22, complexity: 3.0, glowHex: '#FBBF24', coreRadius: 6, speed: 0.018 },
      leader: { nodeCount: 30, complexity: 4.0, glowHex: '#FFFFFF', coreRadius: 8, speed: 0.022 },
    };

    let time = 0;

    const render = () => {
      time += stageConfig[activeStageId].speed;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const current = stageConfig[activeStageId];

      // Draw subtle background radial gradient
      const bgGrad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, width * 0.45);
      bgGrad.addColorStop(0, 'rgba(56, 189, 248, 0.03)');
      bgGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw concentric orbital ascent rings
      const ringCount = 4;
      for (let r = 1; r <= ringCount; r++) {
        const radius = (Math.min(width, height) * 0.1) * r;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.03 * (ringCount - r + 1)})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Generate progressive nodes in mathematical ascent spiral
      const points: Array<{ x: number; y: number; alpha: number }> = [];
      const totalPoints = current.nodeCount;

      for (let i = 0; i < totalPoints; i++) {
        const angle = (i / totalPoints) * Math.PI * 2 + time * (i % 2 === 0 ? 1 : -0.7);
        const distance = 40 + (i / totalPoints) * (Math.min(width, height) * 0.38) + Math.sin(time + i) * 8;
        
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance * 0.65; // Perspective squish

        points.push({ x, y, alpha: 0.3 + (i / totalPoints) * 0.7 });
      }

      // Draw connecting crystalline lines
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120 * current.complexity * 0.45) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            const lineAlpha = (1 - dist / (120 * current.complexity * 0.45)) * 0.25;
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      points.forEach((p, idx) => {
        // Node halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, current.coreRadius * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `${current.glowHex}1A`;
        ctx.fill();

        // Node center
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1.5, current.coreRadius * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = idx === points.length - 1 ? current.glowHex : `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      });

      // Draw central focal nucleus of potential
      ctx.beginPath();
      ctx.arc(centerX, centerY, current.coreRadius * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = current.glowHex;
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.shadowBlur = 0; // reset

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeStageId]);

  return (
    <div className={`relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden bg-[#08090B]/60 border border-white/[0.06] ${className}`}>
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 grid-mesh-bg opacity-30 pointer-events-none" />
      
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Institutional Metadata HUD */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-2.5 py-1 rounded bg-[#08090B]/80 border border-white/[0.08] backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
        <span className="font-mono text-[10px] uppercase text-[#94A3B8] tracking-widest">
          ASCENT ENGINE // DYNAMIC TOPOLOGY
        </span>
      </div>

      <div className="absolute bottom-4 right-4 z-10 font-mono text-[10px] text-[#5D6673] bg-[#08090B]/80 px-2 py-0.5 rounded border border-white/[0.06]">
        60 FPS • ACCESSIBLE SHADER
      </div>
    </div>
  );
};
