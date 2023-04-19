import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../actions/cartAction";

const ProductCardContainer = styled.div`
  border: 1px solid #dedede;
  padding: 1rem;
  margin: 1rem;
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const ProductCard = ({ id, title, description, price, image }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id,
      title,
      description,
      price,
      image,
    }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <ProductCardContainer>
      <Link to={`/products/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{description}</p>
      <p>{price}</p>

      <img src={image} alt={title} />

      <button onClick={handleAddToCart}>Add to cart</button>
    </ProductCardContainer>
  );
};

export default ProductCard;
