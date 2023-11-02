import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './style.css';

import featuredImg from '../../../assets/Banner/Banner 1.jpg'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
      heading="Featured Item"
      subHeading="check it out"
      ></SectionTitle>

      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2024</p>
          <p className=" uppercase">Where can i get some?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem eaque, neque similique deleniti quibusdam voluptatum quas. Quo impedit doloremque labore exercitationem ducimus ex suscipit cupiditate? Totam, quibusdam autem ea assumenda libero, eaque reiciendis molestias perferendis blanditiis ut alias est?</p>
          <button className="btn btn-outline border-0 border-b-4 text-white mt-5 ">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;