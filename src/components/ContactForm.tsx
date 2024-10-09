import React, { useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ContactForm: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: 'easeInOut',
        },
      });
    } else {
      animation.start({
        opacity: 0,
        y: 50,
        transition: {
          duration: 0.8,
          ease: 'easeInOut',
        },
      });
    }
  }, [inView, animation]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-4"
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: 'easeInOut',
          },
        },
      }}
      initial="hidden"
      animate={animation}
    >
      <h2 className="text-2xl font-bold text-gray-800">Contact Me</h2>
      <form className="flex flex-col gap-4">
        <label htmlFor="name" className="block text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Name"
        />

        <label htmlFor="email" className="block text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Email"
        />

        <label htmlFor="message" className="block text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Message"
          rows={4}
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;