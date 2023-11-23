import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Featured from "../featured/Featured";
import Card from "../../Shared/Card/Card";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/menu/dessert-bg.jpeg";

const Home = () => {
  const [menu] = useMenu();
  const salad = menu.filter(item => item.category === 'drinks');

  return (
    <div>
      <Helmet><title>Super-Shop | Home</title></Helmet>
      <Banner></Banner>
      <Category></Category>
      <Cover img={coverImg} title={"Super Shope"} description={"Warm goats cheese and roasted vegetable salad with black olive tapenade crostiniPan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jusRoasted duck breast (served pink) with gratin potato"}></Cover>
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