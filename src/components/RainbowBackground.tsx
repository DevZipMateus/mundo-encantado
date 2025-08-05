import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const RainbowBackground = () => {
  const mountRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera;
    let animationFrameId: number;
    const rainbows: THREE.Mesh[] = [];

    // Função para criar um único arco-íris
    const createRainbow = () => {
      // 1. Definir o caminho (curva) do arco-íris
      const path = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-2, -2, 0),
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(2, -2, 0)
      ]);

      // 2. Criar a geometria do tubo que segue o caminho
      const geometry = new THREE.TubeGeometry(path, 64, 0.1, 8, false);

      // 3. Aplicar as cores do arco-íris nos vértices da geometria
      const colors = [
        new THREE.Color(0xff0000), // Vermelho
        new THREE.Color(0xffa500), // Laranja
        new THREE.Color(0xffff00), // Amarelo
        new THREE.Color(0x008000), // Verde
        new THREE.Color(0x0000ff), // Azul
        new THREE.Color(0x4b0082), // Anil
        new THREE.Color(0xee82ee)  // Violeta
      ];

      const vertexColors: number[] = [];
      const positionAttribute = geometry.attributes.position;

      // Para cada vértice, calculamos a cor baseada na sua posição na curva
      for (let i = 0; i < positionAttribute.count; i++) {
        const t = (i / positionAttribute.count) % 1; // Posição normalizada (0 a 1)
        const colorIndex = Math.floor(t * colors.length);
        const color = colors[colorIndex];
        vertexColors.push(color.r, color.g, color.b);
      }

      geometry.setAttribute('color', new THREE.Float32BufferAttribute(vertexColors, 3));

      // 4. Criar o material que usa as cores dos vértices
      const material = new THREE.MeshBasicMaterial({
        vertexColors: true, // ESSENCIAL para usar as cores que definimos
      });

      // 5. Criar o Mesh (objeto 3D) final e retorná-lo
      const rainbowMesh = new THREE.Mesh(geometry, material);
      return rainbowMesh;
    };

    const init = () => {
      if (!mountRef.current) return;
      
      const canvas = mountRef.current;
      scene = new THREE.Scene();
      
      // Criando um gradiente colorido como fundo usando as cores do gradient-candy
      const gradientColors = [
        new THREE.Color('#90E0A0'), // candy-green
        new THREE.Color('#FFB6C1'), // candy-pink
        new THREE.Color('#87CEEB'), // candy-blue
        new THREE.Color('#DDA0DD'), // candy-purple
        new THREE.Color('#F0E68C')  // candy-yellow
      ];
      
      // Criar um plano de fundo com gradiente
      const backgroundGeometry = new THREE.PlaneGeometry(100, 100);
      const backgroundMaterial = new THREE.ShaderMaterial({
        uniforms: {
          topColor: { value: gradientColors[0] },
          bottomColor: { value: gradientColors[4] },
          offset: { value: 33 },
          exponent: { value: 0.6 }
        },
        vertexShader: `
          varying vec3 vWorldPosition;
          void main() {
            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 topColor;
          uniform vec3 bottomColor;
          uniform float offset;
          uniform float exponent;
          varying vec3 vWorldPosition;
          void main() {
            float h = normalize(vWorldPosition + offset).y;
            gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
          }
        `,
        side: THREE.BackSide
      });
      
      const backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
      backgroundMesh.position.z = -50;
      scene.add(backgroundMesh);

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 25;

      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const rainbowCount = 40;
      for (let i = 0; i < rainbowCount; i++) {
        const rainbow = createRainbow();

        rainbow.position.set(
          (Math.random() - 0.5) * 50, // Posição X
          (Math.random() - 0.5) * 50, // Posição Y inicial
          (Math.random() - 0.5) * 20  // Profundidade Z
        );
        rainbow.scale.setScalar(Math.random() * 0.5 + 0.5); // Tamanho aleatório
        rainbow.rotation.z = (Math.random() - 0.5) * Math.PI; // Rotação aleatória

        // Velocidade de queda
        rainbow.userData = { velocityY: (Math.random() * 0.05) + 0.02 };

        scene.add(rainbow);
        rainbows.push(rainbow);
      }

      animate();
    };

    const animate = () => {
      rainbows.forEach(rainbow => {
        // Move o arco-íris para baixo
        rainbow.position.y -= rainbow.userData.velocityY;

        // Se o arco-íris sair da tela por baixo, reposiciona ele em cima
        if (rainbow.position.y < -30) {
          rainbow.position.y = 30;
          rainbow.position.x = (Math.random() - 0.5) * 50;
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

    // Função de Limpeza
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      // Limpeza de memória do Three.js
      if (renderer) renderer.dispose();
      if (scene) {
        scene.traverse(object => {
          const mesh = object as THREE.Mesh;
          if (mesh.geometry) mesh.geometry.dispose();
          if (mesh.material) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach(material => material.dispose());
            } else {
              mesh.material.dispose();
            }
          }
        });
      }
    };
  }, []);

  return (
    <canvas
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default RainbowBackground;
