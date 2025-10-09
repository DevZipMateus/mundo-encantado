import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { Baby, Shirt, Users, ShoppingBag, Droplets, Music, Puzzle } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import ufrogLogo from '@/assets/brands/ufrog.png';
import jujuLeleLogo from '@/assets/brands/juju-lele.png';
import evidenceBalletLogo from '@/assets/brands/evidence-ballet.png';
import magiaDoceLogo from '@/assets/brands/magia-doce.png';
import santaRitaBabyLogo from '@/assets/brands/santa-rita-baby.png';
import bentoFabulaLogo from '@/assets/brands/bento-fabula.png';
import fabulaLogo from '@/assets/brands/fabula.png';
import kellyKetyLogo from '@/assets/brands/kelly-kety.png';
import reiRexLogo from '@/assets/brands/rei-rex.png';
import heringLogo from '@/assets/brands/hering.png';
import luaEncantadaLogo from '@/assets/brands/lua-encantada.png';
import alekidsLogo from '@/assets/brands/alekids.png';
import viraMexeLogo from '@/assets/brands/vira-mexe.png';
import seleneLogo from '@/assets/brands/selene.png';
import cativaLogo from '@/assets/brands/cativa.png';
import acostamentoKidsLogo from '@/assets/brands/acostamento-kids.png';
import farmFuturaLogo from '@/assets/brands/farm-futura.png';
import basedLogo from '@/assets/brands/based.png';
import acostamentoLogo from '@/assets/brands/acostamento.png';
import naturaLogo from '@/assets/brands/natura.png';
import avonLogo from '@/assets/brands/avon.png';
import estrelaLogo from '@/assets/brands/estrela.png';
import oBoticarioLogo from '@/assets/brands/o-boticario.png';

const BrandsSection = () => {
  const categories = [
    {
      icon: Baby,
      title: "Moda Bebê",
      brands: [
        { name: "Hering", logo: heringLogo },
        { name: "Bento é Fábula", logo: bentoFabulaLogo },
        { name: "Magia Doce", logo: magiaDoceLogo },
        { name: "Alekids", logo: alekidsLogo },
        { name: "Lua Encantada", logo: luaEncantadaLogo },
        { name: "Santa Rita Baby", logo: santaRitaBabyLogo },
        { name: "KelyKety", logo: kellyKetyLogo },
        { name: "Rei Rex", logo: reiRexLogo },
        { name: "Vira&Mexe", logo: viraMexeLogo }
      ]
    },
    {
      icon: Shirt,
      title: "Moda Infantil",
      brands: [
        { name: "Acostamento", logo: acostamentoKidsLogo },
        { name: "Hering", logo: heringLogo },
        { name: "Bento é Fábula", logo: bentoFabulaLogo },
        { name: "Magia Doce", logo: magiaDoceLogo },
        { name: "Alekids", logo: alekidsLogo },
        { name: "Lua Encantada", logo: luaEncantadaLogo },
        { name: "Santa Rita Baby", logo: santaRitaBabyLogo },
        { name: "KelyKety", logo: kellyKetyLogo },
        { name: "Rei Rex", logo: reiRexLogo },
        { name: "Fábula", logo: fabulaLogo },
        { name: "Vira&Mexe", logo: viraMexeLogo }
      ]
    },
    {
      icon: Users,
      title: "Infanto Juvenil",
      brands: [
        { name: "Acostamento", logo: acostamentoLogo },
        { name: "Hering", logo: heringLogo },
        { name: "Bento é Fábula", logo: bentoFabulaLogo },
        { name: "Farm Futura", logo: farmFuturaLogo },
        { name: "Alekids", logo: alekidsLogo },
        { name: "Lua Encantada", logo: luaEncantadaLogo },
        { name: "BaseD", logo: basedLogo },
        { name: "Vira&Mexe", logo: viraMexeLogo },
        { name: "Selene", logo: seleneLogo }
      ]
    },
    {
      icon: ShoppingBag,
      title: "Acessórios",
      brands: [
        { name: "Juju e Lele Laços", logo: jujuLeleLogo },
        { name: "Hering", logo: heringLogo },
        { name: "UFrog", logo: ufrogLogo },
        { name: "Janod", logo: null },
        { name: "Lume", logo: null },
        { name: "Natura", logo: null },
        { name: "Fábula", logo: fabulaLogo },
        { name: "Vira&Mexe", logo: viraMexeLogo }
      ]
    },
    {
      icon: Droplets,
      title: "Perfumaria",
      brands: [
        { name: "Natura", logo: naturaLogo },
        { name: "Avon", logo: avonLogo },
        { name: "O Boticário", logo: oBoticarioLogo },
        { name: "Granado", logo: null }
      ]
    },
    {
      icon: Music,
      title: "Ballet e Jazz",
      brands: [
        { name: "Evidence Ballet", logo: evidenceBalletLogo },
        { name: "Capezio", logo: null },
        { name: "Só Dança", logo: null },
        { name: "Lupo", logo: null },
        { name: "Selene", logo: seleneLogo }
      ]
    },
    {
      icon: Puzzle,
      title: "Brinquedos Educativos",
      brands: [
        { name: "Cativa", logo: cativaLogo },
        { name: "Janod", logo: null },
        { name: "Lume", logo: null },
        { name: "Grow", logo: null },
        { name: "Estrela", logo: estrelaLogo }
      ]
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
                        {brand.logo ? (
                          <img 
                            src={brand.logo} 
                            alt={brand.name}
                            className="max-h-16 max-w-full object-contain"
                          />
                        ) : (
                          <p className="text-center font-rounded font-semibold text-gray-700 text-sm">
                            {brand.name}
                          </p>
                        )}
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
