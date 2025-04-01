import React from 'react';

const Button = ({ text, onClick, className, type = "button" }) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`px-4 py-2 border border-black text-black hover:bg-slate-600 rounded-md ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
