import withCount from "../../hoc/withCount";
const counterUI = (props) => {
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.incrCount}>Increment</button>
      <button onClick={props.decrCount}>Decrement</button>  
    </div>
  )
}

const Counter = withCount(counterUI);

export default Counter;