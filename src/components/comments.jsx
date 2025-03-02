import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Comment from "./comment";
import data from "../assets/data.json";
import Add from "./add";
import useComments from "../hooks/comment-provider";

const Comments = () => {
  const [comments, setComments] = useState(data.comments);
  const [comment, setComment] = useState("");
  const desktop = useMediaQuery({ minWidth: 768 });
  const { addReply, deleteComment, deleteReply, handleSubmit } = useComments({
    comment,
    setComments,
    data,
    setComment,
  });

  return (
    <>
      <main className="flex flex-1 flex-col justify-center gap-4 px-4 py-16 md:max-w-screen-md">
        <ul className="flex flex-col gap-4">
          {comments.map((i) => (
            <Comment
              key={i.id}
              desktop={desktop}
              user={data.currentUser.username}
              data={i}
              onDelete={() => deleteComment(i.id)}
              onDeleteReply={(id) => deleteReply(i.id, id)}
              img={data.currentUser.image.webp}
              onReply={(reply, replyTo) => addReply(i.id, reply, replyTo)}
            />
          ))}
        </ul>
        <Add
          autoFocus={false}
          text="Send"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onSubmit={handleSubmit}
          desktop={desktop}
          img={data.currentUser.image.webp}
        />
      </main>
    </>
  );
};

export default Comments;
