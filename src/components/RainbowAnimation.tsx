
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface RainbowAnimationProps {
  targetSelector?: string;
}

const RainbowAnimation = ({ targetSelector = '.rainbow-container' }: RainbowAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Variáveis Globais
    let renderer: THREE.WebGLRenderer;
    let animationFrameId: number;
    let sceneBG: THREE.Scene, cameraBG: THREE.OrthographicCamera; // Para o fundo 2D
    let sceneFG: THREE.Scene, cameraFG: THREE.PerspectiveCamera; // Para os emojis 3D (Foreground)
    const fallingEmojis: THREE.Mesh[] = [];

    const targetElement = containerRef.current;

    // --- Shader para o Fundo Gradiente ---
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      uniform float u_time;
      vec3 palette( float t, vec3 a, vec3 b, vec3 c, vec3 d ) {
        return a + b*cos( 6.28318*(c*t+d) );
      }
      void main() {
        vec2 uv = vUv;
        vec3 finalColor = palette(uv.y + u_time * 0.2, vec3(0.5), vec3(0.5), vec3(1.0), vec3(0.00, 0.10, 0.20));
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;
    
    // --- Função do Emoji ---
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
        context.fillText(emoji, size / 2, size / 2 + size * 0.08); // Ajuste fino vertical
      }
      return new THREE.CanvasTexture(canvas);
    };

    const init = () => {
      // --- Configuração principal ---
      const canvas = document.createElement('canvas');
      targetElement.appendChild(canvas);
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.zIndex = '0';

      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(targetElement.offsetWidth, targetElement.offsetHeight);

      // --- CENA 1: Fundo com Câmera Ortográfica ---
      sceneBG = new THREE.Scene();
      cameraBG = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const backgroundMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: { u_time: { value: 0.0 } },
      });
      const backgroundMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), backgroundMaterial);
      sceneBG.add(backgroundMesh);

      // --- CENA 2: Emojis com Câmera de Perspectiva ---
      sceneFG = new THREE.Scene();
      cameraFG = new THREE.PerspectiveCamera(75, targetElement.offsetWidth / targetElement.offsetHeight, 0.1, 1000);
      cameraFG.position.z = 20;
      
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
        sceneFG.add(emojiMesh);
        fallingEmojis.push(emojiMesh);
      }

      animate();
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = performance.now() * 0.0001;
      
      // Anima o fundo
      if (sceneBG.children[0] && 'material' in sceneBG.children[0] && sceneBG.children[0].material instanceof THREE.ShaderMaterial) {
        sceneBG.children[0].material.uniforms.u_time.value = elapsedTime;
      }
      
      // Anima os emojis
      fallingEmojis.forEach(obj => {
        obj.position.y -= obj.userData.velocityY;
        obj.rotation.z += obj.userData.rotationSpeed;
        if (obj.position.y < -25) {
          obj.position.y = 25;
          obj.position.x = (Math.random() - 0.5) * 50;
        }
      });

      // Renderiza as duas cenas
      renderer.autoClear = false; // Importante: não limpa a tela entre os renders
      renderer.clear();
      
      // Renderiza o fundo primeiro
      renderer.render(sceneBG, cameraBG);
      
      // Renderiza os emojis por cima
      renderer.clearDepth(); // Limpa apenas o buffer de profundidade
      renderer.render(sceneFG, cameraFG);
    };

    const handleResize = () => {
      const width = targetElement.offsetWidth;
      const height = targetElement.offsetHeight;
      if (cameraFG) {
        cameraFG.aspect = width / height;
        cameraFG.updateProjectionMatrix();
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
