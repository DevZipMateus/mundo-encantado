
import React from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';
import RainbowAnimation from './RainbowAnimation';

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Rainbow Animation Background */}
      <RainbowAnimation />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-10" style={{ position: 'relative', zIndex: 1 }}>
        <div className="absolute top-20 left-10 animate-float">
          <Star className="text-white/30 w-8 h-8" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce-gentle" style={{animationDelay: '0.5s'}}>
          <Heart className="text-white/30 w-6 h-6" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{animationDelay: '1s'}}>
          <Sparkles className="text-white/30 w-10 h-10" />
        </div>
        <div className="absolute top-60 right-10 animate-bounce-gentle" style={{animationDelay: '1.5s'}}>
          <Star className="text-white/20 w-4 h-4" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-20" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/7961030c-c58e-434b-a80d-45e71f32a7a0.png" 
              alt="Mundo Encantado"
              className="mx-auto h-32 md:h-40 w-auto mb-6"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playful font-bold text-white mb-6 animate-fade-in drop-shadow-lg" style={{animationDelay: '0.2s'}}>
            Bem-vindos ao
            <span className="block text-gradient font-black">
              Mundo Encantado
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-rounded max-w-2xl mx-auto animate-fade-in drop-shadow-lg" style={{animationDelay: '0.4s'}}>
            Onde cada peça conta uma história mágica e cada criança brilha com seu próprio encanto
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <button className="bg-white text-candy-purple-dark px-8 py-4 rounded-full font-playful font-bold text-lg shadow-candy hover:transform hover:scale-105 transition-all duration-300">
              Conheça Nossa Magia
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-playful font-bold text-lg hover:bg-white hover:text-candy-purple-dark transition-all duration-300">
              Entre em Contato
            </button>
          </div>
          
          <div className="mt-12 text-white/80 animate-fade-in drop-shadow-lg" style={{animationDelay: '0.8s'}}>
            <p className="text-sm mb-2">📍 Firmino de Paula, 741 - Centro, Ibirubá/RS</p>
            <p className="text-sm">📱 (54) 99164-7113</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20" style={{ position: 'relative', zIndex: 1 }}>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
