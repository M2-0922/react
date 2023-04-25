import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../slice/cartSlice";
//  Write a React component that displays the current items in the cart and provides a form to add new items, as well as buttons to remove existing items.

const Cart = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: "",
    name: "",
    price: "",
  });
  const cart = useSelector((state) => state.cart.cart);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(addItem(data));

    setData({
      id: "",
      name: "",
      price: "",
    });
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id))
  }

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <h5>{item.name}</h5>
          <button onClick={() => handleRemove(item.id)}>Delete</button>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={data.id}
          type="text"
          name="id"
          id="itemId"
        />
        <input
          onChange={handleChange}
          value={data.name}
          type="text"
          name="name"
          id="itemName"
        />
        <input
          onChange={handleChange}
          value={data.price}
          type="text"
          name="price"
          id="itemPrice"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Cart;
