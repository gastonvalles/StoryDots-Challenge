import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postProduct } from "../../redux/actions";
import styles from "./product-create.module.css";

const ProductCreate = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm();

  useEffect(() => {
    dispatch(postProduct())
  }, [dispatch])


  const onSubmit = (data) => {
    dispatch(postProduct(data));
    reset();
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Name:
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
          Description:
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
          Image URL:
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
          Price:
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
        />
        {
          errors.price && <p>{errors.price.message}</p>
        }
        <label htmlFor="BrandId" className={styles.label}>
          Brand ID:
        </label>
        <input
          type="number"
          id="BrandId"
          className={styles.input}
          {...register("BrandId", {
            required: "Brand Id required",
            maxLength: {
              value: 1,
              message: "Brand Id shouldn't have more than 1 character"
            }
          })
          }
        />
        {
          errors.BrandId && <p>{errors.BrandId.message}</p>
        }
        <button type="submit" className={styles.submitButton}>
          Create Product
        </button>
        {
          isSubmitSuccessful && <p>Successfully Created!</p>
        }
      </form>
    </div>
  );
};

export default ProductCreate;
