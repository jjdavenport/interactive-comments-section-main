import { useState } from "react";
import Textarea from "./textarea";

const Add = ({ img, desktop, onSubmit }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    comment !== "" ? onSubmit(comment) & setComment("") : null;
  };

  if (desktop) {
    return (
      <>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex items-start gap-4 rounded-lg bg-white p-4 md:p-6"
        >
          <img className="w-8 object-contain" src={img} />
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment…"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="h-fit rounded-lg bg-moderateBlue px-7 py-[0.625rem] uppercase text-white caret-moderateBlue transition-opacity duration-300 ease-in-out hover:opacity-50"
            >
              send
            </button>
          </div>
        </form>
      </>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-4 rounded-lg bg-white p-4"
      >
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="h-24 w-full resize-none appearance-none rounded-lg border border-lightGray px-5 py-3 focus:outline-none"
          placeholder="Add a comment…"
        />
        <div className="flex justify-between">
          <img className="w-8 object-contain" src={img} />
          <button
            type="submit"
            className="rounded-lg bg-moderateBlue px-8 py-[0.625rem] uppercase text-white"
          >
            send
          </button>
        </div>
      </form>
    </>
  );
};

export default Add;
