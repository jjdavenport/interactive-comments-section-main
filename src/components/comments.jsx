import { useMediaQuery } from "react-responsive";
import Comment from "./comment";
import data from "../assets/data.json";
import Add from "./add";
import { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState(data.comments);
  const [comment, setComment] = useState("");
  const desktop = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    console.log(comments);
  }, []);

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

  const deleteComment = (id) => {
    setComments((prev) => prev.filter((comment) => comment.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    comment !== "" ? addComment(comment) & setComment("") : null;
  };

  return (
    <>
      <main className="flex flex-1 flex-col justify-center gap-4 px-4 py-8 md:max-w-screen-md">
        {comments.map((i) => (
          <>
            <ul className="flex flex-col gap-4">
              <Comment
                desktop={desktop}
                user={data.currentUser.username}
                key={i.id}
                data={i}
                onDelete={() => deleteComment(i.id)}
                img={data.currentUser.image.webp}
              />
            </ul>
          </>
        ))}
        <Add
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
