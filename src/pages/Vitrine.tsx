import React, { useEffect } from 'react';
import Header from '@/components/Header';

const Vitrine = () => {
  useEffect(() => {
    // Prevent scrolling on the main page
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <iframe 
        src="https://v4.egestor.com.br/vitrine/?s=lojamundoencantado"
        title="Demonstração de Vitrine - Mundo Encantado"
        className="w-full border-none block"
        style={{ height: 'calc(100vh - 143px)' }} // 80px header + 63px badge inferior
      />
    </div>
  );
};

export default Vitrine;
