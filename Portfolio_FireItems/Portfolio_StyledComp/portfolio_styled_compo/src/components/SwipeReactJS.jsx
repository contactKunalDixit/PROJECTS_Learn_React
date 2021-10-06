import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
export default function SwipeReactJS() {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			slidesPerView={3}
			centeredSlides='true'
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide></SwiperSlide>
			<SwiperSlide></SwiperSlide>
			<SwiperSlide></SwiperSlide>
			<SwiperSlide></SwiperSlide>
		</Swiper>
	);
}
