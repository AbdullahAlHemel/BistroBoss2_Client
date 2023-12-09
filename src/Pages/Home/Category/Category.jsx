
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <div className=''>
          <SectionTitle
           subHeading={"From 11.00am to 10.00pm"}
           heading={"Order Online"}
           ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='w-full'>
          <img src={slide1} alt="" />
          <h3 className='text-3xl uppercase text-center -mt-16 text-white font-bold'>Salad</h3>
          </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className='text-3xl uppercase text-center -mt-16 text-white font-bold'>Soup</h3>
          </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className='text-3xl uppercase text-center -mt-16 text-white font-bold'>Pizzas</h3>
          </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className='text-3xl uppercase text-center -mt-16 text-white font-bold'>Dessert</h3>
          </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className='text-3xl uppercase text-center -mt-16 text-white font-bold'>Salads</h3>
          </SwiperSlide>

      </Swiper>
    </div>
    );
};

export default Category;