import React from 'react';

const Model: React.FC = () => { // Функциональный компонент Model
  return (
    // Контейнер для модели
    <div className="bg-gray-200 p-16"> 
    {/* Заголовок */}
      <h1>3D Model</h1> 
      {/* // Плейсхолдер для модели */}
      <p>Здесь будет 3D-модель</p> 
    </div>
  );
};

export default Model; // Экспорт компонента Model
