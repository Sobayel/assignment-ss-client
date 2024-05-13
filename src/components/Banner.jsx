
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from './Slide'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import img1 from '../assets/1st.jpg'
import img2 from '../assets/2nd.jpg'
import img3 from '../assets/3rd.jpg'
import img4 from '../assets/4th.jpg'
import img5 from '../assets/5th.jpg'
import img6 from '../assets/6th.jpg'


export default function Banner() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={img1}
            text='Introduction to Python Programming'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img2}
            text='Data Analysis with Pandas'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img3}
            text='Machine Learning Project'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img4}
            text='HTML and CSS Basics'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img5}
            text='Database Design and SQL Queries'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img6}
            text='Full-Stack Web Development Project'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}