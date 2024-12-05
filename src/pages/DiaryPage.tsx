import React from 'react';
import DiaryEntry from '../components/DiaryEntry';

const DiaryPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
        Nuestro Diario de Amor
      </h2>
      <DiaryEntry />
    </div>
  );
};

export default DiaryPage;