import { useState } from "react";
import orderCoImg from "../../../assets/order/order.jpg";
import Cover from "../../../pages/Shared/Cover/Cover";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "../../Shared/Card/Card";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import useMenu from "../../../hooks/useMenu";


const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const offered = menu.filter(item => item.category === 'offered');
  const pizza = menu.filter(item => item.category === 'pizza');

  return (
    <div>
      <Cover
        img={orderCoImg}
        title={"Order Food"}
        description={"Would you like to try a dish?"}
      ></Cover>

      <Tabs style={{padding:"70px 0px 30px 0px"}} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList style={{fontSize:"24px", font:"bold", textAlign:"center", textDecoration:"none", color:"goldenrod"}}>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks </Tab>
        </TabList>
      </Tabs>

      <div className=" md:p-12 sm:p-6 ">
      <Card cartImg={pizzaImg} description={"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."} title={"Pizza"} btnTitle={"Order Now"}></Card>
      </div>
      
    </div>
  );
};

export default Order;
