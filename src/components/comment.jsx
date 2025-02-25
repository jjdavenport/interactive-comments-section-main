import Reply from "./reply";
import RatingButton from "./rating-button";
import Button from "./button";
import { useEffect, useState } from "react";
import Modal from "./modal";

const Comment = ({ data, user, desktop, onDelete }) => {
  const [replies, setReplies] = useState(data.replies);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    console.log(replies);
  }, []);

  const deleteReply = (id) => {
    setReplies((prev) => prev.filter((reply) => reply.id !== id));
  };

  const addReply = (newReply) => {
    setReplies((prev) => [...prev, newReply]);
  };

  if (desktop) {
    return (
      <>
        <article className="flex gap-6 rounded-lg bg-white p-4">
          <RatingButton score={data.score} />
          <div className="flex w-full flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <img className="w-8" src={data.user.image.webp} />
                <span className="font-medium text-darkBlue">
                  {data.user.username}
                </span>
                <span className="text-grayishBlue">{data.createdAt}</span>
              </div>
              {data.user.username !== user ? (
                <Button type="reply" />
              ) : (
                <>
                  <div className="flex gap-4">
                    <Button onClick={() => setOpenModal(true)} type="delete" />
                    <Button type="edit" />
                  </div>
                </>
              )}
            </div>
            <p className="text-grayishBlue">{data.content}</p>
          </div>
        </article>
        {replies.length > 0 && (
          <ul className="ml-8 flex flex-col gap-4 border-l-2 border-lightGray pl-8">
            {replies.map((i) => (
              <>
                <li>
                  <Reply
                    onDelete={() => deleteReply(i.id)}
                    desktop={desktop}
                    user={user}
                    key={i.id}
                    data={i}
                  />
                </li>
              </>
            ))}
          </ul>
        )}
        {openModal && (
          <Modal onClose={() => setOpenModal(false)} onDelete={onDelete} />
        )}
      </>
    );
  }

  return (
    <>
      <article className="flex flex-col gap-4 rounded-lg bg-white p-4">
        <div className="flex items-center gap-4">
          <img className="w-8" src={data.user.image.webp} />
          <span className="font-medium text-darkBlue">
            {data.user.username}
          </span>
          <span className="text-grayishBlue">{data.createdAt}</span>
        </div>
        <p className="text-grayishBlue">{data.content}</p>
        <div className="flex justify-between">
          <RatingButton score={data.score} />
          {data.user.username !== user ? (
            <Button type="reply" />
          ) : (
            <>
              <div>
                <Button onClick={() => setOpenModal(true)} type="delete" />
                <Button type="edit " />
              </div>
            </>
          )}
        </div>
      </article>
      {replies.length > 0 && (
        <ul className="flex flex-col gap-4 border-l-2 border-lightGray pl-4">
          {replies.map((i) => (
            <>
              <li>
                <Reply
                  onDelete={() => deleteReply(i.id)}
                  desktop={desktop}
                  user={user}
                  key={i.id}
                  data={i}
                />
              </li>
            </>
          ))}
        </ul>
      )}
      {openModal && (
        <Modal onClose={() => setOpenModal(false)} onDelete={onDelete} />
      )}
    </>
  );
};

export default Comment;
