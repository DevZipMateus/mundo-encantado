
import React from 'react';
import { Heart, Users, Award, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Amor em Cada Peça",
      description: "Selecionamos cada item pensando no carinho e conforto que sua criança merece"
    },
    {
      icon: Users,
      title: "Para Toda Família",
      description: "Atendemos desde bebês até jovens, sempre com muito cuidado e atenção"
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Trabalhamos apenas com as melhores marcas e tecidos de alta qualidade"
    },
    {
      icon: Sparkles,
      title: "Momentos Mágicos",
      description: "Criamos experiências únicas para tornar cada compra um momento especial"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playful font-bold text-gradient mb-6">
            Nossa História Encantada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-rounded">
            No Mundo Encantado, acreditamos que cada criança é única e especial. 
            Nossa missão é vestir sonhos e criar memórias mágicas através da moda infantil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-playful font-bold text-candy-purple-dark mb-6">
              Mais que uma loja, somos um mundo de possibilidades
            </h3>
            <p className="text-gray-600 mb-6 font-rounded leading-relaxed">
              Desde nossa fundação, temos o compromisso de oferecer não apenas roupas, 
              mas experiências que despertam a imaginação e fortalecem a autoestima das crianças. 
              Cada peça em nossa loja é cuidadosamente selecionada para proporcionar conforto, 
              estilo e muita diversão.
            </p>
            <p className="text-gray-600 mb-6 font-rounded leading-relaxed">
              Nossa equipe é apaixonada pelo que faz e está sempre pronta para ajudar 
              você a encontrar a peça perfeita para cada ocasião especial da vida do seu pequeno.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-candy-pink/20 p-3 rounded-full">
                <Heart className="text-candy-pink-dark w-6 h-6" />
              </div>
              <span className="text-candy-purple-dark font-playful font-semibold">
                Feito com amor para sua família
              </span>
            </div>
          </div>
          
          <div className="relative">
            <div className="card-candy p-8 text-center animate-float">
              <div className="w-24 h-24 bg-gradient-to-br from-candy-pink to-candy-purple rounded-full mx-auto mb-6 flex items-center justify-center">
                <Sparkles className="text-white w-12 h-12" />
              </div>
              <h4 className="text-2xl font-playful font-bold text-candy-purple-dark mb-4">
                Nossa Missão
              </h4>
              <p className="text-gray-600 font-rounded">
                Transformar momentos simples em memórias especiais, 
                vestindo cada criança com carinho, qualidade e muita magia.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-candy p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-candy-green to-candy-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <feature.icon className="text-white w-8 h-8" />
              </div>
              <h4 className="text-lg font-playful font-bold text-candy-purple-dark mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm font-rounded">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
