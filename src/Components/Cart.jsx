import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const NewCard = ({ url, detail, name, star }) => {
  return (
    <>
      <div className=' flex justify-between w-8/12 h-[40vh] mx-auto my-5'>
        <div className='overflow-hidden mr-10 rounded-2xl w-5/12 h-[100%] p-3'>
          <img src={url} className='rounded-2xl' />
        </div>
        <div>
          <h1 className=' font-bold text-3xl'>{name}</h1>
          <h2 className=' mt-4 font-thin'>{detail}</h2>
          <p className=' mt-10 font-bold text-3xl'>{star}</p>
        </div>
      </div>
    </>
  )
}

const Cart = () => {
  const data = useSelector((state) => state.cart.items)
  // console.log(data);
  return (
    <div className=' mt-10'>
      {
        data.map((res) => {
          return <NewCard url={res.image} detail={res.category} name={res.title} star={"₹" + Math.ceil(res.price)} />
          })
      }
      <div className=' w-8/12 mx-auto text-center bg-white text-black rounded-sm py-4 mt-10'>
        <h1 className=' font-bold text-3xl'>Total</h1>
      </div>
    </div>
  )
}

export default Cart