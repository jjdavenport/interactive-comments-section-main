import Comment from "./comment";
import data from "../assets/data.json";
import Add from "./add";

const Commments = () => {
  const comments = data.comments;
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4">
        {comments.map((i) => (
          <Comment user={data.currentUser.username} key={i.id} data={i} />
        ))}
        <Add img={data.currentUser.image.webp} />
      </main>
    </>
  );
};

export default Commments;
