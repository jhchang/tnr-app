import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, onClick }) {
  return (
    <motion.button
      transition={{
        duration: 0.125,
        ease: 'easeInOut',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: 0.9,
        rotate: '2.5deg',
      }}
      className='rounded-md bg-slate-800 py-4 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-600 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2'
      type='button'
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
