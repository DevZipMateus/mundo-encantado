
import React from 'react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5554991647113';
    const message = 'Olá! Gostaria de saber mais sobre os produtos do Mundo Encantado.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      aria-label="Falar no WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <img 
        src="/lovable-uploads/ee01649b-441e-465a-9bbe-db4e87fd912c.png" 
        alt="WhatsApp" 
        className="w-8 h-8"
      />
    </button>
  );
};

export default WhatsAppButton;
