import React from 'react';

const Button = ({buttonName}) => {
  return (
    <button className="btn btn-outline border-0 border-b-4 text-yellow-500 mt-5 ">{buttonName}</button>
  );
};

export default Button;