
import React from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';
import RainbowAnimation from './RainbowAnimation';

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient pt-20 md:pt-24"
    >
      {/* Rainbow Animation - only falling emojis now */}
      <RainbowAnimation />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-24 md:top-32 left-4 md:left-10 animate-float">
          <Star className="text-white/30 w-6 md:w-8 h-6 md:h-8" />
        </div>
        <div className="absolute top-40 md:top-48 right-6 md:right-20 animate-bounce-gentle" style={{animationDelay: '0.5s'}}>
          <Heart className="text-white/30 w-5 md:w-6 h-5 md:h-6" />
        </div>
        <div className="absolute bottom-32 md:bottom-40 left-6 md:left-20 animate-float" style={{animationDelay: '1s'}}>
          <Sparkles className="text-white/30 w-8 md:w-10 h-8 md:h-10" />
        </div>
        <div className="absolute top-60 md:top-72 right-4 md:right-10 animate-bounce-gentle" style={{animationDelay: '1.5s'}}>
          <Star className="text-white/20 w-3 md:w-4 h-3 md:h-4" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 md:mb-8 animate-fade-in" style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.5)' }}>
            <img 
              src="/lovable-uploads/7961030c-c58e-434b-a80d-45e71f32a7a0.png" 
              alt="Mundo Encantado"
              className="mx-auto h-24 md:h-32 lg:h-40 w-auto mb-4 md:mb-6"
            />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-playful font-bold text-white mb-4 md:mb-6 animate-fade-in drop-shadow-lg leading-tight" style={{animationDelay: '0.2s', textShadow: '0px 2px 4px rgba(0,0,0,0.5)'}}>
            Bem-vindos ao
            <span className="block text-white font-black mt-2">
              Mundo Encantado
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 font-rounded max-w-2xl mx-auto animate-fade-in drop-shadow-lg leading-relaxed px-4" style={{animationDelay: '0.4s', textShadow: '0px 2px 4px rgba(0,0,0,0.5)'}}>
            Onde cada peça conta uma história mágica e cada criança brilha com seu próprio encanto
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in px-4" style={{animationDelay: '0.6s'}}>
            <button className="bg-white text-candy-purple-dark px-6 md:px-8 py-3 md:py-4 rounded-full font-playful font-bold text-base md:text-lg shadow-candy hover:transform hover:scale-105 transition-all duration-300">
              Conheça Nossa Magia
            </button>
            <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-playful font-bold text-base md:text-lg hover:bg-white hover:text-candy-purple-dark transition-all duration-300">
              Entre em Contato
            </button>
          </div>
          
          <div className="mt-8 md:mt-12 text-white/80 animate-fade-in drop-shadow-lg px-4" style={{animationDelay: '0.8s', textShadow: '0px 2px 4px rgba(0,0,0,0.5)'}}>
            <p className="text-xs md:text-sm mb-1 md:mb-2">📍 Rua do Comércio, 954 - Centro, Ibirubá/RS</p>
            <p className="text-xs md:text-sm">📱 (54) 99164-7113</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-5 md:w-6 h-8 md:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-white/50 rounded-full mt-1 md:mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
