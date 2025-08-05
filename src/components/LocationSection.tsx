
import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

const LocationSection = () => {
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
                    Firmino de Paula, 741, Sala 5<br />
                    Centro, Ibirubá/RS
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
              <button className="flex-1 bg-gradient-to-r from-candy-pink-dark to-candy-purple-dark text-white px-6 py-3 rounded-full font-playful font-bold hover:transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Navigation className="w-5 h-5 mr-2" />
                Como Chegar
              </button>
              <button className="flex-1 border-2 border-candy-purple-dark text-candy-purple-dark px-6 py-3 rounded-full font-playful font-bold hover:bg-candy-purple-dark hover:text-white transition-all duration-300">
                WhatsApp
              </button>
            </div>
          </div>

          {/* Mapa */}
          <div className="card-candy p-2 h-96 lg:h-full min-h-[400px]">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-candy-green/20 to-candy-blue/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-candy-purple-dark mx-auto mb-4" />
                <p className="text-candy-purple-dark font-playful font-bold">
                  Mapa Interativo
                </p>
                <p className="text-gray-600 text-sm font-rounded mt-2">
                  Firmino de Paula, 741, Sala 5<br />
                  Centro, Ibirubá/RS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
