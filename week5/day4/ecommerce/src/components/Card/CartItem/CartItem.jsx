import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../actions/cartAction";

const CartItemContainer = styled.div`
  border: 1px solid #dedede;
  padding: 1rem;
  margin: 1rem;
  width: 100%;
  height: auto;
  display: flex;
  gap: 1rem;
  border-radius: 10px;
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;

const CartItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`;

const CartItemAction = styled.div`
  margin-top: auto;
`;

const CartItem = ({ id, title, description, price, image, quantity }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <CartItemContainer>
      {quantity}
      <img src={image} alt={title} />
      <CartItemText>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{price}</p>

        <CartItemAction>
          <button onClick={() => handleRemove(id)}>Remove</button>
        </CartItemAction>
      </CartItemText>
    </CartItemContainer>
  );
};

export default CartItem;
