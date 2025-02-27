import Reply from "./reply";
import RatingButton from "./rating-button";
import Button from "./button";
import { useEffect, useState } from "react";
import Modal from "./modal";
import Textarea from "./textarea";
import Profile from "./profile";
import Add from "./add";
import BlueButton from "./blue-button";

const Comment = ({ data, user, desktop, onDelete, img }) => {
  const [replies, setReplies] = useState(data.replies);
  const [openModal, setOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editComment, setEditComment] = useState(data.content);
  const [reply, setReply] = useState(false);
  const [replyComment, setReplyComment] = useState("");

  useEffect(() => {
    console.log(replies);
  }, [replies]);

  const deleteReply = (id) => {
    setReplies((prev) => prev.filter((reply) => reply.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    reply !== "" ? addReply(replyComment) & setReplyComment("") : null;
  };

  const addReply = (reply) => {
    const newReply = {
      id: Date.now(),
      content: reply,
      createdAt: "just now",
      score: 0,
      user: data.currentUser,
      replies: [],
    };
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
                  <Button onClick={() => setReply(true)} type="reply" />
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
                  <BlueButton onClick={() => setEdit(false)} text="Update" />
                </>
              ) : (
                <p className="w-full text-grayishBlue">{editComment}</p>
              )}
            </div>
          </article>
        </li>
        {reply && (
          <li>
            <Add
              onSubmit={handleSubmit}
              value={`@${data.user.username}, ${replyComment}`}
              onChange={(e) => {
                const newComment = e.target.value.split(" ").slice(1).join(" ");
                setReplyComment(newComment);
              }}
              text="Reply"
              desktop={desktop}
              img={img}
            />
          </li>
        )}
        {replies.length > 0 && (
          <ul className="ml-8 flex flex-col gap-4 border-l-2 border-lightGray pl-8">
            {replies.map((i) => (
              <>
                <Reply
                  key={i.id}
                  onDelete={() => deleteReply(i.id)}
                  desktop={desktop}
                  user={user}
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
              <BlueButton onClick={() => setEdit(false)} text="Update" />
            </>
          ) : (
            <p className="w-full text-grayishBlue">{editComment}</p>
          )}
          <div className="flex w-full justify-between">
            <RatingButton score={data.score} />
            {data.user.username !== user ? (
              <Button onClick={() => setReply(true)} type="reply" />
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
      {reply && (
        <li>
          <Add
            onSubmit={handleSubmit}
            value={`@${data.user.username}, ${replyComment}`}
            onChange={(e) => {
              const newComment = e.target.value.split(" ").slice(1).join(" ");
              setReplyComment(newComment);
            }}
            text="Reply"
            desktop={desktop}
            img={img}
          />
        </li>
      )}
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
