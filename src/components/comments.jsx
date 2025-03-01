import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Comment from "./comment";
import data from "../assets/data.json";
import Add from "./add";

const Comments = () => {
  const [comments, setComments] = useState(data.comments);
  const [comment, setComment] = useState("");
  const desktop = useMediaQuery({ minWidth: 768 });

  const addComment = (comment) => {
    const newComment = {
      id: Date.now(),
      content: comment,
      createdAt: "just now",
      score: 0,
      user: data.currentUser,
      replies: [],
    };
    setComments((prev) => [...prev, newComment]);
  };

  const addReply = (commentId, reply, replyTo) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: Date.now(),
                  content: reply,
                  createdAt: "just now",
                  score: 0,
                  user: data.currentUser,
                  replyingTo: replyTo,
                },
              ],
            }
          : comment,
      ),
    );
  };

  const deleteComment = (id) => {
    setComments((prev) => prev.filter((comment) => comment.id !== id));
  };

  const deleteReply = (commentId, replyId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: comment.replies.filter((reply) => reply.id !== replyId),
            }
          : comment,
      ),
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    comment !== "" ? addComment(comment) & setComment("") : null;
  };

  return (
    <>
      <main className="flex flex-1 flex-col justify-center gap-4 px-4 py-8 md:max-w-screen-md">
        <ul className="flex flex-col gap-4">
          {comments.map((i) => (
            <>
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
            </>
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
