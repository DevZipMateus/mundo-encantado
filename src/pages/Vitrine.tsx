import React, { useEffect } from 'react';
import Header from '@/components/Header';

const Vitrine = () => {
  useEffect(() => {
    // Atualizar o título da página
    document.title = 'Demonstração de Vitrine - Mundo Encantado';
    
    // Remover scroll do body
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Restaurar configurações ao sair
      document.body.style.overflow = '';
      document.title = 'Mundo Encantado';
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden flex flex-col">
      {/* Header fixo - 80px */}
      <div className="h-20 flex-shrink-0">
        <Header />
      </div>

      {/* Iframe - altura dinâmica */}
      <div className="w-full flex-1 overflow-hidden">
        <iframe
          src="https://v4.egestor.com.br/vitrine/?s=lojamundoencantado"
          style={{
            width: '100%',
            height: '100%',
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
