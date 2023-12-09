import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useState } from 'react';
import { useEffect } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <section>
            <SectionTitle
                subHeading={'What our Client Say'}
                heading={'Testimonials'}
            ></SectionTitle>

     <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(review => 
            <SwiperSlide
            key={review._id}> 
                <div className='p-[30px] mb-10'>
                    <FaQuoteLeft className='text-6xl mb-5 m-auto'></FaQuoteLeft>
                    <Rating
                    className='w-2 m-auto'
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    onChange={0}
                    />
                    <p className='text-center my-6 px-[50px]'>{review.details}</p>
                    <h2 className='text-center text-2xl text-orange-500'>{review.name}</h2>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
     </>

        </section>
    );
};

export default Testimonials;