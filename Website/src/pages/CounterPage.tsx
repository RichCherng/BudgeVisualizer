// pages/Counter.tsx

import { useAtom } from "jotai";
import { basicCounterAtom } from "../components/Counter/basicCounter";

const CounterPage: React.FC = () => {
    const [count, setCount] = useAtom(basicCounterAtom)
    return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount( (c) => c + 1)}>Increment</button>
        <button onClick={() => setCount( (c) => c - 1)}>Decrement</button>
    </div>);
};

export default CounterPage;