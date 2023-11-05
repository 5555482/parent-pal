import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

export default function CounterPage({ initialCount }) {
  const { count, increment } = useCounter(initialCount);
  return (
    <div>
      Number is {count}
      <Button onClick={increment}>+</Button>
    </div>
  );
}
