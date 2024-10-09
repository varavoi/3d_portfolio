import React from 'react';

const ContactForm: React.FC = () => { // Функциональный компонент ContactForm
  return (
    // Контактная форма 
        <form className="flex flex-col gap-4"> 
      <label htmlFor="name" className="block text-gray-600">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" // Поле ввода имени
        placeholder="Your Name"
      />

      <label htmlFor="email" className="block text-gray-600">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" // Поле ввода email
        placeholder="Your Email"
      />

      <label htmlFor="message" className="block text-gray-600">
        Message
      </label>
      <textarea
        id="message"
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
    // Поле ввода сообщения
        placeholder="Your Message"
        rows={4}
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" // Кнопка отправки
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm; // Экспорт компонента ContactForm
