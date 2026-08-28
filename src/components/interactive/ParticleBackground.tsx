"use client";

import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isVisible = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const initCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      const isMobile = width < 768;
      const particleCount = isMobile ? 18 : 35;
      
      particles = Array.from({ length: particleCount }).map(() => new Particle(width, height));
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseOpacity: number;
      color: string;
      pulseRate: number;
      time: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 2 + 1;
        this.baseOpacity = Math.random() * 0.4 + 0.1;
        this.color = Math.random() > 0.5 ? '255, 255, 255' : '59, 130, 246'; // white or blue
        this.pulseRate = Math.random() * 0.02 + 0.01;
        this.time = Math.random() * Math.PI * 2;
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;
        
        this.time += this.pulseRate;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const opacity = this.baseOpacity + Math.sin(this.time) * 0.1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${Math.max(0.1, opacity)})`;
        ctx.fill();
      }
    }

    const animate = () => {
      if (!isVisible.current) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
        p.update(width, height);
        p.draw(ctx);
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    initCanvas();
    animate();

    const handleResize = () => initCanvas();
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver((entries) => {
      isVisible.current = entries[0].isIntersecting;
    });
    observer.observe(canvas);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
      aria-hidden="true"
    />
  );
}
