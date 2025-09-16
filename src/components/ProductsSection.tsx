
import React from 'react';
import { ShoppingBag, Shirt, Baby, Users, Droplets, Music, Puzzle } from 'lucide-react';

const ProductsSection = () => {
  const services = [
    {
      icon: Baby,
      title: "Moda Bebê",
      description: "Roupinhas fofas e confortáveis para os primeiros anos de vida",
      features: ["0 a 2 anos", "Tecidos macios", "Fácil de vestir", "Segurança total"]
    },
    {
      icon: Shirt,
      title: "Moda Infantil",
      description: "Peças divertidas e coloridas para crianças cheias de energia",
      features: ["2 a 10 anos", "Designs únicos", "Durabilidade", "Conforto total"]
    },
    {
      icon: Users,
      title: "Infanto Juvenil",
      description: "Estilo moderno para pré-adolescentes que querem se expressar",
      features: ["10 a 16 anos", "Tendências atuais", "Autoestima", "Personalidade"]
    },
    {
      icon: ShoppingBag,
      title: "Acessórios",
      description: "Complementos perfeitos para deixar o look ainda mais especial",
      features: ["Bolsas", "Bonés", "Sapatos", "Bijuterias"]
    },
    {
      icon: Droplets,
      title: "Perfumaria",
      description: "Produtos de higiene e cuidados para toda a família",
      features: ["Sabonetes", "Shampoo", "Condicionador", "Colônias"]
    },
    {
      icon: Music,
      title: "Ballet e Jazz",
      description: "Tudo para dança com qualidade e elegância",
      features: ["Collants", "Saias", "Meia-calça", "Sapatilhas"]
    },
    {
      icon: Puzzle,
      title: "Brinquedos Educativos",
      description: "Diversão que estimula o aprendizado e desenvolvimento",
      features: ["Jogos pedagógicos", "Quebra-cabeças", "Livros infantis", "Material escolar"]
    }
  ];

  return (
    <section id="produtos" className="py-20 sections-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playful font-bold text-gradient mb-6">
            Nossos Produtos Mágicos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-rounded">
            Descubra nossa incrível variedade de produtos para toda a família, 
            desde moda até cuidados pessoais e diversão educativa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-candy p-6 hover:transform hover:scale-105 transition-all duration-300 group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-candy-green to-candy-purple rounded-full mx-auto mb-4 flex items-center justify-center group-hover:animate-bounce-gentle">
                  <service.icon className="text-white w-10 h-10" />
                </div>
                <h3 className="text-xl font-playful font-bold text-candy-purple-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-rounded text-sm mb-4">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-600 font-rounded"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-candy-pink-dark to-candy-purple-dark rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="card-candy p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-playful font-bold text-candy-purple-dark mb-4">
              Atendimento Personalizado
            </h3>
            <p className="text-gray-600 font-rounded mb-6">
              Nossa equipe especializada está pronta para ajudar você a encontrar 
              as peças perfeitas para cada ocasião. Oferecemos consultoria de estilo 
              gratuita e sugestões personalizadas para cada idade.
            </p>
            <button className="bg-gradient-to-r from-candy-pink-dark to-candy-purple-dark text-white px-8 py-3 rounded-full font-playful font-bold hover:transform hover:scale-105 transition-all duration-300">
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
