import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts, getProductsByQuery } from "../../redux/actions";
import logo from "../images/storydots-white-logo.png";
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
