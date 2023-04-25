import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../actions/cartAction';

const CartCardContainer = styled.div`
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

const CartCard = ({ id, title, price, description, category, image }) => {
    const dispatch = useDispatch();
    const handleRemove = () => {
        const data = {
            id,
            title,
            price,
            description,
            category,
            image
          }
        dispatch(removeFromCart(data))
    }
  return (
    <CartCardContainer>
        <img src={image} alt={id + " " + title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p><b>Price:</b> {price}</p>
        <p><b>Category:</b> {category}</p>
        <button onClick={handleRemove}>Remove from Cart</button>
    </CartCardContainer>
  )
}

export default CartCard