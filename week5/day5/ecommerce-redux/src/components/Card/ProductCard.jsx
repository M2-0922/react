import React from 'react'
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { addToCart } from '../../actions/cartAction';

const ProductCardContainer = styled.div`
    border: 1px solid #dedede;
    padding: 1rem;
    text-align: start;
    display: flex;
    flex-direction: column;
    gap: 12px;
    img{
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: top;
    }
    button{
        margin-top: auto;
        height: 32px;
    }
`;

const ProductCard = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const data = {
      id,
      title,
      price,
      description,
      category,
      image
    }
    dispatch(addToCart(data))
  }

  return (
    <ProductCardContainer>
        <img src={image} alt={id + " " + title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p><b>Price:</b> {price}</p>
        <p><b>Category:</b> {category}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
    </ProductCardContainer>
  )
}

export default ProductCard