import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className=" cursor-pointer self-center text-4xl text-center font-leckerli text-white">
    <Link to={'/'}>Inventory</Link>
    </div>
  );
}

export default Logo;
