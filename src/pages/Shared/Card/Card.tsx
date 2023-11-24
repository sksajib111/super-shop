import React from 'react';
import Button from "../../../components/Button/Button";

const Card = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    
    <div className="card w-96 bg-base-100 shadow-lg">
    <figure className="px-8 pt-8">
      <img src={image} alt="Shoes" className="rounded-xl" />
    </figure>
    <p className=" absolute right-0 mr-16 mt-12 pr-3 pl-3 bg-slate-900 rounded-3xl text-yellow-500">
      ${price}
    </p>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{name}</h2>
      <p>{recipe}</p>
      <div className="card-actions">
        <Button buttonName={"Add To Cart"}></Button>
      </div>
    </div>
   </div>
  );
};

export default Card;
