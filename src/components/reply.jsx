import { useState } from "react";
import RatingButton from "./rating-button";
import Button from "./button";
import Modal from "./modal";
import Profile from "./profile";
import Textarea from "./textarea";

const Reply = ({ data, user, desktop, onDelete }) => {
  const [openModal, setOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editReply, setEditReply] = useState(data.content);

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
                    value={`@${data.user.username} ${editReply}`}
                    onChange={(e) => {
                      const editedComment = e.target.value
                        .split(" ")
                        .slice(1)
                        .join(" ");
                      setEditReply(editedComment);
                    }}
                  />
                  <button
                    onClick={() => setEdit(false)}
                    className="h-fit w-fit rounded-lg bg-moderateBlue px-6 py-[0.625rem] uppercase text-white caret-moderateBlue transition-opacity duration-300 ease-in-out hover:opacity-50"
                  >
                    Update
                  </button>
                </>
              ) : (
                <>
                  <div className="inline">
                    <span className="inline cursor-pointer font-medium text-moderateBlue">
                      @{data.user.username}
                    </span>
                    <p className="inline pl-1 text-grayishBlue">{editReply}</p>
                  </div>
                </>
              )}
            </div>
          </article>
        </li>
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
          <div className="flex w-full flex-col items-end gap-4">
            {edit ? (
              <>
                <Textarea
                  value={`@${data.user.username} ${editReply}`}
                  onChange={(e) => {
                    const editedComment = e.target.value
                      .split(" ")
                      .slice(1)
                      .join(" ");
                    setEditReply(editedComment);
                  }}
                />
                <button
                  onClick={() => setEdit(false)}
                  className="h-fit w-fit rounded-lg bg-moderateBlue px-6 py-[0.625rem] uppercase text-white caret-moderateBlue transition-opacity duration-300 ease-in-out hover:opacity-50"
                >
                  Update
                </button>
              </>
            ) : (
              <>
                <div className="inline">
                  <span className="inline cursor-pointer font-medium text-moderateBlue">
                    @{data.user.username}
                  </span>
                  <p className="inline pl-1 text-grayishBlue">{editReply}</p>
                </div>
              </>
            )}
          </div>
          <div className="flex w-full items-center justify-between">
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
      {openModal && (
        <Modal onClose={() => setOpenModal(false)} onDelete={onDelete} />
      )}
    </>
  );
};

export default Reply;
