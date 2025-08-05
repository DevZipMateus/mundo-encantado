
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
    <section id="localizacao" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-candy-blue/10 to-candy-purple/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playful font-bold text-gradient mb-4 sm:mb-6">
            Venha Nos Visitar
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-rounded px-2">
            Nossa loja está localizada no coração de Ibirubá, esperando por você e sua família
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Informações de Contato */}
          <div className="space-y-4 sm:space-y-6">
            <div className="card-candy p-4 sm:p-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-candy-pink to-candy-purple rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-playful font-bold text-candy-purple-dark mb-2">
                    Nosso Endereço
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-rounded break-words">
                    R. Firmino de Paula, 741 - 5<br />
                    Centro, Ibirubá - RS, 98200-000
                  </p>
                </div>
              </div>
            </div>

            <div className="card-candy p-4 sm:p-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-candy-green to-candy-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-playful font-bold text-candy-purple-dark mb-2">
                    Telefone & WhatsApp
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-rounded">
                    (54) 99164-7113<br />
                    <span className="text-xs sm:text-sm text-gray-500">Fale conosco pelo WhatsApp</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="card-candy p-4 sm:p-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-candy-yellow to-candy-pink rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-playful font-bold text-candy-purple-dark mb-2">
                    E-mail
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-rounded break-all">
                    mundoencantadochildrens@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="card-candy p-4 sm:p-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-candy-purple to-candy-pink rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-playful font-bold text-candy-purple-dark mb-2">
                    Horário de Funcionamento
                  </h3>
                  <div className="text-xs sm:text-sm text-gray-600 font-rounded space-y-1">
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábados: 8h às 17h</p>
                    <p className="text-candy-purple-dark font-semibold">Domingos: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={handleNavigationClick}
                className="flex-1 bg-gradient-to-r from-candy-pink-dark to-candy-purple-dark text-white px-4 sm:px-6 py-3 rounded-full font-playful font-bold text-sm sm:text-base hover:transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Como Chegar
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="flex-1 border-2 border-candy-purple-dark text-candy-purple-dark px-4 sm:px-6 py-3 rounded-full font-playful font-bold text-sm sm:text-base hover:bg-candy-purple-dark hover:text-white transition-all duration-300"
              >
                WhatsApp
              </button>
            </div>
          </div>

          {/* Mapa do Google Maps */}
          <div className="card-candy p-2 h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[400px] order-first lg:order-last">
            <iframe
              src="https://maps.google.com/maps?q=R.%20Firmino%20de%20Paula,%20741,%20Centro,%20Ibirubá%20RS&t=&z=17&ie=UTF8&iwloc=&output=embed"
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
