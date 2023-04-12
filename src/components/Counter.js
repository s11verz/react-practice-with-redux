import { useSelector, useDispatch  } from 'react-redux';
import { DECREMENT, INCREASE, INCREMENT, TOGGLE } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch=useDispatch();

  const counter= useSelector(state=>state.counter);
  const showCounter=useSelector(state=>state.showCounter);
  
  const incrementHandler=()=>{
dispatch({type:INCREMENT})
  }

  const decrementHandler=()=>{
    dispatch({type:DECREMENT})
  }

  const increaseHandler=()=>{
    dispatch({type:INCREASE, amount:5})
  }

  const toggleCounterHandler = () => {
    dispatch({type:TOGGLE})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={increaseHandler}>increase by 5</button>
      <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
