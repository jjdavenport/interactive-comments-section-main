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
      <div className="flex h-fit items-center gap-1 rounded-xl bg-veryLightGray md:flex-col">
        <button
          className="flex h-8 w-10 justify-center p-2"
          onClick={increment}
          disabled={count === score + 1}
        >
          <img className="w-3 object-contain" src={plusIcon} alt="Increment" />
        </button>
        <span className="font-medium text-moderateBlue">{count}</span>
        <button
          className="flex h-8 w-10 justify-center p-2"
          onClick={decrement}
          disabled={count === score - 1}
        >
          <img className="w-3 object-contain" src={minusIcon} alt="Decrement" />
        </button>
      </div>
    </>
  );
};

export default RatingButton;
