import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import useCheckInternet from '../utils/useCheckInternet';
import Shimmer from './Shimmer';
import './body.css';

const Body = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);

  const Internet = useCheckInternet();

  if(!Internet) return(
    <h1>Internet check krlo guys !!!!!</h1>
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setOriginalData(data);
      setFilteredData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const updateUI = (category) => {
    const filterData = originalData.filter((item) => item.category === category);
    setFilteredData(filterData);
  };

  const findItem = (query) => {
    const filterData = originalData.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredData(filterData);
  }

  const resetData = () => {
    setFilteredData(originalData);
  };

  if (loading) return <Shimmer />;

  return (
    <div className='Main-Container'>
      {/* Search-Bar */}
      <div className='Search-Bar'>
        <div style={{ "display": "flex", "height": "30px", "alignItems": "center", "background": "white", "borderRadius": "10px", "overflow": "hidden" }}>
          <input style={{ "padding": "4px 5px", "border": "0px solid white" }} placeholder="Search Items" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
          <h2 style={{ "backgroundColor": "white", "borderRadius": "10px", "cursor": "pointer" }} onClick={() => { findItem(searchText) }}>🔎</h2>
        </div>
        <div className='Filters'>
          <button onClick={resetData}>All</button>
          <button onClick={() => updateUI("men's clothing")}>Men's Clothing</button>
          <button onClick={() => updateUI("women's clothing")}>Women's Clothing</button>
          <button onClick={() => updateUI("jewelery")}>Jewelery</button>
          <button onClick={() => updateUI("electronics")}>Electronics</button>
        </div>
      </div>
      {/* Card-Container */}
      <div className='Card-Container'>
        {/* Cards */}
        {filteredData.map((res) => (
          <Link key={res.id} to={"/products/" + res.id}>
            <Card url={res.image} detail={res.category} name={res.title} star={"₹" + Math.ceil(res.price)} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
