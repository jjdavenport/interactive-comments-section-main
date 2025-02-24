import { useMediaQuery } from "react-responsive";
import Comment from "./comment";
import data from "../assets/data.json";
import Add from "./add";

const Commments = () => {
  const comments = data.comments;
  const desktop = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <main className="flex flex-1 flex-col justify-center gap-4 px-4 py-8 md:max-w-screen-md">
        {comments.map((i) => (
          <Comment
            desktop={desktop}
            user={data.currentUser.username}
            key={i.id}
            data={i}
          />
        ))}
        <Add desktop={desktop} img={data.currentUser.image.webp} />
      </main>
    </>
  );
};

export default Commments;
