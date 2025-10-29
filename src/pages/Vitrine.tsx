import { useEffect } from 'react';
import Header from '@/components/Header';

const Vitrine = () => {
  useEffect(() => {
    // Desativa rolagem da página principal
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
    document.documentElement.style.height = '100%';

    return () => {
      // Restaura ao sair da página
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.height = '';
    };
  }, []);

  return (
    <>
      <Header />
      <iframe 
        src="https://v4.egestor.com.br/vitrine/?s=lojamundoencantado"
        title="Vitrine de Produtos"
        style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: '63px',
          width: '100%',
          height: 'calc(100vh - 143px)',
          border: 'none',
          overflowY: 'auto',
          zIndex: 0,
          display: 'block'
        }}
      />
    </>
  );
};

export default Vitrine;
