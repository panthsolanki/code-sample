import { useState } from "react";

const withCount = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const incrCount = () => {         
      setCount((c) => c = c+1);
    };

    const decrCount = () => {
      setCount((c) => c = c-1);
    };
    return (
      <WrappedComponent
        count={count}
        incrCount={incrCount}
        decrCount={decrCount}
        {...props}
      />
    );
  };
};

export default withCount;
