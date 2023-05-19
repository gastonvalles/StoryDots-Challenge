import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteProduct, updateProduct } from "../../redux/actions";
import styles from "./product-detail.module.css";
import { UilTrashAlt, UilRedo, UilArrowLeft } from "@iconscout/react-unicons";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const products = useSelector((state) => state.allProducts);
  const product = products.find((p) => p.id === id);

  if (!id) {
    return <p>Id not available</p>;
  }

  const handleButtonClick = () => {
    navigate("/");
  };

  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
    toast.success("Product deleted successfully!");
    navigate("/");
  };

  const handleUpdate = (product) => {
    const updatedProduct = { ...product, price: 100 };
    dispatch(updateProduct(updatedProduct));
  };

  return (
    <div className={styles.detailContainer}>
      <button className={styles.arrow} onClick={handleButtonClick}>
        <UilArrowLeft size="40" />
      </button>
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
            <div className={styles.buttons}>
              <button
                className={styles.updateButton}
                onClick={() => handleUpdate(product)}
              >
                <UilRedo />
              </button>
              <button className={styles.deleteButton} onClick={handleDelete}>
                <UilTrashAlt />
              </button>
            </div>
            <h2 className={styles.title}>
              <span className={styles.brand}>{product.Brand.name} </span>
              {product.name}
            </h2>
            <p className={styles.description}>{product.description}</p>
            <div className={styles.logoContainer}>
              <img
                className={styles.brandLogo}
                src={product.Brand.logo_url}
                alt="Not found"
              />
            </div>
            <div className={styles.price}>
              <span className={styles.span}>$ </span>
              {product.price}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <img className={styles.loading} src="/loading.svg" alt="Loading..." />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
