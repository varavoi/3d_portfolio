import React from 'react';

const Header: React.FC = () => { // Функциональный компонент Header
  return (
    <header className="bg-gray-800 text-white p-4">  
      <div className="container mx-auto flex justify-between items-center"> 
        <h1 className="text-2xl font-bold">My Portfolio</h1> 
        <nav> 
          <ul className="flex gap-4"> 
            <li>
            {/* // Ссылка на главную страницу */}
              <a href="#">Home</a> 
            </li>
            <li>
            {/* // Ссылка на страницу "About" */}
              <a href="#">About</a> 
            </li>
            <li>
            {/* // Ссылка на страницу "Contact" */}
              <a href="#">Contact</a> 
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; // Экспорт компонента Header
