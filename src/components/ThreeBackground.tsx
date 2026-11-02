import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  reducedMotion?: boolean;
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ reducedMotion = false }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07090F, 0.0016);

    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 6, 32);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Particle Constellation (Cyan, Violet, Silver stars)
    const particleCount = window.innerWidth < 768 ? 700 : 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x00E5FF);
    const colorViolet = new THREE.Color(0x8957FF);
    const colorSilver = new THREE.Color(0xDCE4F0);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 140;
      positions[i3 + 1] = (Math.random() - 0.5) * 90;
      positions[i3 + 2] = (Math.random() - 0.5) * 90;

      const mixed = Math.random();
      const chosenColor = mixed < 0.45 ? colorCyan : mixed < 0.8 ? colorViolet : colorSilver;
      colors[i3] = chosenColor.r;
      colors[i3 + 1] = chosenColor.g;
      colors[i3 + 2] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture canvas
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(0, 229, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.95,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // ==========================================
    // IMAGE 1 REFERENCE: PLANETARY SPHERE WITH RING
    // ==========================================
    const planetGroup = new THREE.Group();
    planetGroup.position.set(-28, 16, -20);
    scene.add(planetGroup);

    // Planet Sphere (Deep indigo violet with wireframe aura)
    const planetGeo = new THREE.SphereGeometry(6, 32, 32);
    const planetMat = new THREE.MeshBasicMaterial({
      color: 0x1a1238,
      wireframe: false,
      transparent: true,
      opacity: 0.85,
    });
    const planetMesh = new THREE.Mesh(planetGeo, planetMat);
    planetGroup.add(planetMesh);

    // Planet Wireframe Glow Overlay
    const planetWireMat = new THREE.MeshBasicMaterial({
      color: 0x8957FF,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const planetWireMesh = new THREE.Mesh(planetGeo, planetWireMat);
    planetGroup.add(planetWireMesh);

    // Planet Ring (Cyan / Violet glowing ring like Saturn in Image 1)
    const ringGeo = new THREE.RingGeometry(8, 11, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00E5FF,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.5;
    ringMesh.rotation.y = Math.PI / 8;
    planetGroup.add(ringMesh);

    // ==========================================
    // FLOATING 3D ISOMETRIC NEON CUBES (Image 1 style)
    // ==========================================
    const cubesGroup = new THREE.Group();
    scene.add(cubesGroup);

    const cubeGeo = new THREE.BoxGeometry(2, 2, 2);
    const cubeMatCyan = new THREE.MeshBasicMaterial({
      color: 0x00E5FF,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const cubeMatViolet = new THREE.MeshBasicMaterial({
      color: 0x8957FF,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });

    const cube1 = new THREE.Mesh(cubeGeo, cubeMatCyan);
    cube1.position.set(22, 14, -12);
    cubesGroup.add(cube1);

    const cube2 = new THREE.Mesh(cubeGeo, cubeMatViolet);
    cube2.position.set(26, -6, -10);
    cubesGroup.add(cube2);

    const cube3 = new THREE.Mesh(cubeGeo, cubeMatCyan);
    cube3.position.set(-22, -10, -8);
    cubesGroup.add(cube3);

    // Cyber Horizon Grid Plane
    const gridHelper = new THREE.GridHelper(160, 50, 0x00E5FF, 0x141f3d);
    gridHelper.position.y = -15;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.25;
    scene.add(gridHelper);

    // Mouse Parallax Interaction
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow (lerp)
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      camera.position.x = currentMouseX * 3.5;
      camera.position.y = 6 - currentMouseY * 3;
      camera.lookAt(0, 0, 0);

      if (!reducedMotion) {
        // Slow majestic rotation
        particles.rotation.y = elapsedTime * 0.02;
        particles.rotation.x = elapsedTime * 0.008;

        // Planet slow axial rotation
        planetGroup.rotation.y += delta * 0.08;
        planetWireMesh.rotation.y += delta * 0.12;

        // Floating cubes rotation and bobbing
        cube1.rotation.x += delta * 0.3;
        cube1.rotation.y += delta * 0.4;
        cube1.position.y = 14 + Math.sin(elapsedTime * 1.5) * 0.8;

        cube2.rotation.x -= delta * 0.25;
        cube2.rotation.z += delta * 0.35;
        cube2.position.y = -6 + Math.cos(elapsedTime * 1.2) * 0.8;

        cube3.rotation.y += delta * 0.3;
        cube3.position.y = -10 + Math.sin(elapsedTime * 1.8) * 0.6;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      planetGeo.dispose();
      planetMat.dispose();
      planetWireMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      cubeGeo.dispose();
      cubeMatCyan.dispose();
      cubeMatViolet.dispose();
      renderer.dispose();
    };
  }, [reducedMotion]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
};
