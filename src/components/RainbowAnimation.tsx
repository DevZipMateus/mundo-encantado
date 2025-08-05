
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface RainbowAnimationProps {
  targetSelector?: string;
}

const RainbowAnimation = ({ targetSelector = '.rainbow-container' }: RainbowAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let renderer: THREE.WebGLRenderer;
    let animationFrameId: number;
    let scene: THREE.Scene, camera: THREE.PerspectiveCamera;
    const fallingEmojis: THREE.Mesh[] = [];

    const targetElement = containerRef.current;

    const createEmojiTexture = (emoji: string) => {
      const canvas = document.createElement('canvas');
      const size = 128;
      canvas.width = size;
      canvas.height = size;
      const context = canvas.getContext('2d');
      if (context) {
        context.font = `bold ${size * 0.8}px sans-serif`;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(emoji, size / 2, size / 2 + size * 0.08);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const init = () => {
      const canvas = document.createElement('canvas');
      targetElement.appendChild(canvas);
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.zIndex = '1';

      renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        antialias: true, 
        alpha: true 
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(targetElement.offsetWidth, targetElement.offsetHeight);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, targetElement.offsetWidth / targetElement.offsetHeight, 0.1, 1000);
      camera.position.z = 20;
      
      const emojiTexture = createEmojiTexture('🌈');
      const emojiMaterial = new THREE.MeshBasicMaterial({ map: emojiTexture, transparent: true });
      const emojiGeometry = new THREE.PlaneGeometry(1.5, 1.5);
      const emojiCount = 40;

      for (let i = 0; i < emojiCount; i++) {
        const emojiMesh = new THREE.Mesh(emojiGeometry, emojiMaterial);
        emojiMesh.position.set((Math.random() - 0.5) * 50, (Math.random() + 0.5) * 40, (Math.random() - 0.5) * 15);
        emojiMesh.userData = {
          velocityY: (Math.random() * 0.03) + 0.02,
          rotationSpeed: (Math.random() - 0.5) * 0.02
        };
        scene.add(emojiMesh);
        fallingEmojis.push(emojiMesh);
      }

      animate();
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      fallingEmojis.forEach(obj => {
        obj.position.y -= obj.userData.velocityY;
        obj.rotation.z += obj.userData.rotationSpeed;
        if (obj.position.y < -25) {
          obj.position.y = 25;
          obj.position.x = (Math.random() - 0.5) * 50;
        }
      });

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      const width = targetElement.offsetWidth;
      const height = targetElement.offsetHeight;
      if (camera) {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
      if (renderer) {
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }
    };

    init();
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', handleResize);
      if (renderer) {
        renderer.dispose();
      }
      if (targetElement.querySelector('canvas')) {
        targetElement.removeChild(targetElement.querySelector('canvas')!);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="rainbow-container absolute inset-0 w-full h-full"
    />
  );
};

export default RainbowAnimation;
