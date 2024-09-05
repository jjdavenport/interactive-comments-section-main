import { useState } from "react";
import Modal from "./modal";

const Comment = ({
  png,
  webp,
  username,
  createdAt,
  content,
  score,
  plus,
  minus,
  replyTo,
  editBtn: EditBtn,
  replyBtn: ReplyBtn,
  deleteBtn: DeleteBtn,
}) => {
  const [count, setCount] = useState(score);
  const [vote, setVote] = useState(0);
  const [modal, setModal] = useState(false);
  const open = () => setModal(true);

  const increment = () => {
    if (vote < 1) {
      setCount(count + 1);
      setVote(vote + 1);
    }
  };

  const decrement = () => {
    if (vote > -1) {
      setCount(count - 1);
      setVote(vote - 1);
    }
  };
  return (
    <>
      <article>
        <div className="flex">
          <img src={png} alt={webp} />
          <span>{username}</span>
          <span>{createdAt}</span>
        </div>
        <p>
          {replyTo ? `@${replyTo}` : null}
          <span>{content}</span>
        </p>
        <div className="flex gap-2">
          <button
            onClick={increment}
            className={`${vote > 0 ? "bg-black" : "bg-white"}`}
          >
            <img src={plus} alt={plus} />
          </button>
          <span
            className={`${vote > 0 || vote < 0 ? "bg-blue-500" : "bg-white"}`}
          >
            {count}
          </span>
          <button
            onClick={decrement}
            className={`${vote < 0 ? "bg-black" : "bg-white"}`}
          >
            <img src={minus} alt={minus} />
          </button>
        </div>
        <div className="flex gap-4">
          {EditBtn && <EditBtn />}
          {DeleteBtn && <DeleteBtn open={open} />}
          {ReplyBtn && <ReplyBtn />}
        </div>
      </article>
      {modal && <Modal close={setModal} />}
    </>
  );
};

export default Comment;
