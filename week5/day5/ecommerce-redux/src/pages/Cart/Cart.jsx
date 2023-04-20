import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../../components/Card/CartCard';
import styled from 'styled-components';

const CartSection = styled.div`
  text-align:start;
  padding: 1rem 2rem;
`;

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);
  const total = useSelector(state => state.cart.total);

  console.log(cart);
  return (
    <CartSection>
      <h1>Cart</h1>
      <p>Your cart value is ${total}</p>
      <br />
      {
        cart.map((item, index) => <CartCard key={index} {...item} />)
      }
    </CartSection>
  )
}

export default Cart