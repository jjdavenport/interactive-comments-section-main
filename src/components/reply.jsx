import RatingButton from "./rating-button";
import Button from "./button";

const Reply = ({ data, user }) => {
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
    </>
  );
};

export default Reply;
