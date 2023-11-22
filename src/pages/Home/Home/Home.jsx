import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Featured from "../featured/Featured";
import Card from "../../Shared/Card/Card";
import useMenu from "../../../hooks/useMenu";


const Home = () => {
  const [menu] = useMenu();
  const salad = menu.filter(item => item.category === 'salad');

  return (
    <div>
      <Helmet><title>Super-Shop | Home</title></Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <div className="grid md:grid-cols-3 gap-4">
      {salad.map((item) => (
        <Card key={item._id} item={item}></Card>
      ))}
    </div>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;