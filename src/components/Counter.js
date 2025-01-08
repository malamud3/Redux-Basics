import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/conter';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  // const incrementHandler = () => {
  //   dispatch({ type: 'increment', amount: 5 });
  // };
  // const decrementHandler = () => {
  //   dispatch({ type: 'decrement', amount: 1 });
  // };

  // const toggleCounterHandler = () => {
  //   dispatch({ type: 'toggle' });
  // };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementPaylodHandler = () => {
    dispatch(counterActions.increment(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
