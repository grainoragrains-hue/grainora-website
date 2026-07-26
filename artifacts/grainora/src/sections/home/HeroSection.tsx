import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { MagneticButton } from '@/components/ui/MagneticButton';
import heroBg from '@assets/generated_images/hero-bg.jpg';

export function HeroSection() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Try WebGL first; fall back to canvas 2D particles if unavailable
    let cleanup: (() => void) | undefined;

    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) throw new Error('WebGL not supported');

      // Three.js setup for floating golden particles
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mountRef.current!.appendChild(renderer.domElement);

      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 200;
      const posArray = new Float32Array(particlesCount * 3);
      const sizeArray = new Float32Array(particlesCount);
      for (let i = 0; i < particlesCount * 3; i++) posArray[i] = (Math.random() - 0.5) * 15;
      for (let i = 0; i < particlesCount; i++) sizeArray[i] = Math.random() * 2;
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizeArray, 1));

      const particlesMaterial = new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 }, color: { value: new THREE.Color('#D4AF37') } },
        vertexShader: `
          attribute float size;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (30.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          void main() {
            float strength = 1.0 - distance(gl_PointCoord, vec2(0.5));
            strength = pow(strength, 3.0);
            gl_FragColor = vec4(color, strength * 0.8);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);
      camera.position.z = 3;

      let mouseX = 0, mouseY = 0;
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      const onMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX - windowHalfX) * 0.001;
        mouseY = (e.clientY - windowHalfY) * 0.001;
      };
      document.addEventListener('mousemove', onMouseMove);

      const clock = new THREE.Clock();
      let rafId: number;
      const animate = () => {
        rafId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();
        particlesMesh.rotation.y += 0.001 + 0.05 * (mouseX * 0.5 - particlesMesh.rotation.y);
        particlesMesh.rotation.x += 0.0005 + 0.05 * (mouseY * 0.5 - particlesMesh.rotation.x);
        particlesMesh.position.y = Math.sin(t * 0.5) * 0.1;
        renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      cleanup = () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('mousemove', onMouseMove);
        if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        renderer.dispose();
      };
    } catch {
      // WebGL unavailable — use a lightweight Canvas 2D particle fallback
      const canvas = document.createElement('canvas');
      canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;';
      mountRef.current!.appendChild(canvas);

      const ctx = canvas.getContext('2d')!;
      let rafId: number;
      const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
      const COUNT = 120;

      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resize();

      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.2,
        });
      }

      const draw = () => {
        rafId = requestAnimationFrame(draw);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212,175,55,${p.alpha})`;
          ctx.fill();
        }
      };
      draw();
      window.addEventListener('resize', resize);

      cleanup = () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener('resize', resize);
        if (mountRef.current && canvas.parentNode === mountRef.current) {
          mountRef.current.removeChild(canvas);
        }
      };
    }

    return () => cleanup?.();
  }, []);

  // Text splitting for animation
  const titleWords = "CREATE MORE.".split(" ");

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-primary flex items-center justify-center">
      {/* Background Image with Parallax & Gradient */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/100 via-transparent to-transparent" />
      </div>

      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-70" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6 uppercase tracking-[0.3em] text-secondary font-medium text-xs md:text-sm"
        >
          Building the Future of Food
        </motion.div>

        <h1 className="font-serif text-[15vw] md:text-[12vw] leading-[0.85] text-primary-foreground font-bold tracking-tighter mb-8 flex flex-col md:flex-row gap-4 md:gap-8 justify-center">
          {titleWords.map((word, i) => (
            <div key={i} className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.2,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  delay: 0.8 + i * 0.15
                }}
              >
                {word}
              </motion.div>
            </div>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          <MagneticButton href="/products" variant="primary">
            Explore Products
          </MagneticButton>
          <MagneticButton href="/company" variant="outline">
            Our Story
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-primary-foreground/50">Scroll</span>
        <div className="w-[1px] h-12 bg-primary-foreground/20 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-secondary absolute top-0"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
