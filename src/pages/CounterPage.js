import React, { useState, useEffect } from "react";
import Button from "../components/Button";

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log(count);
  }, [count]);
  const increment = () => {
    setCount(count + 1);
  };
  return {
    count,
    increment
  };
}

export default function CounterPage({ initialCount }) {
  const { count, increment } = useCounter(initialCount);
  return (
    <div>
      Number is {count}
      <Button onClick={increment}>+</Button>
    </div>
  );
}
