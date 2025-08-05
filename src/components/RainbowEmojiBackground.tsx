
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const RainbowEmojiBackground = () => {
  const mountRef = useRef<HTMLCanvasElement>(null);
  const backgroundMaterialRef = useRef<THREE.ShaderMaterial>();

  useEffect(() => {
    let renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera;
    let animationFrameId: number;
    const fallingEmojis: THREE.Mesh[] = [];

    // --- 1. Shader para o Fundo Gradiente Animado ---
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
    
    // --- 2. Função para criar uma textura a partir de um Emoji ---
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
      if (!mountRef.current) return;
      
      const canvas = mountRef.current;
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 20;

      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // --- Configuração do Fundo com Shader ---
      const backgroundGeometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);
      backgroundMaterialRef.current = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          u_time: { value: 0.0 },
        },
        depthWrite: false,
      });

      const backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterialRef.current);
      backgroundMesh.position.z = -1;
      scene.add(backgroundMesh);
      
      // --- Criação dos Emojis Caindo ---
      const emojiTexture = createEmojiTexture('🌈');
      const emojiMaterial = new THREE.MeshBasicMaterial({
        map: emojiTexture,
        transparent: true,
      });
      const emojiGeometry = new THREE.PlaneGeometry(1.5, 1.5);
      const emojiCount = 40;

      for (let i = 0; i < emojiCount; i++) {
        const emojiMesh = new THREE.Mesh(emojiGeometry, emojiMaterial);
        
        emojiMesh.position.set(
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 15
        );
        
        emojiMesh.rotation.z = (Math.random() - 0.5) * Math.PI;
        emojiMesh.userData.velocityY = (Math.random() * 0.03) + 0.02;
        emojiMesh.userData.rotationSpeed = (Math.random() - 0.5) * 0.02;

        scene.add(emojiMesh);
        fallingEmojis.push(emojiMesh);
      }

      animate();
    };

    const animate = () => {
      const elapsedTime = performance.now() * 0.001;
      
      // Atualiza o tempo no shader do fundo para animar o gradiente
      if (backgroundMaterialRef.current) {
        backgroundMaterialRef.current.uniforms.u_time.value = elapsedTime;
      }
      
      // Anima cada emoji
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
      if (!camera || !renderer) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const bg = scene.children.find(child => child.material === backgroundMaterialRef.current);
      if (bg) {
        bg.scale.set(width, height, 1);
      }
    };

    init();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return <canvas ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default RainbowEmojiBackground;
