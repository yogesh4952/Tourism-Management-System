import React from 'react';

export default function Logo() {
  return (
    <div className='flex items-center gap-3 p-3'>
      {/* Mountain SVG Icon */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='w-10 h-10 text-[#0F4C75] dark:text-[#2E8B57] transition-all duration-300'
      >
        <path d='M3 20h18l-9-16zM3 20l9-12 9 12H3z' />
      </svg>

      {/* Nepal Yatra Text */}
      <h1 className='text-3xl font-extrabold tracking-wide text-primary transition-all duration-300 hover:scale-105'>
        नेपाल यात्रा
      </h1>
    </div>
  );
}
