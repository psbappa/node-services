import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement, toggleAuth } from '../../redux/actions__old'
import { increment, decrement } from '../../redux/slices/counterSlice';

export default function ReduxComponent() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  <h2>Counter: {counter}</h2>

  return (
    <div style={{marginTop: '50px'}}>
      <h3 style={{fontSize: '20px'}}>ReduxComponent</h3>
      
      <button onClick={() => dispatch(increment())} className='px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>+</button>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(decrement())} className='px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>-</button>
    </div>
  )
}
