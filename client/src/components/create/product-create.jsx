import { useState } from "react";
import styles from "./product-create.module.css";

const ProductCreate = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [brandId, setBrandId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      description,
      image_url: imageUrl,
      price,
      BrandId: brandId,
    };
    console.log(formData);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="description" className={styles.label}>
          Description:
        </label>
        <textarea
          id="description"
          className={styles.textarea}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label htmlFor="imageUrl" className={styles.label}>
          Image URL:
        </label>
        <input
          type="url"
          id="imageUrl"
          className={styles.input}
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />

        <label htmlFor="price" className={styles.label}>
          Price:
        </label>
        <input
          type="number"
          id="price"
          className={styles.input}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label htmlFor="brandId" className={styles.label}>
          Brand ID:
        </label>
        <input
          type="number"
          id="brandId"
          className={styles.input}
          value={brandId}
          onChange={(e) => setBrandId(e.target.value)}
          required
        />

        <button type="submit" className={styles.submitButton}>
          Create Product
        </button>
      </form>
    </div>
  );
};

export default ProductCreate;
