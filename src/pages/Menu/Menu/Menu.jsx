import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import coverImg from "../../../assets/menu/banner3.jpg";
import ImgPizza from "../../../assets/menu/pizza-bg.jpg";
import ImgSalad from "../../../assets/menu/salad-bg.jpg";
import ImgSoup from "../../../assets/menu/soup-bg.jpg";
import ImgDessert from "../../../assets/menu/dessert-bg.jpeg";

const Menu = () => {

  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const offered = menu.filter(item => item.category === 'offered');
  const pizza = menu.filter(item => item.category === 'pizza');
  
  const itemDescription = offered.map(item => item.recipe);
  
  return (
    <>
      <Helmet><title>Super-Shop | Menu</title></Helmet>

      <Cover img={coverImg} title="Our Menu" description="Would you like to try a dish?"></Cover>
      {/* main cover */}
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory
        items={pizza}
        img={ImgPizza}
        title={"pizza"}
        description={itemDescription}
      ></MenuCategory>
      {/* salad menu items */}
      <MenuCategory
        items={salad}
        img={ImgSalad}
        title={"salad"}
        description={itemDescription}
      ></MenuCategory>
      {/* drinks menu items */}
      <MenuCategory
        items={desserts}
        img={ImgDessert}
        title={"desserts"}
        description={itemDescription}
      ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory
        items={soup}
        img={ImgSoup}
        title={"soup"}
        description={itemDescription}
      ></MenuCategory>
    </>
  );
};

export default Menu;