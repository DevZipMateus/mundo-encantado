
import React, { useState } from 'react';
import { Send, Phone, MessageCircle, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playful font-bold text-gradient mb-6">
            Fale Conosco
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-rounded">
            Estamos aqui para ajudar você a encontrar a magia perfeita para sua família
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div className="card-candy p-8">
            <h3 className="text-2xl font-playful font-bold text-candy-purple-dark mb-6">
              Envie uma Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-playful font-semibold text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-candy-pink/30 rounded-xl focus:ring-2 focus:ring-candy-purple-dark focus:border-transparent transition-all duration-300 font-rounded"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-playful font-semibold text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-candy-pink/30 rounded-xl focus:ring-2 focus:ring-candy-purple-dark focus:border-transparent transition-all duration-300 font-rounded"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-playful font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-candy-pink/30 rounded-xl focus:ring-2 focus:ring-candy-purple-dark focus:border-transparent transition-all duration-300 font-rounded resize-none"
                  placeholder="Como podemos ajudar você?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-candy-pink-dark to-candy-purple-dark text-white px-8 py-4 rounded-xl font-playful font-bold hover:transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Formas de Contato */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-playful font-bold text-candy-purple-dark mb-4">
                Outras Formas de Contato
              </h3>
              <p className="text-gray-600 font-rounded">
                Escolha a forma mais conveniente para falar conosco
              </p>
            </div>

            <div className="card-candy p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="text-white w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-playful font-bold text-candy-purple-dark">
                    WhatsApp
                  </h4>
                  <p className="text-gray-600 font-rounded mb-2">
                    Atendimento rápido e personalizado
                  </p>
                  <p className="text-candy-purple-dark font-semibold">
                    (54) 99164-7113
                  </p>
                </div>
              </div>
            </div>

            <div className="card-candy p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-candy-blue-dark rounded-full flex items-center justify-center">
                  <Phone className="text-white w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-playful font-bold text-candy-purple-dark">
                    Telefone
                  </h4>
                  <p className="text-gray-600 font-rounded mb-2">
                    Ligue e tire suas dúvidas
                  </p>
                  <p className="text-candy-purple-dark font-semibold">
                    (54) 99164-7113
                  </p>
                </div>
              </div>
            </div>

            <div className="card-candy p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Instagram className="text-white w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-playful font-bold text-candy-purple-dark">
                    Instagram
                  </h4>
                  <p className="text-gray-600 font-rounded mb-2">
                    Acompanhe nossas novidades
                  </p>
                  <p className="text-candy-purple-dark font-semibold">
                    @mundoencantado.ibiruba
                  </p>
                </div>
              </div>
            </div>

            <div className="card-candy p-6 bg-gradient-to-r from-candy-green/10 to-candy-blue/10">
              <div className="text-center">
                <h4 className="text-lg font-playful font-bold text-candy-purple-dark mb-3">
                  Visite Nossa Loja
                </h4>
                <p className="text-gray-600 font-rounded mb-4">
                  Venha conhecer pessoalmente nosso mundo encantado
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>📍 Rua do Comércio, 954</p>
                  <p>🏢 Centro, Ibirubá/RS</p>
                  <p>📮 CEP 98200-000</p>
                  <p>⏰ Seg-Sex: 08:30h ao 12h e das 13:30h às 18:30h</p>
                  <p>⏰ Sáb: 08:30 às 16:00 (sem fechar ao meio dia)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
