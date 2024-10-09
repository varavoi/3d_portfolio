import React from 'react';

interface SectionProps {
  title: string; // Тип данных для заголовка
  children: React.ReactNode; // Тип данных для содержимого
}

const Section: React.FC<SectionProps> = ({ title, children }) => { // Функциональный компонент Section
  return (
    // Секция сайта
    <section className="container mx-auto p-16"> 
     {/* Заголовок секции */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8">{title}</h2> 
       {/* Содержимое секции */}
      {children} 
    </section>
  );
};

export default Section; // Экспорт компонента Section
