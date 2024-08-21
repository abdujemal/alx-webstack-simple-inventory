import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className=" z-30 flex justify-center items-center w-30 h-40 overflow-hidden">
    <div className="relative mx-auto">
      {/* Outer Ring */}
      <div className="absolute inset-0 w-14 h-14 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-400 animate-spin-fast"></div>
      
      {/* Middle Ring */}
      <div className="absolute inset-2 w-10 h-10 rounded-full border-4 border-transparent border-t-purple-500 border-l-purple-400 animate-spin-slower"></div>
      
      {/* Inner Ring */}
      <div className="absolute inset-4 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-bounce shadow-lg"></div>
      
      {/* Core */}
      {/* <div className="w-8 h-8 bg-white rounded-full border-2 border-blue-500 shadow-md"></div> */}
    </div>
   </div>
  );
};

export default LoadingSpinner;
