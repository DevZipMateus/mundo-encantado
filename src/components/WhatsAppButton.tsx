
import React from 'react';
import { MessageCircle } from 'lucide-react';

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
      <MessageCircle size={30} />
    </button>
  );
};

export default WhatsAppButton;
