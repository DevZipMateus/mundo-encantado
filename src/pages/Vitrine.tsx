import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState('calc(100vh - 80px - 63px)');

  useEffect(() => {
    // Atualizar o título da página
    document.title = 'Demonstração de Vitrine - Mundo Encantado';
    
    const calculateHeight = () => {
      const windowHeight = window.innerHeight;
      const headerHeight = 80;
      const badgeHeight = 63;
      const calculatedHeight = windowHeight - headerHeight - badgeHeight;
      setIframeHeight(`${calculatedHeight}px`);
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    return () => {
      window.removeEventListener('resize', calculateHeight);
      // Restaurar título ao sair
      document.title = 'Mundo Encantado';
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      {/* Header fixo - 80px */}
      <div className="h-20">
        <Header />
      </div>

      {/* Iframe - altura dinâmica */}
      <div className="w-full flex-1">
        <iframe
          src="https://v4.egestor.com.br/vitrine/?s=lojamundoencantado"
          style={{
            width: '100%',
            height: iframeHeight,
            border: 'none',
            display: 'block'
          }}
          title="Demonstração de Vitrine"
        />
      </div>
    </div>
  );
};

export default Vitrine;
