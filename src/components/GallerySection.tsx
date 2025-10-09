import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

const GallerySection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Array com os nomes das imagens da galeria
  const galleryImages = [
    '392790703_1371246707093531_7684093847975334470_n.jpeg',
    '420970361_738424294639088_7341662323158585360_n.jpeg',
    '422623952_337153392490800_3056851010811559058_n.jpeg',
    '424439727_1096757871450673_3095124950984532452_n.jpeg',
    '425510927_939368527642594_4979332058526966340_n.jpeg',
    '436536601_727362119568204_7408747714226757935_n.jpeg',
    '436764432_390188353828493_8645926048565851627_n.jpeg',
    '438189912_449301967657057_1322049384285996503_n.jpeg',
    '438907206_1448797799369261_5481155751590972059_n.jpeg',
    '439914545_1171735470852543_3898718521019743832_n.jpeg',
    '441254203_1007843084372434_9041078678535945998_n.jpeg',
    '442642154_1455124885390956_8621274224969885140_n.jpeg'
  ];

  // Auto-play functionality - change slide every 3 seconds
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [api]);

  // Track current slide
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api?.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="galeria" className="py-20 sections-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playful font-bold text-gradient mb-6">
            Nossa Galeria Encantada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-rounded">
            Veja alguns dos momentos mágicos que criamos junto com nossas famílias. 
            Cada foto conta uma história de alegria, estilo e carinho.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="card-candy overflow-hidden group">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={`/lovable-uploads/galeria/galeria/${image}`}
                          alt={`Galeria Mundo Encantado ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(galleryImages.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index * 3)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(current / 3) === index
                    ? 'bg-gradient-to-r from-candy-pink-dark to-candy-purple-dark'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 font-rounded mb-6">
            Quer fazer parte da nossa galeria? Marque @mundoencantado.ibiruba nas suas fotos!
          </p>
          <button className="bg-gradient-to-r from-candy-pink-dark to-candy-purple-dark text-white px-8 py-3 rounded-full font-playful font-bold hover:transform hover:scale-105 transition-all duration-300">
            Veja Mais no Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
