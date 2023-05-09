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
  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllBrands()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);

  const handleDeleteProduct = (productId) => {
    const newProducts = products.filter((product) => product.id !== productId);
    setProducts(newProducts);
  };

  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);

  return (
    <>
      <h2 className={styles.title}><span className={styles.tittleColor}>Permite</span > regalar online</h2>
      <div className={styles.home}>
        {loading ? (
          <div>
            <img
              className={styles.loading}
              src="/loading.svg"
              alt="Loading..."
            />
          </div>
        ) : (
          <div className={styles.container}>
            <Swiper
              spaceBetween={20}
              slidesPerView={3.5}
              centeredSlides={true}
              loop={true}
              loopAdditionalSlides={2}
              navigation={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: true }}
              pagination={{ clickable: true }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <Card product={product} onDelete={handleDeleteProduct} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
