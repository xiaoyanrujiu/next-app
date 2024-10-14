"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import styles from "./index.module.scss";

// 导入 Swiper 的 CSS 样式
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

/**
 * @description: 首页大图轮播图
 */
const HomeBannerSwiper = () => {
  const dataList = [
    "http://121.37.133.252:9000/picture/2024/09/18/ee280e1391414531b11c2b3481cf6b33.png",
    "http://121.37.133.252:9000/picture/2024/09/18/a77f150868934f3e9a890bd0e629f0b8.png",
    "http://121.37.133.252:9000/picture/2024/09/18/371460053f3f4886b6c2046c9fe52bbf.png",
  ];

  return (
    <div className={styles.homeSwiper}>
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1} // 同时显示5张图片
        slidesPerGroup={1} // 每次滑动5张图片
        loop={true} // 循环播放
        autoplay={{
          delay: 3000, // 设置每次自动播放的延迟时间
          disableOnInteraction: false, // 用户交互后继续自动播放
        }}
        navigation={true}
        speed={1000}
      >
        {dataList.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item}
              alt="img"
              draggable={false}
              className="w-full h-calc-100vh-minus-3-5rem object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBannerSwiper;
