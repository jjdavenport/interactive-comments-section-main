import Reply from "./reply";
import RatingButton from "./rating-button";
import Button from "./button";

const Comment = ({ data, user }) => {
  const replies = data.replies;
  return (
    <>
      <article className="bg-lightGrayishBlue p-4">
        <div className="flex justify-between">
          <img src={data.user.image.webp} />
          <span>{data.user.username}</span>
          <span>{data.createdAt}</span>
        </div>
        <p>{data.content}</p>
        <div>
          <RatingButton score={data.score} />
        </div>
      </article>
      <ul className="flex flex-col gap-4 border-l pl-4">
        {replies.map((i) => (
          <>
            <li>
              <Reply user={user} key={i.id} data={i} />
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default Comment;
