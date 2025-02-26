import Reply from "./reply";
import RatingButton from "./rating-button";
import Button from "./button";
import { useEffect, useState } from "react";
import Modal from "./modal";
import Textarea from "./textarea";
import Profile from "./profile";

const Comment = ({ data, user, desktop, onDelete }) => {
  const [replies, setReplies] = useState(data.replies);
  const [openModal, setOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editComment, setEditComment] = useState(data.content);

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
        <li>
          <article className="flex gap-6 rounded-lg bg-white p-4">
            <RatingButton score={data.score} />
            <div className="flex w-full flex-col items-end gap-4">
              <div className="flex w-full justify-between">
                <Profile user={user} data={data} />
                {data.user.username !== user ? (
                  <Button type="reply" />
                ) : (
                  <>
                    <div className="flex gap-6">
                      <Button
                        onClick={() => setOpenModal(true)}
                        type="delete"
                      />
                      <Button onClick={() => setEdit(true)} type="edit" />
                    </div>
                  </>
                )}
              </div>
              {edit ? (
                <>
                  <Textarea
                    onChange={(e) => setEditComment(e.target.value)}
                    value={editComment}
                  />
                  <button
                    onClick={() => setEdit(false)}
                    className="h-fit w-fit rounded-lg bg-moderateBlue px-6 py-[0.625rem] uppercase text-white caret-moderateBlue transition-opacity duration-300 ease-in-out hover:opacity-50"
                  >
                    Update
                  </button>
                </>
              ) : (
                <p className="w-full text-grayishBlue">{editComment}</p>
              )}
            </div>
          </article>
        </li>
        {replies.length > 0 && (
          <ul className="ml-8 flex flex-col gap-4 border-l-2 border-lightGray pl-8">
            {replies.map((i) => (
              <>
                <Reply
                  onDelete={() => deleteReply(i.id)}
                  desktop={desktop}
                  user={user}
                  key={i.id}
                  data={i}
                />
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
      <li>
        <article className="flex flex-col items-end gap-4 rounded-lg bg-white p-4">
          <Profile user={user} data={data} />
          {edit ? (
            <>
              <Textarea
                onChange={(e) => setEditComment(e.target.value)}
                value={editComment}
              />
              <button
                onClick={() => setEdit(false)}
                className="h-fit w-fit rounded-lg bg-moderateBlue px-8 py-[0.625rem] uppercase text-white caret-moderateBlue transition-opacity duration-300 ease-in-out hover:opacity-50"
              >
                Update
              </button>
            </>
          ) : (
            <p className="w-full text-grayishBlue">{editComment}</p>
          )}
          <div className="flex w-full justify-between">
            <RatingButton score={data.score} />
            {data.user.username !== user ? (
              <Button type="reply" />
            ) : (
              <>
                <div className="flex gap-6">
                  <Button onClick={() => setOpenModal(true)} type="delete" />
                  <Button onClick={() => setEdit(true)} type="edit" />
                </div>
              </>
            )}
          </div>
        </article>
      </li>
      {replies.length > 0 && (
        <ul className="flex flex-col gap-4 border-l-2 border-lightGray pl-4">
          {replies.map((i) => (
            <>
              <Reply
                onDelete={() => deleteReply(i.id)}
                desktop={desktop}
                user={user}
                key={i.id}
                data={i}
              />
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
