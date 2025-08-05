import React from 'react';
import { Heart, Instagram, Phone, Mail, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gradient-to-br from-candy-purple-dark to-candy-pink-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img src="/lovable-uploads/7961030c-c58e-434b-a80d-45e71f32a7a0.png" alt="Mundo Encantado" className="h-12 w-auto mr-3" />
            </div>
            <p className="font-rounded text-white/90 mb-4 leading-relaxed">
              No Mundo Encantado, cada peça é escolhida com carinho para vestir 
              os sonhos das crianças e criar memórias mágicas em família.
            </p>
            <div className="flex items-center justify-center md:justify-start text-white/80">
              <Heart className="w-4 h-4 mr-2 text-candy-pink" />
              <span className="font-playful text-sm">Feito com amor desde sempre</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="text-center">
            <h4 className="text-lg font-playful font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 font-rounded">
              <li>
                <a href="#inicio" className="text-white/80 hover:text-white transition-colors duration-300">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-white/80 hover:text-white transition-colors duration-300">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/80 hover:text-white transition-colors duration-300">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-white/80 hover:text-white transition-colors duration-300">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/80 hover:text-white transition-colors duration-300">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-playful font-bold mb-4">Fale Conosco</h4>
            <div className="space-y-3 font-rounded text-sm">
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="w-4 h-4 mr-2 text-candy-green" />
                <span className="text-white/80">
                  Firmino de Paula, 741, Sala 5<br />
                  Centro, Ibirubá/RS
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-4 h-4 mr-2 text-candy-blue" />
                <span className="text-white/80">(54) 99164-7113</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 mr-2 text-candy-yellow" />
                <span className="text-white/80">mundoencantadochildrens@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Instagram className="w-4 h-4 mr-2 text-candy-pink" />
                <span className="text-white/80">@mundoencantado.ibiruba</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="font-rounded text-white/70 text-sm">© 2025 Mundo Encantado. Todos os direitos reservados. Desenvolvido com 💖 para vestir sonhos e criar memórias.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;