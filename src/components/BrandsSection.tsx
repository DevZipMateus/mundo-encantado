import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { Baby, Shirt, Users, ShoppingBag, Droplets, Music, Puzzle } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const BrandsSection = () => {
  const categories = [
    {
      icon: Baby,
      title: "Moda Bebê",
      brands: ["Hering", "Fábula e Bento", "Magia Doce", "Alekids", "Lua Encantada", "Santa Rita Baby", "KelyKety", "Rei Rex"]
    },
    {
      icon: Shirt,
      title: "Moda Infantil",
      brands: ["Acostamento", "Hering", "Fábula e Bento", "Magia Doce", "Alekids", "Lua Encantada", "Santa Rita Baby", "KelyKety", "Rei Rex"]
    },
    {
      icon: Users,
      title: "Infanto Juvenil",
      brands: ["Acostamento", "Hering", "Fábula e Bento", "Farm Futura", "Alekids", "Lua Encantada", "BaseD"]
    },
    {
      icon: ShoppingBag,
      title: "Acessórios",
      brands: ["Juju e Lele Laços", "Hering", "UFrog", "Janod", "Lume", "Natura"]
    },
    {
      icon: Droplets,
      title: "Perfumaria",
      brands: ["Natura", "O Boticário", "Granado"]
    },
    {
      icon: Music,
      title: "Ballet e Jazz",
      brands: ["Capezio", "Só Dança", "Lupo"]
    },
    {
      icon: Puzzle,
      title: "Brinquedos Educativos",
      brands: ["Janod", "Lume", "Grow", "Estrela"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-candy-pink-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playful font-bold text-gradient mb-6">
            Nossas Marcas Parceiras
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-rounded">
            Trabalhamos com as melhores marcas do mercado para garantir qualidade e estilo em cada produto.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="card-candy p-8"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-candy-green to-candy-purple rounded-full flex items-center justify-center">
                  <category.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-playful font-bold text-candy-purple-dark">
                  {category.title}
                </h3>
              </div>

              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {category.brands.map((brand, brandIndex) => (
                    <CarouselItem key={brandIndex} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                      <div className="p-4 bg-white rounded-xl border-2 border-candy-pink-light/30 hover:border-candy-purple-dark/50 transition-all duration-300 hover:transform hover:scale-105 h-24 flex items-center justify-center">
                        <p className="text-center font-rounded font-semibold text-gray-700 text-sm">
                          {brand}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
