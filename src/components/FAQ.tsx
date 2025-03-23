import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    question: "Quel est le délai de création d'un site web ?",
    answer: "Le délai moyen de création d'un site web est de 2 à 3 semaines. Ce délai comprend la phase de conception, la validation du design, le développement et les ajustements finaux. Nous pouvons également proposer une option accélérée pour les projets urgents."
  },
  {
    question: "Le prix de 499,99€ inclut-il l'hébergement du site ?",
    answer: "Le prix de base n'inclut pas l'hébergement. Nous proposons des forfaits d'hébergement séparés à partir de 9,99€/mois. Nous pouvons également vous conseiller sur les meilleures solutions d'hébergement adaptées à vos besoins si vous préférez gérer cela par vous-même."
  },
  {
    question: "Est-ce que le site sera optimisé pour les moteurs de recherche (SEO) ?",
    answer: "Oui, tous nos sites sont développés avec les bonnes pratiques SEO intégrées dès le départ : structure HTML sémantique, temps de chargement optimisé, adaptation mobile, balises meta appropriées, etc. Pour un référencement plus avancé, nous proposons des services SEO complémentaires."
  },
  {
    question: "Puis-je modifier le contenu de mon site moi-même après la livraison ?",
    answer: "Absolument ! Nous pouvons intégrer un système de gestion de contenu simple qui vous permettra de modifier les textes et images sans connaissances techniques. Nous vous fournirons également un guide d'utilisation et une session de formation si nécessaire."
  },
  {
    question: "Que comprend exactement votre garantie 'satisfait ou remboursé' ?",
    answer: "Notre garantie 'satisfait ou remboursé' signifie que si le site livré ne correspond pas à vos attentes et aux spécifications convenues, et que nous ne parvenons pas à résoudre les problèmes après deux séries de révisions, nous vous remboursons intégralement. Cette garantie est valable pendant 14 jours après la livraison finale."
  }
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-space-grotesk">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tout ce que vous devez savoir avant de démarrer votre projet avec nous.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-lg font-medium text-left text-gray-900 focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                <span className="ml-6 flex-shrink-0">
                  {openItem === index ? (
                    <ChevronUp className="h-5 w-5 text-red-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </span>
              </button>
              <div 
                className={`px-6 pb-4 transition-all duration-300 ease-in-out ${
                  openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Vous avez d'autres questions ? N'hésitez pas à nous contacter !
          </p>
          <a 
            href="/contact" 
            className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 