import RatingButton from "./rating-button";
import Button from "./button";

const Reply = ({ data, user }) => {
  const currentUser = () => {
    return data.user.username === user ? "You" : null;
  };
  return (
    <>
      <article className="bg-white p-4">
        <div className="flex justify-between">
          <img src={data.user.image.webp} />
          <span>
            {data.user.username} <span>{currentUser()}</span>
          </span>
          <span>{data.createdAt}</span>
        </div>
        <p className="inline">
          <span>@{data.user.username}</span> {data.content}
        </p>
        <div className="flex justify-between">
          <RatingButton score={data.score} />
          {data.user.username !== user ? (
            <Button type="reply" />
          ) : (
            <>
              <div className="flex gap-2">
                <Button type="delete" />
                <Button type="edit " />
              </div>
            </>
          )}
        </div>
      </article>
    </>
  );
};

export default Reply;
