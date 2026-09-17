import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { canRender3DScene } from '../../utils/webglSupport';
import { FallbackCenterpiece } from './FallbackCenterpiece';

export const HeroScene3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [useFallback, setUseFallback] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!canRender3DScene() || !mountRef.current) {
      setUseFallback(true);
      return;
    }

    const container = mountRef.current;
    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;

    try {
      // Setup Scene, Camera, Renderer
      const scene = new THREE.Scene();
      const width = container.clientWidth || 500;
      const height = container.clientHeight || 500;

      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.z = 7;

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Ambient & Directional Lights
      const ambientLight = new THREE.AmbientLight(0x0f1422, 2.5);
      scene.add(ambientLight);

      const cyanPointLight = new THREE.PointLight(0x00f2fe, 3.5, 20);
      cyanPointLight.position.set(4, 3, 5);
      scene.add(cyanPointLight);

      const violetPointLight = new THREE.PointLight(0x8a2be2, 3, 20);
      violetPointLight.position.set(-4, -3, 3);
      scene.add(violetPointLight);

      // Primary 3D Group
      const mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // 1. Procedural Glass-like Icosahedron
      const geoIcosahedron = new THREE.IcosahedronGeometry(1.6, 0);
      const matGlass = new THREE.MeshPhysicalMaterial({
        color: 0x0a1020,
        metalness: 0.1,
        roughness: 0.15,
        transmission: 0.9,
        thickness: 1.2,
        reflectivity: 0.9,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        wireframe: false,
      });
      const glassMesh = new THREE.Mesh(geoIcosahedron, matGlass);
      mainGroup.add(glassMesh);

      // 2. Neon Wireframe Outer Cage
      const wireframeGeo = new THREE.IcosahedronGeometry(1.62, 0);
      const wireframeMat = new THREE.MeshBasicMaterial({
        color: 0x00f2fe,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      });
      const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
      mainGroup.add(wireframeMesh);

      // 3. Glowing Inner Core (Energy Node)
      const coreGeo = new THREE.OctahedronGeometry(0.7, 0);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0x8a2be2,
        emissive: 0x6d28d9,
        emissiveIntensity: 1.8,
        roughness: 0.2,
        metalness: 0.8
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      mainGroup.add(coreMesh);

      // 4. Orbital Tech Rings
      const ringGeo = new THREE.TorusGeometry(2.4, 0.02, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.4
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 3;
      mainGroup.add(ringMesh);

      const ringGeo2 = new THREE.TorusGeometry(2.7, 0.015, 16, 100);
      const ringMat2 = new THREE.MeshBasicMaterial({
        color: 0xa855f7,
        transparent: true,
        opacity: 0.3
      });
      const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
      ringMesh2.rotation.y = Math.PI / 4;
      mainGroup.add(ringMesh2);

      // Floating particles
      const particleCount = 45;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 8;
        positions[i + 1] = (Math.random() - 0.5) * 8;
        positions[i + 2] = (Math.random() - 0.5) * 6;
      }
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0x00f2fe,
        size: 0.04,
        transparent: true,
        opacity: 0.6
      });
      const particlePoints = new THREE.Points(particleGeo, particleMat);
      scene.add(particlePoints);

      setIsLoaded(true);

      // Mouse Parallax Interaction State
      let targetRotX = 0;
      let targetRotY = 0;
      let currentRotX = 0;
      let currentRotY = 0;

      const handlePointerMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        targetRotY = x * 0.8;
        targetRotX = y * 0.8;
      };

      window.addEventListener('mousemove', handlePointerMove);

      // Responsive Resize
      const handleResize = () => {
        if (!container) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener('resize', handleResize);

      // Animation Loop
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Smooth damping interpolation
        currentRotX += (targetRotX - currentRotX) * 0.05;
        currentRotY += (targetRotY - currentRotY) * 0.05;

        mainGroup.rotation.x = currentRotX + Math.sin(elapsedTime * 0.5) * 0.15;
        mainGroup.rotation.y = currentRotY + elapsedTime * 0.35;

        coreMesh.rotation.y = -elapsedTime * 0.7;
        coreMesh.rotation.z = elapsedTime * 0.5;

        ringMesh.rotation.z = elapsedTime * 0.2;
        ringMesh2.rotation.x = elapsedTime * 0.15;

        particlePoints.rotation.y = elapsedTime * 0.05;

        // Subtle floating bounce
        mainGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.15;

        renderer.render(scene, camera);
      };

      animate();

      // Cleanup on unmount
      return () => {
        window.removeEventListener('mousemove', handlePointerMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        }
        geoIcosahedron.dispose();
        matGlass.dispose();
        wireframeGeo.dispose();
        wireframeMat.dispose();
        coreGeo.dispose();
        coreMat.dispose();
        ringGeo.dispose();
        ringMat.dispose();
        ringGeo2.dispose();
        ringMat2.dispose();
        particleGeo.dispose();
        particleMat.dispose();
      };
    } catch (err) {
      console.warn("WebGL initialization note: Switching gracefully to high-performance CSS centerpiece fallback.", err);
      setUseFallback(true);
    }
  }, []);

  if (useFallback) {
    return <FallbackCenterpiece />;
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[520px] flex items-center justify-center">
      {/* Loading state indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-neon-cyan/20 border-t-neon-cyan animate-spin" />
        </div>
      )}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing" 
        style={{ touchAction: 'pan-y' }}
        aria-label="Interactive 3D Geometric Centerpiece"
      />
      
      {/* Floating 3D HUD Badges */}
      <div className="absolute -bottom-2 sm:bottom-4 left-4 right-4 sm:left-auto sm:right-6 pointer-events-none flex items-center justify-between sm:justify-end gap-3">
        <div className="px-3 py-1.5 rounded-full bg-dark-900/80 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-400 flex items-center gap-2 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
          <span>Three.js Engine</span>
        </div>
        <div className="px-3 py-1.5 rounded-full bg-dark-900/80 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-400">
          Interactive Parallax
        </div>
      </div>
    </div>
  );
};
