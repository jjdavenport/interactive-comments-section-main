import Footer from "./components/footer";
import data from "./components/assets/data.json";
import Comment from "./components/comment";
import Input from "./components/input";
import plus from "./components/assets/icon-plus.svg";
import minus from "./components/assets/icon-minus.svg";
import Reply from "./components/reply";
import Delete from "./components/delete";
import Edit from "./components/edit";

function App() {
  const currentUser = data.currentUser;
  return (
    <>
      <main className="p-4">
        <ul>
          {data.comments.map((i, index) => (
            <li key={index}>
              <Comment
                score={i.score}
                png={i.user.image.png}
                webp={i.user.image.webp}
                username={i.user.username}
                createdAt={i.createdAt}
                content={i.content}
                plus={plus}
                minus={minus}
                {...(i.user.username === currentUser.username
                  ? { deleteBtn: Delete, editBtn: Edit }
                  : { replyBtn: Reply })}
              />
              {i.replies.length > 0 && (
                <ul>
                  {i.replies.map((i, index) => (
                    <li key={index}>
                      <Comment
                        score={i.score}
                        png={i.user.image.png}
                        webp={i.user.image.webp}
                        username={i.user.username}
                        createdAt={i.createdAt}
                        content={i.content}
                        plus={plus}
                        minus={minus}
                        replyTo={i.replyingTo}
                        {...(i.user.username === currentUser.username
                          ? { deleteBtn: Delete, editBtn: Edit }
                          : { replyBtn: Reply })}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <Input img={data.currentUser.image.png} />
      </main>
      <Footer />
    </>
  );
}

export default App;
