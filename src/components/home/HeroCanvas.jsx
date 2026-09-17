import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Particles = () => {
  const particlesRef = useRef();
  
  // Create a memoized array of positions to avoid recreation on every render
  const particlesCount = 800;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#3B7B84" transparent opacity={0.6} />
    </points>
  );
};

export const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 bg-[#08080C] overflow-hidden">
      {/* Animated Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-strydo-purple/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-strydo-teal/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s' }} />
      
      <Canvas camera={{ position: [0, 0, 3] }}>
        <Particles />
      </Canvas>
    </div>
  );
};
