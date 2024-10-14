import HomeBannerSwiper from "@/components/home/home-banner-swiper";
import HomeProductSwiper from "@/components/home/home-product-swiper";

export default function Home() {
  return (
    <div>
      <HomeBannerSwiper />
      <div className="layout-container">
        <div className="my-32">
          <HomeProductSwiper />
        </div>
      </div>
    </div>
  );
}
