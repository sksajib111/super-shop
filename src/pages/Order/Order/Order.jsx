import orderCoImg from '../../../assets/order/order.jpg';
import Cover from '../../../pages/Shared/Cover/Cover';

const Order = () => {
  return (
    <div>
      <Cover img={orderCoImg} title={"Order Food"} description={"Would you like to try a dish?"}></Cover>
      <h1>This is Order page</h1>
    </div>
  );
};

export default Order;