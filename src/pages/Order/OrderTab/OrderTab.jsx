import Card from "../../Shared/Card/Card";

const OrderTab = ({items}) => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
      {items.map((item) => (
        <Card key={item._id} item={item}></Card>
      ))}
    </div>
  );
};

export default OrderTab;
