
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "Ibirubá/RS",
      comment: "O Mundo Encantado é simplesmente maravilhoso! Minha filha ama as roupinhas e eu amo a qualidade. Atendimento nota 10!",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "João Santos",
      location: "Cruz Alta/RS",
      comment: "Encontrei roupas lindas para meus gêmeos. A variedade é incrível e os preços são justos. Super recomendo!",
      rating: 5,
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      location: "Carazinho/RS",
      comment: "A loja tem um ambiente acolhedor e as meninas são super atenciosas. Virei cliente fiel do Mundo Encantado!",
      rating: 5,
      avatar: "AC"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-candy-yellow-dark fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playful font-bold text-gradient mb-6">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-rounded">
            Histórias reais de famílias que encontraram a magia no Mundo Encantado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-candy p-6 relative hover:transform hover:scale-105 transition-all duration-300"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-8 h-8 text-candy-purple-dark" />
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-candy-pink to-candy-purple rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-playful font-bold text-candy-purple-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 font-rounded">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-600 font-rounded italic">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="card-candy p-8 max-w-2xl mx-auto bg-gradient-to-r from-candy-green/10 to-candy-blue/10">
            <h3 className="text-2xl font-playful font-bold text-candy-purple-dark mb-4">
              Junte-se à Nossa Família Encantada
            </h3>
            <p className="text-gray-600 font-rounded mb-6">
              Centenas de famílias já descobriram a magia do nosso atendimento. 
              Venha fazer parte dessa história!
            </p>
            <div className="flex justify-center items-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-candy-purple-dark">500+</div>
                <div className="text-sm text-gray-600">Famílias Atendidas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-candy-pink-dark">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-candy-green-dark">5⭐</div>
                <div className="text-sm text-gray-600">Avaliação Média</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
