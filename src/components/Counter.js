// import { DECREMENT, INCREMENT, TOGGLE, INCREASE } from '../utils/constants';
// import { increment, toggle, decrement, increase } from '../utils/helpers';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
// import { decrement } from '../utils/helpers';
// import { actions } from '../store/counterSlice';

import { toggle, increase, increment, decrement, decrease } from '../store/counterSlice';
const Counter = () => {
  const dispatch = useDispatch()
  const {isAuth} = useSelector(state => state.auth)
  const counter = useSelector(state => state.count.counter)
// const test = useSelector((state) => console.log(state))
const showCounter = useSelector((state) => state.count.toggle)


  const toggleCounterHandler = () => {
  dispatch(toggle())
  }
  ;
  const incrementHandler = () => {
    dispatch(increment())
  }
  const decrementHandler = () => {
    dispatch(decrement())
  }

  const increaseHandler = () => {
    dispatch(increase(10))
  }
  const decreaseHandler = () => {
    dispatch(decrease(20))
  }

  return (
 <>
 {isAuth &&     <main className={classes.counter}>
      <h1>Redux Counter</h1>
    {showCounter &&    <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    <button onClick={incrementHandler}>INCREMENT</button>
<button onClick={decrementHandler}>DECREMENT</button>
<button onClick={increaseHandler}>INCREASE BY 10</button>
<button onClick={decreaseHandler}>DECREASE BY 20</button>
    </main>}
</>
 
  );
};

export default Counter;
