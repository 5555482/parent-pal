import Button from "../components/Button";
import { useState } from "react";
import Panel from "../components/Panel";

export default function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = e => {
    const value = parseInt(e.target.value) || 0;
    setValueToAdd(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd(0);
  };
  return (
    <Panel className="m-3">
      <h2 className="text-lg">Number is {count}</h2>
      <div className="flex flex-row space-x-3">
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          value={valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        ></input>
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}
