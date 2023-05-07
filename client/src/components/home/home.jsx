import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { getAllBrands, getAllProducts } from "../../redux/actions";
import Card from "../card/card";
import styles from "./home.module.css";

SwiperCore.use([Navigation, Autoplay]);

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((store) => store.allProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllBrands()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  return (
    <div className={styles.home}>
      {loading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <div className={styles.container}>
          <Swiper
            spaceBetween={10}
            slidesPerView={3.5}
            centeredSlides={true}
            loop={true}
            loopAdditionalSlides={2}
            navigation={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="swiper"
          >
            {allProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <Card product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Home;
