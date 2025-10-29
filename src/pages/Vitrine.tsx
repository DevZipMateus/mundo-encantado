import { useEffect } from 'react';
import Header from '@/components/Header';
import { Helmet } from 'react-helmet';

const Vitrine = () => {
  useEffect(() => {
    document.title = 'Demonstração de Vitrine - Mundo Encantado';
    // Prevenir scroll na página principal
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Demonstração de Vitrine - Mundo Encantado</title>
        <meta name="description" content="Confira nossa vitrine completa de produtos infantis e infanto-juvenis" />
      </Helmet>
      
      <div className="min-h-screen overflow-hidden">
        {/* Header fixo - 80px */}
        <div className="h-20">
          <Header />
        </div>
        
        {/* Iframe - altura fixa de 700px */}
        <iframe 
          src="https://v4.egestor.com.br/vitrine/?s=lojamundoencantado"
          className="w-full border-none"
          style={{ height: '700px' }}
          title="Vitrine Mundo Encantado"
        />
      </div>
    </>
  );
};

export default Vitrine;
