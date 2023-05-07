import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./product-detail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.allProducts);
  const product = products[id - 1];

  if (!id) {
    return <p>Id not available</p>;
  }

  return (
    <div className={styles.detailContainer}>
      {product ? (
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image_url}
              src={product.image_url}
              alt="Not found"
            />
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.title}>
              <img
                className={styles.brandLogo}
                src={product.Brand.logo_url}
                alt="Not found"
              />
              <h2 className={styles.name}>
                {product.Brand.name} {product.name}
              </h2>
            </div>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>${product.price}</p>
          </div>
        </div>
      ) : (
        <p className={styles.loading}>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
