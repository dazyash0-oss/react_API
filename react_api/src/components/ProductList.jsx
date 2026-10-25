import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productsSlice';
import { addToCart } from '../store/cartSlice';

export const ProductList = () => {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading products via createAsyncThunk...</div>;
  if (status === 'failed') return <div>Error loading products: {error}</div>;

  return (
    <section>
      <h2>Products (Redux Async Thunk)</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} width="100" height="100" />
            <h3>{product.title.slice(0, 20)}...</h3>
            <p>${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};