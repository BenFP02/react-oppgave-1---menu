import Dish from "./Dish";
import styles from "./Menu.module.css";

const Menu = ({ dishes }) => {
  const categories = ["Starter", "Main Course", "Dessert"];

  const grouped = categories.map((cat) => ({
    name: cat,
    items: dishes.filter((dish) => dish.category === cat),
  }));

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.categoryRow}>
        {grouped.map((group) => (
          <div className={styles.categoryGroup} key={group.name}>
            <h2 className={styles.categoryTitle}>{group.name}</h2>
            <div className={styles.grid}>
              {group.items.map((dish) => (
                <Dish key={dish.id} {...dish} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
