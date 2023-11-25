import { useState } from "react";
import orderCoImg from "../../../assets/order/order.jpg";
import Cover from "../../../pages/Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { Helmet } from "react-helmet-async";


const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const drinks = menu.filter(item => item.category === 'drinks');
  return (
    <div>
      <Helmet><title>Super-Shop | Order Food</title></Helmet>
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
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel><OrderTab items={desserts}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={soup}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={pizza}></OrderTab></TabPanel>
        <TabPanel><OrderTab items={drinks}></OrderTab></TabPanel>
      </Tabs>
      
    </div>
  );
};

export default Order;
