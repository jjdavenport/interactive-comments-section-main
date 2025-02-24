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
      <div className="flex items-center gap-1 rounded-xl bg-veryLightGray">
        <button
          className="p-4"
          onClick={increment}
          disabled={count === score + 1}
        >
          <img className="w-3" src={plusIcon} alt="Increment" />
        </button>
        <span className="font-medium text-moderateBlue">{count}</span>
        <button
          className="p-4"
          onClick={decrement}
          disabled={count === score - 1}
        >
          <img className="w-3" src={minusIcon} alt="Decrement" />
        </button>
      </div>
    </>
  );
};

export default RatingButton;
