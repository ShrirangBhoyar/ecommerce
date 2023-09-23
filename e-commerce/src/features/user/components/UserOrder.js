import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchLoggedInUserOrdersAsync, selectUserOrders } from '../userSlice';
import { selectLoggedInUser } from '../../auth/authSlice';




export default function UserOrders() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const orders =useSelector(selectUserOrders);
  console.log(user);
  console.log(orders);

  useEffect(()=>{
    dispatch(fetchLoggedInUserOrdersAsync(user.id))
  },[]);

  return (
    <div>
      {orders.map(order=>(
      <div>
      <h1 className='p-24 text-xl'> {order.id}</h1>
      </div>
      ))}
    </div>
  );
}
