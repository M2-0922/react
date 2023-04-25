import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../../actions/productAction';
import ProductCard from '../../components/Card/ProductCard';

import styled from 'styled-components';

const ProductSection = styled.div`
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;


const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);
  const isLoading = useSelector(state => state.product.isLoading);

  useEffect(() => {
    if(products.length > 0) return;
    dispatch(fetchProduct())
  }, [])

  return (
    <ProductSection>
      {
        isLoading 
        ? 
        <h3>Loading...</h3>
        :
        products.map(product => <ProductCard key={product.id} {...product} />)
      }
    </ProductSection>
  )
}

export default Products