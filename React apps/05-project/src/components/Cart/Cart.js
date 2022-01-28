import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItem = (
    <ul>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name})</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItem}
      <div>
          <span>Total Amount</span>
          <span>35.30</span>
      </div>
      <div className={classes.action}>
          <button className={classes["button--alt"]}>Close</button>
          <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
