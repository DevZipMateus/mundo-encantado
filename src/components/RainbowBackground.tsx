
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const RainbowBackground = () => {
  const mountRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera;
    let animationFrameId: number;
    const fallingObjects: THREE.Mesh[] = [];
    let backgroundMesh: THREE.Mesh;

    // --- Shader para o Fundo Gradiente Animado ---
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
      // Função do Inigo Quilez para criar uma paleta de cores de arco-íris
      vec3 palette( float t, vec3 a, vec3 b, vec3 c, vec3 d ) {
        return a + b*cos( 6.28318*(c*t+d) );
      }
      void main() {
        vec2 uv = vUv;
        vec3 colorA = vec3(0.5, 0.5, 0.5);
        vec3 colorB = vec3(0.5, 0.5, 0.5);
        vec3 colorC = vec3(1.0, 1.0, 1.0);
        vec3 colorD = vec3(0.00, 0.33, 0.67);
        
        // Anima o gradiente com base no tempo e na posição do pixel
        vec3 finalColor = palette(uv.y + u_time * 0.1, colorA, colorB, colorC, colorD);
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;
    // ---------------------------------------------

    const init = () => {
      if (!mountRef.current) return;
      
      const canvas = mountRef.current;
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 15;

      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // 1. Criar o fundo com o Shader
      const backgroundGeometry = new THREE.PlaneGeometry(2, 2); // Um plano que preenche a tela
      const backgroundMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          u_time: { value: 0.0 },
        },
        depthWrite: false, // Para garantir que fique sempre no fundo
      });

      backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
      backgroundMesh.position.z = -1; // Coloca um pouco atrás do centro da cena
      scene.add(backgroundMesh);

      // 2. Carregar a textura do arco-íris (da sua imagem)
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(
        '/rainbow.png', // Caminho para a imagem na pasta 'public'
        (texture) => {
          const rainbowMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true, // Habilita transparência (para o fundo da imagem PNG)
          });
          
          // A imagem tem proporção ~1:1, então a geometria pode ser um quadrado
          const rainbowGeometry = new THREE.PlaneGeometry(3, 3);
          const rainbowCount = 30;

          for (let i = 0; i < rainbowCount; i++) {
            const rainbowMesh = new THREE.Mesh(rainbowGeometry, rainbowMaterial);
            
            rainbowMesh.position.set(
              (Math.random() - 0.5) * 40, // Posição X
              (Math.random() - 0.5) * 40, // Posição Y inicial
              (Math.random() - 0.5) * 10  // Profundidade Z
            );
            
            rainbowMesh.rotation.z = (Math.random() - 0.5) * 0.5;
            rainbowMesh.userData.velocityY = (Math.random() * 0.03) + 0.02;

            scene.add(rainbowMesh);
            fallingObjects.push(rainbowMesh);
          }
        },
        undefined,
        (error) => {
          console.warn('Failed to load rainbow texture:', error);
        }
      );

      animate();
    };

    const animate = () => {
      const elapsedTime = performance.now() * 0.001;
      
      // Atualiza o tempo no shader do fundo para animar o gradiente
      if (backgroundMesh && backgroundMesh.material instanceof THREE.ShaderMaterial) {
        backgroundMesh.material.uniforms.u_time.value = elapsedTime;
      }
      
      fallingObjects.forEach(obj => {
        obj.position.y -= obj.userData.velocityY;
        if (obj.position.y < -20) {
          obj.position.y = 20;
          obj.position.x = (Math.random() - 0.5) * 40;
        }
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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

export default RainbowBackground;
