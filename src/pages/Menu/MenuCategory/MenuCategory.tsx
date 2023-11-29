import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Button from "../../../components/Button/Button";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, img, title, description }) => {

  return (
    <>
      {title && <Cover img={img} title={title} description={description}></Cover>}
      <section className="mb-12 mt-12">
        <div className="grid md:grid-cols-2 gap-10">
          {items.map(item => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          <Link to={`/order/${title}`}>
          <Button buttonName={"View Full Menu"}></Button>
          </Link>
        </div>
      </section> 
    </>
  );
};

export default MenuCategory;
