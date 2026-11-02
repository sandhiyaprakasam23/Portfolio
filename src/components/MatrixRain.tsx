import React, { useEffect, useRef } from 'react';

interface MatrixRainProps {
  active: boolean;
  onClose: () => void;
}

export const MatrixRain: React.FC<MatrixRainProps> = ({ active, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$<>{}[]=/*+~#';
    const alphabet = katakana + latin;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const rainDrops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

    let animationId: number;

    const draw = () => {
      ctx.fillStyle = 'rgba(7, 9, 15, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        // Lead character is white/bright cyan
        if (Math.random() > 0.85) {
          ctx.fillStyle = '#FFFFFF';
        } else if (Math.random() > 0.5) {
          ctx.fillStyle = '#00E5FF';
        } else {
          ctx.fillStyle = '#00B4D8';
        }

        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-40 pointer-events-auto bg-black/60 backdrop-blur-[2px] transition-opacity duration-300">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-lg bg-black/80 border border-cyan-500/50 text-cyan-400 font-mono text-xs hover:bg-cyan-500/20 transition-colors shadow-lg"
        >
          [ESC / Exit Matrix Mode]
        </button>
      </div>
    </div>
  );
};
