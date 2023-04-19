import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../../actions/cartAction'
import CartItem from '../../components/Card/CartItem/CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  // delete duplicate items and add quantity which there is no quantity in cart
  const cartList = cart.reduce((acc, item) => {
    // acc is the accumulator which is the array we are returning
    // find if item is already in the acc
    const found = acc.find((i) => i.id === item.id);

    // if found, increase quantity by 1
    if (found) {
      found.quantity += 1;
    } else {
      // if not found, add item to acc
      acc.push({ ...item, quantity: 1 });
    }
    // return acc
    return acc;
  }, []);

  return (
    <div>
      {
        cartList.map((item) => (
         <CartItem key={item.id} {...item}/>
        ))
      }
    </div>
  )
}

export default Cart