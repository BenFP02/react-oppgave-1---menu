import styles from "./Dish.module.css";

const Dish = ({ title, price, ingredients, category }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>
        <strong>Price:</strong> {price}
      </p>
      <p>
        <strong>Ingredients:</strong> {ingredients}
      </p>
      <p>
        <strong>Category:</strong> {category}
      </p>
    </div>
  );
};

export default Dish;
