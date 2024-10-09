import React from 'react';

const Footer: React.FC = () => { // Функциональный компонент Footer
  return (
    <footer className="bg-gray-800 text-white p-4 mt-16"> 
      <div className="container mx-auto text-center"> 
        <p>&copy; 2023 My Portfolio. All rights reserved.</p> 
      </div>
    </footer>
  );
};

export default Footer; // Экспорт компонента Footer
