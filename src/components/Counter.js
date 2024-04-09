import {useSelector,useDispatch } from 'react-redux';
import {counterAction}from '../store/counter'

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state)=>state.counter.counter);
  const show = useSelector((state)=>state.counter.showCounter);
  

  function hadleIncrement(){
    dispatch(counterAction.increment())
  }
  function hadleDecrement(){
    dispatch(counterAction.decrement())
  }
  function hadleIncrease (){
    dispatch(counterAction.increase(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={hadleIncrement}>Increment</button>
        <button onClick={hadleIncrease}>Increase By 5</button>
        <button onClick={hadleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
