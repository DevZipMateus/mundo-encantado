
import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

const LocationSection = () => {
  const address = "R. Firmino de Paula, 741 - 5, Centro, Ibirubá - RS, 98200-000";
  const phoneNumber = "5499164-7113";
  
  const handleNavigationClick = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <section id="localizacao" className="py-20 bg-gradient-to-br from-candy-blue/10 to-candy-purple/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playful font-bold text-gradient mb-6">
            Venha Nos Visitar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-rounded">
            Nossa loja está localizada no coração de Ibirubá, esperando por você e sua família
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <div className="card-candy p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-candy-pink to-candy-purple rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-playful font-bold text-candy-purple-dark mb-2">
                    Nosso Endereço
                  </h3>
                  <p className="text-gray-600 font-rounded">
                    R. Firmino de Paula, 741 - 5<br />
                    Centro, Ibirubá - RS, 98200-000
                  </p>
                </div>
              </div>
            </div>

            <div className="card-candy p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-candy-green to-candy-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-playful font-bold text-candy-purple-dark mb-2">
                    Telefone & WhatsApp
                  </h3>
                  <p className="text-gray-600 font-rounded">
                    (54) 99164-7113<br />
                    <span className="text-sm text-gray-500">Fale conosco pelo WhatsApp</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="card-candy p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-candy-yellow to-candy-pink rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-playful font-bold text-candy-purple-dark mb-2">
                    E-mail
                  </h3>
                  <p className="text-gray-600 font-rounded">
                    mundoencantadochildrens@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="card-candy p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-candy-purple to-candy-pink rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-playful font-bold text-candy-purple-dark mb-2">
                    Horário de Funcionamento
                  </h3>
                  <div className="text-gray-600 font-rounded text-sm space-y-1">
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábados: 8h às 17h</p>
                    <p className="text-candy-purple-dark font-semibold">Domingos: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button 
                onClick={handleNavigationClick}
                className="flex-1 bg-gradient-to-r from-candy-pink-dark to-candy-purple-dark text-white px-6 py-3 rounded-full font-playful font-bold hover:transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Como Chegar
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="flex-1 border-2 border-candy-purple-dark text-candy-purple-dark px-6 py-3 rounded-full font-playful font-bold hover:bg-candy-purple-dark hover:text-white transition-all duration-300"
              >
                WhatsApp
              </button>
            </div>
          </div>

          {/* Mapa do Google Maps */}
          <div className="card-candy p-2 h-96 lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.4567891234567!2d-53.08355999999999!3d-28.583399999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sR.%20Firmino%20de%20Paula%2C%20741%20-%205%2C%20Centro%2C%20Ibiru%C3%BA%C3%A1%20-%20RS%2C%2098200-000!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Mundo Encantado - Ibirubá/RS"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
