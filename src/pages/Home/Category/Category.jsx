import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/categoryImage/slide1.jpg';
import slide2 from '../../../assets/categoryImage/slide2.jpg';
import slide3 from '../../../assets/categoryImage/slide3.jpg';
import slide4 from '../../../assets/categoryImage/slide4.jpg';
import slide5 from '../../../assets/categoryImage/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
  return (
    <>
    <section>
      <SectionTitle 
      subHeading={"From 11.00am to 10.00 pm"}
      heading={"Order Online"}
      ></SectionTitle>
      <Swiper
     slidesPerView={3}
     spaceBetween={30}
     pagination={{
       clickable: true,
     }}
     modules={[Pagination]}
     className="mySwiper mb-10 rounded-2xl"
    >
      <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
    </Swiper>
    </section>
   </>
  );
};

export default Category;