import Comment from "./comment";
import data from "../assets/data.json";

const Commments = () => {
  const comments = data.comments;
  return (
    <>
      <main className="flex flex-col gap-4 p-4">
        {comments.map((i) => (
          <Comment user={data.currentUser.username} key={i.id} data={i} />
        ))}
      </main>
    </>
  );
};

export default Commments;
