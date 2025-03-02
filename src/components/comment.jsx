import { useState } from "react";
import Reply from "./reply";
import RatingButton from "./rating-button";
import Button from "./button";
import Modal from "./modal";
import Textarea from "./textarea";
import Profile from "./profile";
import Add from "./add";
import BlueButton from "./blue-button";
import PropTypes from "prop-types";

const Comment = ({
  data,
  user,
  desktop,
  onDelete,
  img,
  onReply,
  onDeleteReply,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editComment, setEditComment] = useState(data.content);
  const [reply, setReply] = useState(false);
  const [replyComment, setReplyComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    replyComment !== ""
      ? onReply(replyComment, data.user.username) &
        setReplyComment("") &
        setReply(false)
      : null;
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
                  <Button onClick={() => setReply(!reply)} type="reply" />
                ) : (
                  <>
                    <div className="flex gap-6">
                      <Button
                        onClick={() => setOpenModal(true)}
                        type="delete"
                      />
                      <Button onClick={() => setEdit(!edit)} type="edit" />
                    </div>
                  </>
                )}
              </div>
              {edit ? (
                <>
                  <Textarea
                    autoFocus={true}
                    onChange={(e) => setEditComment(e.target.value)}
                    value={editComment}
                  />
                  <BlueButton onClick={() => setEdit(!edit)} text="Update" />
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
              autoFocus={true}
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
        {data.replies.length > 0 && (
          <ul className="ml-8 flex flex-col gap-4 border-l-2 border-lightGray pl-8">
            {data.replies.map((i) => (
              <Reply
                key={i.id}
                onReply={onReply}
                onDeleteReply={() => onDeleteReply(i.id)}
                desktop={desktop}
                user={user}
                data={i}
                img={img}
              />
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
                autoFocus={true}
                onChange={(e) => setEditComment(e.target.value)}
                value={editComment}
              />
              <BlueButton onClick={() => setEdit(!edit)} text="Update" />
            </>
          ) : (
            <p className="w-full text-grayishBlue">{editComment}</p>
          )}
          <div className="flex w-full justify-between">
            <RatingButton score={data.score} />
            {data.user.username !== user ? (
              <Button onClick={() => setReply(!reply)} type="reply" />
            ) : (
              <>
                <div className="flex gap-6">
                  <Button onClick={() => setOpenModal(true)} type="delete" />
                  <Button onClick={() => setEdit(!edit)} type="edit" />
                </div>
              </>
            )}
          </div>
        </article>
      </li>
      {reply && (
        <li>
          <Add
            autoFocus={true}
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
      {data.replies.length > 0 && (
        <ul className="flex flex-col gap-4 border-l-2 border-lightGray pl-4">
          {data.replies.map((i) => (
            <Reply
              key={i.id}
              onReply={onReply}
              onDeleteReply={() => onDeleteReply(i.id)}
              desktop={desktop}
              user={user}
              data={i}
              img={img}
            />
          ))}
        </ul>
      )}
      {openModal && (
        <Modal onClose={() => setOpenModal(false)} onDelete={onDelete} />
      )}
    </>
  );
};

Comment.propTypes = {
  data: PropTypes.object,
  user: PropTypes.string,
  desktop: PropTypes.bool,
  onDelete: PropTypes.func,
  img: PropTypes.string,
  onReply: PropTypes.func,
  onDeleteReply: PropTypes.func,
};

export default Comment;
