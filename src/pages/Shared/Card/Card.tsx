import React, { useContext } from "react";
import Button from "../../../components/Button/Button";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const { name, image, price, recipe } = item;
  const navigate = useNavigate();
  const location = useLocation();

  const {user} = useContext(AuthContext);

  const handleAddToCart = item =>{
    console.log(item);
    if(user){
      fetch('http://localhost:5000/carts')
      .then(res => res.json())
      .then(data => {
        if(data.insertedIt){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    }
    else{
      Swal.fire({
        title: "Yor are not Logged In",
        text:"Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      });
    }
    
  };
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
        <div className="card-actions" onClick={()=> handleAddToCart(item)}>
          <Button buttonName={"Add To Cart"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
