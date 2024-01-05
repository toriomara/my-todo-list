import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export const TasksPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash });
  };

  return (
    <section className='container'>
      <h1>TASKS</h1>
      <Link to='/'>Back Home</Link>
      <div className='counter'>
        {cash}
        <button className='btn-transparent' onClick={() => addCash(Number(prompt()))}>
          +
        </button>
        <button className='btn-transparent' onClick={() => getCash(Number(prompt()))}>
          -
        </button>
      </div>
      <button className='btn-primary' onClick={() => navigate(-1)}>
        Back
      </button>
    </section>
  );
};
