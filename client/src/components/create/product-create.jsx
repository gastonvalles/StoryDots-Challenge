import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postProduct } from "../../redux/actions";
import styles from "./product-create.module.css";

const ProductCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset, setError } = useForm();

  useEffect(() => {
    dispatch(postProduct())
  }, [dispatch])

  useEffect(() => {
    reset();
    setIsSuccess(false);
  }, [reset]);

  const onSubmit = async (data) => {
    try {
      await dispatch(postProduct(data));
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      setError("submit", {
        type: "manual",
        message: "Failed to create product",
      });
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Nombre:
        </label>
        <input
          type="text"
          id="name"
          className={styles.input}
          {...register("name", {
            required: "Name required",
            minLength: {
              value: 5,
              message: "Name should be at least 5 characters"
            },
            maxLength: {
              value: 50,
              message: "Name shouldn't have more than 50 characters"
            }
          })
          }
        />
        {
          errors.name && <p>{errors.name.message}</p>
        }
        <label htmlFor="description" className={styles.label}>
          Descripcion:
        </label>
        <textarea
          id="description"
          rows={3}
          className={styles.textarea}
          {...register("description", {
            required: "Description required",
            minLength: {
              value: 10,
              message: "Description must be at least 10 characters"
            },
            maxLength: {
              value: 255,
              message: "Description shouldn't have more than 255 characters"
            }
          })
          }
        />
        {
          errors.description && <p>{errors.description.message}</p>
        }
        <label htmlFor="image_url" className={styles.label}>
          Imagen URL:
        </label>
        <input
          type="url"
          id="image_url"
          className={styles.input}
          {...register("image_url")}
        />
        {
          errors.image_url && <p>{errors.image_url.message}</p>
        }
        <label htmlFor="price" className={styles.label}>
          Precio:
        </label>
        <input
          type="number"
          id="price"
          className={styles.input}
          {...register("price", {
            required: "Price should be a numer",
            minLength: {
              value: 3,
              message: "Price should be at least 3 characters"
            },
            maxLength: {
              value: 50,
              message: "Price shouldn't have more than 10 characters"
            }
          })
          }
          step="0.01"
        />
        {
          errors.price && <p>{errors.price.message}</p>
        }
        <label htmlFor="BrandId" className={styles.label}>
          Marca:
        </label>
        <select id="BrandId" {...register("BrandId")}>
          <option value="1">Razer</option>
          <option value="2">Logitech</option>
        </select>
        {errors.BrandId && <p>{errors.BrandId.message}</p>}
        {isSuccess && (
          <p className={styles.successMessage}>Product created successfully!</p>
        )}
        {errors.submit && <p>{errors.submit.message}</p>}
        <button type="submit" className={styles.button}>
          Crear Producto
        </button>
      </form>
    </div>
  );
};

export default ProductCreate;