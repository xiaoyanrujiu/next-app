"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./index.module.scss";

// 导入 Swiper 的 CSS 样式
import "swiper/css";
import "swiper/css/autoplay";

/**
 * @description: 首页产品轮播图
 */
const HomeProductSwiper = () => {
  const dataList = {
    up: [
      "http://121.37.133.252:9000/picture/2024/09/18/ee280e1391414531b11c2b3481cf6b33.png",
      "http://121.37.133.252:9000/picture/2024/09/18/a77f150868934f3e9a890bd0e629f0b8.png",
      "http://121.37.133.252:9000/picture/2024/09/18/371460053f3f4886b6c2046c9fe52bbf.png",
      "http://121.37.133.252:9000/picture/2024/09/18/ee280e1391414531b11c2b3481cf6b33.png",
      "http://121.37.133.252:9000/picture/2024/09/18/a77f150868934f3e9a890bd0e629f0b8.png",
      "http://121.37.133.252:9000/picture/2024/09/18/371460053f3f4886b6c2046c9fe52bbf.png",
      "http://121.37.133.252:9000/picture/2024/09/18/ee280e1391414531b11c2b3481cf6b33.png",
      "http://121.37.133.252:9000/picture/2024/09/18/a77f150868934f3e9a890bd0e629f0b8.png",
      "http://121.37.133.252:9000/picture/2024/09/18/371460053f3f4886b6c2046c9fe52bbf.png",
      "http://121.37.133.252:9000/picture/2024/09/18/371460053f3f4886b6c2046c9fe52bbf.png",
    ],
    down: [
      "http://121.37.133.252:9000/picture/2024/09/18/ee280e1391414531b11c2b3481cf6b33.png",
      "http://121.37.133.252:9000/picture/2024/09/18/a77f150868934f3e9a890bd0e629f0b8.png",
      "http://121.37.133.252:9000/picture/2024/09/18/371460053f3f4886b6c2046c9fe52bbf.png",
      "http://121.37.133.252:9000/picture/2024/09/18/ee280e1391414531b11c2b3481cf6b33.png",
      "http://121.37.133.252:9000/picture/2024/09/18/a77f150868934f3e9a890bd0e629f0b8.png",
      "http://121.37.133.252:9000/picture/2024/09/18/371460053f3f4886b6c2046c9fe52bbf.png",
      "http://121.37.133.252:9000/picture/2024/09/18/ee280e1391414531b11c2b3481cf6b33.png",
      "http://121.37.133.252:9000/picture/2024/09/18/a77f150868934f3e9a890bd0e629f0b8.png",
      "http://121.37.133.252:9000/picture/2024/09/18/371460053f3f4886b6c2046c9fe52bbf.png",
      "http://121.37.133.252:9000/picture/2024/09/18/371460053f3f4886b6c2046c9fe52bbf.png",
    ],
  };

  return (
    <div className={styles.homeSwiper}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10} // 图片间距
        slidesPerView={5} // 同时显示5张图片
        slidesPerGroup={5} // 每次滑动5张图片
        loop={true} // 循环播放
        autoplay={{
          delay: 0, // 设置每次自动播放的延迟时间
          disableOnInteraction: false, // 用户交互后继续自动播放
        }}
        speed={20000}
        className="w-[1240px]"
      >
        {dataList.up.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item}
              alt="img"
              draggable={false}
              className="w-60 h-60 rounded-md"
            />
          </SwiperSlide>
        ))}
        <div className="left-mask"></div>
        <div className="right-mask"></div>
      </Swiper>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10} // 图片间距
        slidesPerView={5} // 同时显示5张图片
        slidesPerGroup={5} // 每次滑动5张图片
        loop={true} // 循环播放
        autoplay={{
          delay: 0, // 设置每次自动播放的延迟时间
          disableOnInteraction: false, // 用户交互后继续自动播放
          reverseDirection: true, // 启用反方向循环
        }}
        speed={20000}
        className="w-[1240px] mt-[10px]"
      >
        {dataList.down.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item}
              alt="img"
              draggable={false}
              className="w-60 h-60 rounded-md"
            />
          </SwiperSlide>
        ))}
        <div className="left-mask"></div>
        <div className="right-mask"></div>
      </Swiper>
    </div>
  );
};

export default HomeProductSwiper;
