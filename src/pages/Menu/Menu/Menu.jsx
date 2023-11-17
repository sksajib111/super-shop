import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";


const Menu = () => {
  const images = "https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
  return (
    <>
    
      <Helmet><title>Menu</title></Helmet>
      <Cover img={images} title="Our Menu"></Cover>
    </>
  );
};

export default Menu;