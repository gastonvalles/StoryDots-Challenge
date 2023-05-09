import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteProduct } from "../../redux/actions";
import styles from "./product-detail.module.css";

const ProductDetail = () => {
  const dispatch = useDispatch
  const { id } = useParams();
  const products = useSelector((state) => state.allProducts);
  const product = products[id - 1];
  
  if (!id) {
    return <p>Id not available</p>;
  }
  
  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
  };

  return (
    <div className={styles.detailContainer}>
      {product ? (
        <div className={styles.card}>
          <div className={styles.update}>
            <button className={styles.updateButton}>Update product</button>
          </div>
          <div className={styles.delete}>
            <button className={styles.deleteButton} onClick={() => {handleDelete}}>Delete product</button>
          </div>
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
