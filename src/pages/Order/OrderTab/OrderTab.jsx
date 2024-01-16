import Card from "../../Shared/Card/Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTab = ({items}) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
      
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        {items.map((item) => (
        <Card key={item._id} item={item}></Card>
      ))}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;
