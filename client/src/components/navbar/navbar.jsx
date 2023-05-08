import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts, getProductsByQuery } from "../../redux/actions";
import logo from "../images/storydots-white-logo.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const searchResults = useSelector((state) => state.products.searchResults);

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
        {searchResults && searchResults.length > 0 && (
          <ul>
            {searchResults.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.createContainer}>
        <Link to="/create/products" className={styles.productsLink}>
          <button className={styles.btn}>Crear producto</button>
        </Link>
        {/* <Link to="/create/brands" className={styles.brandsLink}>
          <button className={styles.btn}>Crear marca</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
