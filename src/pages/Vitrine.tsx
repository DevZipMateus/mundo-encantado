import { useEffect } from 'react';
import Header from '@/components/Header';
import { Helmet } from 'react-helmet';

const Vitrine = () => {
  useEffect(() => {
    // Prevenir scroll em html e body
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    
    return () => {
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.height = 'auto';
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Demonstração de Vitrine - Mundo Encantado</title>
        <meta name="description" content="Confira nossa vitrine completa de produtos infantis e infanto-juvenis" />
      </Helmet>
      
      {/* Header fixo - 80px */}
      <div 
        className="fixed top-0 left-0 right-0 h-20 w-full"
        style={{ zIndex: 10 }}
      >
        <Header />
      </div>
      
      {/* Iframe - posição fixa entre header e badge */}
      <iframe 
        src="https://v4.egestor.com.br/vitrine/?s=lojamundoencantado"
        className="fixed w-full border-none"
        style={{ 
          top: '80px',
          bottom: '63px',
          left: 0,
          right: 0,
          height: 'calc(100vh - 143px)',
          overflowY: 'auto',
          zIndex: 0
        }}
        title="Vitrine Mundo Encantado"
      />
    </>
  );
};

export default Vitrine;
