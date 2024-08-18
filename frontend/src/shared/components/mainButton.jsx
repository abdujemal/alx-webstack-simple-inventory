import React from 'react';

const MainButton = ({text, onTap, isLoading=false, isSubmit=false}) => {
  if(isSubmit){
    return (
      <button type='submit' className={`${isLoading ? "cursor-wait" : "cursor-pointer"} hover:bg-secondary self-center ${isLoading ? "bg-secondary" : "bg-primary" }  py-2.5 mt-6 max-w-full text-xl font-extrabold text-white whitespace-nowrap rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[183px]`}>
          {isLoading ? "Loading..." : text}
      </button>
    );
  }else{
    return (
      <div onClick={()=>isLoading ? ()=>{} :onTap} className={`${isLoading ? "cursor-wait" : "cursor-pointer"} hover:bg-secondary self-center ${isLoading ? "bg-secondary" : "bg-primary" } px-16 py-2.5 mt-6 max-w-full text-xl font-extrabold text-white whitespace-nowrap rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[183px]`}>
          {isLoading ? "Loading" : text}
      </div>
    );
  }
  
}

export default MainButton;
