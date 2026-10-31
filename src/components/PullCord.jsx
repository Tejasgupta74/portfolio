import { useEffect, useRef, useState } from 'react';

export default function PullCord() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 120;
    let height = 260;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const N = 20;
    const totalLength = 160;
    const segLen = totalLength / N;
    const anchorX = 60;
    const anchorY = 0;

    let points = [];
    for (let i = 0; i <= N; i++) {
      points.push({
        x: anchorX,
        y: anchorY + i * segLen,
        oldX: anchorX,
        oldY: anchorY + i * segLen,
        pinned: i === 0,
      });
    }

    let isDragging = false;
    let dragY = 0;
    let animationFrameId;

    const updatePhysics = () => {
      const gravity = 0.45;
      const friction = 0.985;

      // Verlet Integration
      for (let i = 1; i <= N; i++) {
        const p = points[i];
        if (i === N && isDragging) {
          p.x = anchorX;
          p.y = Math.max(anchorY + totalLength, Math.min(anchorY + totalLength + 60, dragY));
          p.oldX = p.x;
          p.oldY = p.y;
          continue;
        }

        const vx = (p.x - p.oldX) * friction;
        const vy = (p.y - p.oldY) * friction;

        p.oldX = p.x;
        p.oldY = p.y;

        p.x += vx;
        p.y += vy + gravity;
      }

      // Constraints
      for (let iter = 0; iter < 12; iter++) {
        for (let i = 0; i < N; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];

          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.hypot(dx, dy) || 1;
          const diff = (dist - segLen) / dist;

          if (!p1.pinned) {
            p1.x += dx * 0.5 * diff;
            p1.y += dy * 0.5 * diff;
          }
          if (!(i + 1 === N && isDragging)) {
            p2.x -= dx * 0.5 * diff;
            p2.y -= dy * 0.5 * diff;
          }
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      // Draw Rope
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i <= N; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.strokeStyle = '#00E5A0';
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.shadowColor = 'rgba(0, 229, 160, 0.5)';
      ctx.shadowBlur = 8;
      ctx.stroke();

      // Draw Bell / Acorn Knob at the end of the cord
      const end = points[N];
      ctx.fillStyle = '#00E5A0';
      ctx.beginPath();
      ctx.arc(end.x, end.y, 6.5, 0, Math.PI * 2);
      ctx.fill();

      // Inner knob core
      ctx.fillStyle = '#0A0B0E';
      ctx.beginPath();
      ctx.arc(end.x, end.y, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const loop = () => {
      updatePhysics();
      draw();
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    const onPointerDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientY = e.clientY - rect.top;
      const end = points[N];
      if (Math.abs(clientY - end.y) < 35) {
        isDragging = true;
        dragY = clientY;
      }
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const rect = canvas.getBoundingClientRect();
      dragY = e.clientY - rect.top;

      // Click trigger when pulled past threshold
      if (dragY > anchorY + totalLength + 38 && !clicked) {
        setClicked(true);
        // Toggle theme / glow effect
        document.documentElement.classList.toggle('neon-glow');
        setTimeout(() => setClicked(false), 800);
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointerdown', onPointerDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      if (canvas) canvas.removeEventListener('pointerdown', onPointerDown);
    };
  }, [clicked]);

  const handleTug = () => {
    document.documentElement.classList.toggle('neon-glow');
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
  };

  return (
    <div
      ref={containerRef}
      className="fixed top-0 right-4 sm:right-16 z-50 pointer-events-auto flex flex-col items-center"
      title="Pull cord (toggles neon glow)"
    >
      <canvas ref={canvasRef} className="cursor-grab active:cursor-grabbing" />
      <button
        onClick={handleTug}
        aria-label="Tug the cord"
        className="sr-only"
      >
        Tug the cord
      </button>
    </div>
  );
}
