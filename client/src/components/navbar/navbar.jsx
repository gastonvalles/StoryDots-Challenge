import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts, getProductsByName } from "../../redux/actions";
import logo from "../images/storydots-no-bg.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  function handleInputChange(e) {
    dispatch(getProductsByName(e));
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <button className={styles.btnLogo}>
            <img className={styles.logo} src={logo} alt="logo" />
          </button>
        </Link>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <input
            className={styles.searchInput}
            value={name}
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setName(e.target.value);
              handleInputChange(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.createContainer}>
        <Link to="/create/products" className={styles.productsLink}>
          <button className={styles.btn}>Crear producto</button>
        </Link>
        <Link to="/create/brands" className={styles.brandsLink}>
          <button className={styles.btn}>Crear marca</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
