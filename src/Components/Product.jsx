import React from 'react';
import { useParams } from 'react-router-dom';
import useDataFetch from '../utils/useDataFetch';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import './product.css';

const Product = () => {
  const { id } = useParams();

  const data = useDataFetch(id);
  const dispatch = useDispatch();
  const handleClick = () => {
      dispatch(addItem(data));
  }

  return data === null ?
    <div className='parent'>
      <div className='child'></div>
      <div className='child'></div>
    </div>
    : (
      <div className='main'>
        <div className='image-container'>
          <img src={data.image} alt={data.title} />
        </div>
        <div className='detail-container'>
          <h1>{data.title}</h1>
          <h2 className="price">{"₹ " + Math.ceil(data.price) + ".00"}</h2>
          <h2 className="description-heading">Description:</h2>
          <p className="description">{data.description}</p>
          <div className='flex items-center justify-center mt-10'>
            <button className='bg-white uppercase text-3xl font-bold text-black px-4 py-1 rounded-md' onClick={() => handleClick()}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
}

export default Product;
