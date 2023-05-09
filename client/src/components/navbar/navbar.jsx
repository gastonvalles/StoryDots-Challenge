import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts, getProductsByQuery } from "../../redux/actions";
import styles from "./navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  function handleInputChange(e) {
    const value = e.target.value;
    setName(value);
    dispatch(getProductsByQuery(value));
  }

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <div className={styles.logoContainer}></div>
      </Link>
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <input
            className={styles.searchInput}
            value={name}
            type="text"
            placeholder="Buscar..."
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
      </div>
      <div className={styles.createContainer}>
        <Link to="/create/products" className={styles.productsLink}>
          <button className={styles.btn}>Crear producto</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
