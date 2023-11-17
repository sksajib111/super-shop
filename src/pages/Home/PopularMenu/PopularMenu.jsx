import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Button from "../../../components/Button/Button";



const PopularMenu = () => {

  const [menu, setMenu] = useState([]);

  useEffect(()=>{
    fetch('menu.json')
    .then(data => data.json())
    .then(data => {
      const popularItem = data.filter(item => item.category === 'popular');
      setMenu(popularItem)})
  },[])
  return (
    <section className="mb-12">
      <SectionTitle
      heading="From Our Menu"
      subHeading="Popular Items"
      >
      </SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {
          menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
      <div className="text-center "><Button buttonName={"View Full Menu"}></Button></div>
    </section>
  );
};

export default PopularMenu;