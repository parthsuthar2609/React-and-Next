import React from 'react';
import Language from '../Language/Language';

const Navbar = () => {
  return (
    <div>
      <div className='bg-black max-w-screen h-12 flex items-center justify-evenly'>
        <Language />
      </div>
    </div>
  );
};

export default Navbar;
