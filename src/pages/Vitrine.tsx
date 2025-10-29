import { useEffect } from 'react';
import Header from '@/components/Header';

const Vitrine = () => {
  useEffect(() => {
    // Desativa rolagem da página principal
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    htmlElement.style.margin = '0';
    htmlElement.style.padding = '0';
    htmlElement.style.height = '100%';
    htmlElement.style.overflow = 'hidden';
    
    bodyElement.style.margin = '0';
    bodyElement.style.padding = '0';
    bodyElement.style.height = '100%';
    bodyElement.style.overflow = 'hidden';

    // Força estilos no header
    const header = document.querySelector('header');
    if (header) {
      header.style.position = 'fixed';
      header.style.top = '0';
      header.style.left = '0';
      header.style.width = '100%';
      header.style.height = '80px';
      header.style.zIndex = '10';
    }

    // Força estilos no badge/footer
    const badge = document.querySelector('[data-lovable-badge], .lovable-badge, footer');
    if (badge) {
      (badge as HTMLElement).style.position = 'fixed';
      (badge as HTMLElement).style.bottom = '0';
      (badge as HTMLElement).style.left = '0';
      (badge as HTMLElement).style.width = '100%';
      (badge as HTMLElement).style.height = '63px';
      (badge as HTMLElement).style.zIndex = '10';
    }

    return () => {
      // Restaura ao sair da página
      htmlElement.style.margin = '';
      htmlElement.style.padding = '';
      htmlElement.style.height = '';
      htmlElement.style.overflow = '';
      
      bodyElement.style.margin = '';
      bodyElement.style.padding = '';
      bodyElement.style.height = '';
      bodyElement.style.overflow = '';

      if (header) {
        header.style.position = '';
        header.style.top = '';
        header.style.left = '';
        header.style.width = '';
        header.style.height = '';
        header.style.zIndex = '';
      }

      if (badge) {
        (badge as HTMLElement).style.position = '';
        (badge as HTMLElement).style.bottom = '';
        (badge as HTMLElement).style.left = '';
        (badge as HTMLElement).style.width = '';
        (badge as HTMLElement).style.height = '';
        (badge as HTMLElement).style.zIndex = '';
      }
    };
  }, []);

  return (
    <>
      <Header />
      <iframe 
        src="https://v4.egestor.com.br/vitrine/?s=lojamundoencantado"
        title="Vitrine de Produtos"
        style={{
          display: 'block',
          position: 'fixed',
          top: '80px',
          bottom: '63px',
          left: 0,
          right: 0,
          width: '100%',
          height: 'calc(100vh - 143px)',
          border: 'none',
          overflowY: 'auto',
          zIndex: 0
        }}
      />
    </>
  );
};

export default Vitrine;
