import PropTypes from "prop-types";

const useComments = ({ comment, setComments, data, setComment }) => {
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

  return {
    handleSubmit,
    addReply,
    deleteComment,
    deleteReply,
  };
};

useComments.propTypes = {
  comment: PropTypes.string.isRequired,
  setComments: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  setComment: PropTypes.func.isRequired,
};

export default useComments;
