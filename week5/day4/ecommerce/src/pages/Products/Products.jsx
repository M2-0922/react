import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../actions/productActions";
import ProductCard from "../../components/Card/ProductCard/ProductCard";

const ProductContainer = styled.div`
  padding: 1rem 2rem;
`;

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.isLoading);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    if(products.length > 0) return;
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ProductContainer>
      <h1>Products</h1>
      <ProductListContainer>
      {loading && <h2>Loading...</h2>}
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} {...product}/>
        ))}
      </ProductListContainer>
    </ProductContainer>
  );
};

export default Products;
