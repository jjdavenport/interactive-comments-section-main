import { useMediaQuery } from "react-responsive";
import Comment from "./comment";
import data from "../assets/data.json";
import Add from "./add";
import { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState(data.comments);
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

  return (
    <>
      <main className="flex flex-1 flex-col justify-center gap-4 px-4 py-8 md:max-w-screen-md">
        {comments.map((i) => (
          <Comment
            desktop={desktop}
            user={data.currentUser.username}
            key={i.id}
            data={i}
            onDelete={() => deleteComment(i.id)}
          />
        ))}
        <Add
          onSubmit={addComment}
          desktop={desktop}
          img={data.currentUser.image.webp}
        />
      </main>
    </>
  );
};

export default Comments;
