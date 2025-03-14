import { useState } from "react";
import PropTypes from "prop-types";

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
          className="group flex h-10 w-10 items-center justify-center p-2 md:h-8"
          onClick={increment}
          disabled={count === score + 1}
        >
          <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              className={`${count === score + 1 ? "fill-moderateBlue" : "fill-lightGrayishBlue group-hover:fill-moderateBlue"} transition-all duration-300 ease-in-out`}
            />
          </svg>
        </button>
        <span className="font-medium text-moderateBlue">{count}</span>
        <button
          className="group flex h-10 w-10 items-center justify-center p-2 md:h-8"
          onClick={decrement}
          disabled={count === score - 1}
        >
          <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              className={`${count === score - 1 ? "fill-moderateBlue" : "fill-lightGrayishBlue group-hover:fill-moderateBlue"} transition-all duration-300 ease-in-out`}
            />
          </svg>
        </button>
      </div>
    </>
  );
};

RatingButton.propTypes = {
  score: PropTypes.number,
};

export default RatingButton;
