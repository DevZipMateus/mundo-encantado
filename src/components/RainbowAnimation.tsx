
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
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let animationFrameId: number;
    const fallingEmojis: THREE.Mesh[] = [];

    const targetElement = containerRef.current;

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      uniform float u_time;
      vec3 palette( float t, vec3 a, vec3 b, vec3 c, vec3 d ) {
        return a + b*cos( 6.28318*(c*t+d) );
      }
      void main() {
        vec3 finalColor = palette(vUv.y + u_time * 0.1, vec3(0.5), vec3(0.5), vec3(1.0), vec3(0.0, 0.33, 0.67));
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

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
        context.fillText(emoji, size / 2, size / 2);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, targetElement.offsetWidth / targetElement.offsetHeight, 0.1, 1000);
      camera.position.z = 20;

      const canvas = document.createElement('canvas');
      targetElement.appendChild(canvas);
      
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.zIndex = '0';

      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
      renderer.setSize(targetElement.offsetWidth, targetElement.offsetHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Background
      const backgroundMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: { u_time: { value: 0.0 } },
        depthWrite: false,
      });
      const backgroundGeometry = new THREE.PlaneGeometry(2, 2);
      const backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
      backgroundMesh.position.z = -1;
      scene.add(backgroundMesh);
      
      // Emojis
      const emojiTexture = createEmojiTexture('🌈');
      const emojiMaterial = new THREE.MeshBasicMaterial({ map: emojiTexture, transparent: true });
      const emojiGeometry = new THREE.PlaneGeometry(1.5, 1.5);
      const emojiCount = 40;

      for (let i = 0; i < emojiCount; i++) {
        const emojiMesh = new THREE.Mesh(emojiGeometry, emojiMaterial);
        emojiMesh.position.set((Math.random() - 0.5) * 50, (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 15);
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
      const elapsedTime = performance.now() * 0.0001;
      if (scene.children[0] && 'material' in scene.children[0] && scene.children[0].material instanceof THREE.ShaderMaterial) {
        scene.children[0].material.uniforms.u_time.value = elapsedTime;
      }
      
      fallingEmojis.forEach(obj => {
        obj.position.y -= obj.userData.velocityY;
        obj.rotation.z += obj.userData.rotationSpeed;
        if (obj.position.y < -25) {
          obj.position.y = 25;
          obj.position.x = (Math.random() - 0.5) * 50;
        }
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      const width = targetElement.offsetWidth;
      const height = targetElement.offsetHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
