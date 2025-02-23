import plusIcon from "../assets/icon-plus.svg";
import minusIcon from "../assets/icon-minus.svg";
import { useState } from "react";

const RatingButton = ({ score }) => {
  const [count, setCount] = useState(score);

  const increment = () => {
    setCount((prev) => Math.min(prev + 1, score + 1));
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - 1, score - 1));
  };

  return (
    <>
      <div className="flex gap-2">
        <button onClick={increment} disabled={count === score + 1}>
          <img className="w-4 bg-black" src={plusIcon} alt="Increment" />
        </button>
        <span>{count}</span>
        <button onClick={decrement} disabled={count === score - 1}>
          <img className="w-4 bg-black" src={minusIcon} alt="Decrement" />
        </button>
      </div>
    </>
  );
};

export default RatingButton;
