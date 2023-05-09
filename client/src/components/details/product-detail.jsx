import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteProduct } from "../../redux/actions";
import styles from "./product-detail.module.css";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const products = useSelector((state) => state.allProducts);
  const product = products.find((p) => p.id === id);
  
  if (!id) {
    return <p>Id not available</p>;
  }
  
  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
    toast.success("Product deleted successfully!");
    navigate("/");
  };

  return (
    <div className={styles.detailContainer}>
      {product ? (
        <div className={styles.card}>
          <div className={styles.update}>
            <button className={styles.updateButton}>Update</button>
          </div>
          <div className={styles.delete}>
            <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
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
        <div>
            <img
              className={styles.loading}
              src="/loading.svg"
              alt="Loading..."
            />
          </div>
      )}
    </div>
  );
};

export default ProductDetail;
