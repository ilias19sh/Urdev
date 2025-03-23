import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <>
      {/* Header avec arrière-plan */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-600 opacity-90"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-space-grotesk">
            Contactez-nous
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
            Notre équipe est à votre écoute pour répondre à vos besoins et concrétiser vos projets
          </p>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {/* Informations de contact */}
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 highlight-title">Nos coordonnées</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Plusieurs moyens pour nous joindre selon votre préférence
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-5">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
                    <p className="mt-1 text-gray-600">59000 Lille, France</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-5">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
                    <p className="mt-1 text-gray-600">+33 (0)6 45 81 35 82</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-5">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">codeventure.contact@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-5">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Horaires</h3>
                    <p className="mt-1 text-gray-600">Lundi - Vendredi : 9h00 - 18h00</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg h-64 bg-gray-200">
                {/* Ici vous pourriez intégrer une carte Google Maps */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <p className="text-gray-500">Carte de localisation</p>
                </div>
              </div>
            </div>
            
            {/* Formulaire de contact */}
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6 highlight-title">Envoyez-nous un message</h2>
              
              {formStatus === 'success' ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message envoyé avec succès !</h3>
                  <p className="text-gray-600">Nous vous répondrons dans les plus brefs délais.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-6 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email professionnel
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Sujet
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Votre message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-start">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-500">
                      J'accepte que mes données soient traitées conformément à la politique de confidentialité
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full inline-flex justify-center items-center bg-gradient-to-r from-blue-600 to-blue-700 py-3 px-4 border border-transparent rounded-md shadow-md text-base font-medium text-white hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;