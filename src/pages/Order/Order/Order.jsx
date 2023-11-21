import { useState } from "react";
import orderCoImg from "../../../assets/order/order.jpg";
import Cover from "../../../pages/Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
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
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-4 ">
          {
            salad.map(item => <Card key={item._id} item={item}></Card>)
          }
          </div>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>

      <div className=" md:p-12 sm:p-6 ">
      
      </div>
      
    </div>
  );
};

export default Order;
