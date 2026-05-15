import React, { useEffect, useRef } from 'react';

const MouseGlitter = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        
        // "The Kinetic Circuit" Palette - Tonal & Vibrant
        const colors = [
          '#006575', // Primary
          '#804797', // Secondary
          '#a93200', // Tertiary
          '#ff0000', // Pure white sparkle
          '#1a1c1e'  // On-surface micro-dot
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = 1;
        this.fadeSpeed = Math.random() * 0.02 + 0.008;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= this.fadeSpeed;
      }

      draw() {
        if (this.opacity <= 0) return;
        ctx.globalAlpha = this.opacity;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        
        // Drawing refined "circuit node" circles
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const handleMouseMove = (e) => {
      for (let i = 0; i < 4; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].opacity <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      // Limit trail length for technical elegance
      if (particles.length > 300) {
        particles.splice(0, particles.length - 300);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1000]"
      style={{ mixBlendMode: 'multiply', opacity: 0.6 }}
    />
  );
};

export default MouseGlitter;