import RatingButton from "./rating-button";
import Button from "./button";
import Modal from "./modal";
import { useState } from "react";

const Reply = ({ data, user, desktop, onDelete }) => {
  const [openModal, setOpenModal] = useState(false);

  if (desktop) {
    return (
      <>
        <article className="flex gap-6 rounded-lg bg-white p-4">
          <RatingButton score={data.score} />
          <div className="flex flex-col gap-4">
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
          <div className="flex gap-2 leading-5">
            <span className="font-medium text-darkBlue">
              {data.user.username}
            </span>
            {data.user.username === user && (
              <span className="rounded-sm bg-moderateBlue px-1 text-sm text-white">
                {data.user.username === user && "you"}
              </span>
            )}
          </div>
          <span className="text-grayishBlue">{data.createdAt}</span>
        </div>
        <div className="inline">
          <span className="inline font-medium text-moderateBlue">
            @{data.user.username}
          </span>
          <p className="inline pl-1 text-grayishBlue">{data.content}</p>
        </div>
        <div className="flex items-center justify-between">
          <RatingButton score={data.score} />
          {data.user.username !== user ? (
            <Button type="reply" />
          ) : (
            <>
              <div className="flex gap-4">
                <Button type="delete" />
                <Button type="edit" />
              </div>
            </>
          )}
        </div>
      </article>
      {openModal && (
        <Modal onClose={() => setOpenModal(false)} onDelete={onDelete} />
      )}
    </>
  );
};

export default Reply;
