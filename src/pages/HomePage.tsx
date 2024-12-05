import React, { useEffect, useState } from 'react';
import { Heart, Calendar, Camera } from 'lucide-react';
import FloatingHearts from '../components/FloatingHearts';
import ParallaxBackground from '../components/ParallaxBackground';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const anniversaryDate = new Date('2024-03-14');
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - anniversaryDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <ParallaxBackground />
      <FloatingHearts />
      
      <header className={`text-center py-16 px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4 flex items-center justify-center gap-2">
          <Heart className="text-pink-500 animate-pulse" fill="currentColor" />
          Oscar & Yuritzi
          <Heart className="text-pink-500 animate-pulse" fill="currentColor" />
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 animate-fadeIn">
          {diffDays} días de amor y felicidad juntos
        </p>
      </header>

      <main className="container mx-auto px-4 space-y-16">
        <section className="transform hover:scale-105 transition-transform duration-300">
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center flex items-center justify-center gap-2">
              <Calendar className="animate-bounce" />
              Nuestra Historia de Amor
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <img
                src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3"
                alt="Couple in love"
                className="rounded-lg shadow-md w-full h-64 object-cover hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
              />
              <div className="flex items-center">
                <p className="text-gray-700 leading-relaxed hover:text-pink-600 transition-colors">
                  Cada día juntos es una nueva aventura llena de amor, risas y momentos inolvidables.
                  Nuestro amor crece más fuerte con cada amanecer, y cada instante compartido es un
                  tesoro que guardamos en nuestros corazones.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-pink-600 mb-6 flex items-center justify-center gap-2">
              <Camera className="animate-bounce" />
              Momentos Especiales
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3',
                'https://images.unsplash.com/photo-1583157048761-ac2c387a398c?ixlib=rb-4.0.3',
                'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?ixlib=rb-4.0.3'
              ].map((src, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <img
                    src={src}
                    alt={`Romantic moment ${index + 1}`}
                    className="h-48 w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;