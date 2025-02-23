import RatingButton from "./rating-button";

const Reply = ({ data, user }) => {
  const currentUser = () => {
    return data.user.username === user ? "You" : null;
  };
  return (
    <>
      <article className="bg-lightGrayishBlue p-4">
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
        <div>
          <RatingButton score={data.score} />
        </div>
      </article>
    </>
  );
};

export default Reply;
