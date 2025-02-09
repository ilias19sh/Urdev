import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contactez-nous</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Notre équipe est à votre écoute pour répondre à vos besoins
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-red-600" />
                <span className="ml-3 text-gray-600">Lille, France</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-red-600" />
                <span className="ml-3 text-gray-600">+33 (0)6 45 81 35 82</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-red-600" />
                <span className="ml-3 text-gray-600">contact@urdev.fr</span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;